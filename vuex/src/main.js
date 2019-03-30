import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/router.js'
import './assets/sacss/basic.css'




import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUi);

Vue.use(VueResource);



var vm=new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

