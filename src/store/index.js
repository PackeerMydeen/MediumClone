/* eslint-disable no-param-reassign */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutations'

export default new Vuex.Store({
  state: {
    posts: [
      {
        id:1,
        user: {
          first_name: "Packeer",
          last_name: "Mydeen"
        },
        created_date:
          "Wed Jun 03 2020 07:03:04 GMT-0700 (Pacific Daylight Time)",
        title: "New Story",
        description: "efwefwe"
      },
      {
        id:2,
        user: {
          first_name: "Packeer",
          last_name: "Mydeen"
        },
        created_date:
          "Wed Jun 03 2020 07:03:04 GMT-0700 (Pacific Daylight Time)",
        title: "New Story",
        description: "efwefwe"
      },
      {
        id:3,
        user: {
          first_name: "Packeer",
          last_name: "Mydeen"
        },
        created_date:
          "Wed Jun 03 2020 07:03:04 GMT-0700 (Pacific Daylight Time)",
        title: "New Story",
        description: "efwefwe"
      }
    ]
  },
mutations
})
