// 导入css文件
import '../statics/css/reset.css';

import Vue from 'vue';
import App from './Map.vue';

import vueRouter from 'vue-router';
Vue.use(vueRouter);

import login from './components/login.vue';
var router = new vueRouter({
    routes:[
    // {path:'/',redirect:'/login'},
    // {path:'/login',component:login}
    ]
});

new Vue({
	el:'#map',
	router,
	render:create=>create(App)
})