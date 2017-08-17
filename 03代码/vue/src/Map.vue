<template>
<div id="map">
    <mapDrag @drag="dragMap" class="mapbox"></mapDrag>
</div>
</template>

<script>
import mapDrag from './components/mapDrag.vue'
export default{
	components: {
   		mapDrag
  	},
	data(){
		return{
			lng: null,
	        lat: null,
	        address: null,
	        nearestJunction: null,
	        nearestRoad: null,
	        nearestPOI: null
		}
	},
	methods:{
		dragMap(){
      console.log(data)
      this.dragData = {
	        lng: data.position.lng,
	        lat: data.position.lat,
	        address: data.address,
	        nearestJunction: data.nearestJunction,
	        nearestRoad: data.nearestRoad,
	        nearestPOI: data.nearestPOI
      		}
		}
	},
	creatd(){

	}
}
</script>

<style scoped>
html,body{
	width: 100%;
	height: 100%;
}
#map{
	width: 100%;
	height: 100%;
}

</style>