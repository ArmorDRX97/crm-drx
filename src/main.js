import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)


const firebaseConfig = {
  apiKey: "AIzaSyAshgD3sEL--t6yCWmaOQ1n2aGZMT-6bYA",
  authDomain: "crm-drx.firebaseapp.com",
  databaseURL: "https://crm-drx.firebaseio.com",
  projectId: "crm-drx",
  storageBucket: "crm-drx.appspot.com",
  messagingSenderId: "809579922024",
  appId: "1:809579922024:web:22f93190860f198a5f31dd",
  measurementId: "G-G5VNR2BMFL"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

