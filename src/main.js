import Vue from 'vue'
import App from './App.vue'

import GAuth from 'vue-google-oauth2'

Vue.use(GAuth, {
  clientId: '133184766686-dgmf3e0vn50llq46929krs00qgf80l35.apps.googleusercontent.com',
  scope: "email",
  plugin_name:'App Name that you used in google developer console API'

})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
