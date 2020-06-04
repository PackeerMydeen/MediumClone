/* eslint-disable no-param-reassign */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutations'
let dummy=[{
  id:1,
  user: {
    first_name: "Packeer",
    last_name: "Mydeen"
  },
  created_date:
    "Wed Jun 03 2020 07:03:04 GMT-0700 (Pacific Daylight Time)",
  title: "New Story",
  description: "My new Medium Article"
},
{
  id:2,
  user: {
    first_name: "Arjun",
    last_name: ""
  },
  created_date:
    "Wed Jun 03 2020 07:03:04 GMT-0700 (Pacific Daylight Time)",
  title: "New Story2",
  description: "efwefwe"
},
{
  id:3,
  user: {
    first_name: "Ram",
    last_name: "Dev"
  },
  created_date:
    "Wed Jun 03 2020 07:03:04 GMT-0700 (Pacific Daylight Time)",
  title: "New Story3",
  description: "efwefwe"
}]
export default new Vuex.Store({
  state: {
    posts: [
      ...dummy
    ]
  },
mutations
})
