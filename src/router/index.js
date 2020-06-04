import Vue from 'vue'
import Router from 'vue-router'

import BlogsList from '../modules/BlogsList'
import UpsertBlog from '../modules/UpsertBlog'
 

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'blogsList',
      component: BlogsList,
    },
    {
        path: '/upsert/:id',
        name: 'upsertBlog',
        component: UpsertBlog,
      },
      {
        path: '/upsert',
        name: 'upsertBlog',
        component: UpsertBlog,
      },
  ],
})
