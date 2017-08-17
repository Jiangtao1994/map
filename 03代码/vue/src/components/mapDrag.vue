<template>
	<div class="m-map">
    <!-- <div class="search" v-if="placeSearch">
      <input type="text" placeholder="请输入关键字" v-model="searchKey">
      <button type="button" @click="handleSearch">搜索</button>
      <div id="js-result" v-show="searchKey" class="result"></div>
    </div> -->
    <div id="js-container" class="map"></div>
  </div>
</template>

<script>
import remoteLoad from '../utils/remoteLoad.js'
import { MapKey, MapCityName } from '../config/config'
export default{
	data(){
		return{

		}
	},
  watch: {
    searchKey () {
      if (this.searchKey === '') {
        this.placeSearch.clear()
      }
    }
  },
	methods:{
    initMap () {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      let AMapUI = this.AMapUI = window.AMapUI
      let AMap = this.AMap = window.AMap
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        let mapConfig = {
          zoom: 16,
          cityName: MapCityName
        }
        if (this.lat && this.lng) {
          mapConfig.center = [this.lng, this.lat]
        }
        let map = new AMap.Map('js-container', mapConfig)
        // // 加载地图搜索插件
        // AMap.service('AMap.PlaceSearch', () => {
        //   this.placeSearch = new AMap.PlaceSearch({
        //     pageSize: 5,
        //     pageIndex: 1,
        //     citylimit: true,
        //     city: MapCityName,
        //     map: map,
        //     panel: 'js-result'
        //   })
        // })
        // // 启用工具条
        // AMap.plugin(['AMap.ToolBar'], function () {
        //   map.addControl(new AMap.ToolBar({
        //     position: 'RB'
        //   }))
        // })
        // // 创建地图拖拽
        // let positionPicker = new PositionPicker({
        //   mode: 'dragMap', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
        //   map: map // 依赖地图对象
        // })
        // // 拖拽完成发送自定义 drag 事件
        // positionPicker.on('success', positionResult => {
        //   // 过滤掉初始化地图后的第一次默认拖放
        //   if (!this.dragStatus) {
        //     this.dragStatus = true
        //   } else {
        //     this.$emit('drag', positionResult)
        //   }
        // })
        // // 启动拖放
        // positionPicker.start()
      })
    }
	},
	created () {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
    // 未载入高德地图API，则先载入API再初始化
    } else {
      // 载入高德地图和UI组件
      Promise.all([
        remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`),
        remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      ]).then(() => {
        this.initMap()
      })
    }
  }
}
</script>

<style scoped>
.m-map{
  width: 100%;
  height: 100%;
}
#js-container {
  width:auto;
  height: 100%; 
} 
</style>