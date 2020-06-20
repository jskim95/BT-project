import Vue from 'vue'
import Router from 'vue-router'
import main from './component/main'
import inside from './component/inside'
import trend from './component/trend'
import newsRoom from './component/newsRoom'


Vue.use(Router)

export default new Router({
  routes :[
    {
      path:'/',
      component:main,
      children:[
        {
          path:'inside',
          component:inside,
        },

        {
          path:'trend',
          component:trend,
        },

        {
          path:'newsRoom',
          component:newsRoom,
        },
      ] // children 태그 끝
    } // 부모 태그 끝
  ] // routes 끝
})
