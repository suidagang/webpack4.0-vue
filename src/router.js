import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'hello', component: r => require.ensure([], () => r(require('./components/hello')), 'Hello') }
]

export default new VueRouter({
    routes: routes
})