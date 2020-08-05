import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import main from '@/views/main'
import teacherView from '@/views/Teacher/teacherView'
import classView from '@/views/Teacher/classView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[{
        path: '/Teacher/classView',
        name: 'classView',
        component: classView
      }]
    }
  ]
})
