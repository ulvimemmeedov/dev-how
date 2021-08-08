import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router';
import router from './route';
import './registerServiceWorker'
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);
Vue.use(VueRouter);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
