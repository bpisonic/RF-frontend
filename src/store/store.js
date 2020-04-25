import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email:'',
    idoflogged:''

  },
  getters:{
    
  },
  mutations: {
    //postavlja state email na ono sto je prosljeđeno kao status, email
    emailLogin(state, status) {
      state.email = status;
    },
    idofLogged(state, status) {
      //postavlja state email na ono sto je prosljeđeno kao status, id
      state.idoflogged = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
