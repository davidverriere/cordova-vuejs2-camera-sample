var Vue = require('vue');
var VueResource = require('vue-resource');
var Camera = require('./components/camera-component.vue');

Vue.use(VueResource);

var vm = new Vue({
  components: {
    'camera': Camera
  }
}).$mount('#app');