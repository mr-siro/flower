import Vue from 'vue'
import App from './App.vue'
import Modal from '@/components/Modal'
import Message from "@/components/message/index";
import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);
Vue.config.productionTip = false
Vue.component('Modal', Modal)
Vue.prototype.$message = Message;
new Vue({
  render: h => h(App),
}).$mount('#app')
