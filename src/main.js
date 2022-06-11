import { createApp } from 'vue'
import store from './store/store'
import vueMixin from './plugins/vueMixin.js'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import router from './router'

const app = createApp(App)
app.use(VueGtag, {
    config: { id: "G-WJSVRELDM3" }
})
app.mixin(vueMixin)
app.use(store)
app.use(router)
app.mount('#app')