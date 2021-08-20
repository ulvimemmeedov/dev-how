import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: [],
        posts:[],
        notifications:[],
        token:null
      },
      mutations: {
        change(state, user) {
          state.user = user
        },
        postchange(state,posts){
          state.posts = posts
        },
        notifications(state,notifications){
          state.notifications = notifications
        },
        token(state,token){
          state.token = token
        }
      },
      getters: {
        user: state => state.user,
        posts:state => state.posts,
        notifications:state => state.notifications,
        token:state => state.token
      }
})
