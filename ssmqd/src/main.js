import Vue from 'vue'

import ElementUI from 'element-ui' //新添加1
import 'element-ui/lib/theme-chalk/index.css' //新添加2，避免后期打包样式不同，要放在import App from './App';之前

// process.env.MOCK && require('@/mock')

import axios from '@/api/http' //            #vue项目对axios的全局配置
import VueAxios from 'vue-axios'


import App from './App'
import router from './router'
import store from './store'


Vue.use(ElementUI) //新添加3

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  data: {
    //自定义的事件总线对象，用于父子组件的通信
    Bus: new Vue()
  }
})