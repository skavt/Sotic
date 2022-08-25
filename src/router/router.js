import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from "../core/components/layout/DefaultLayout";

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: DefaultLayout,
			meta: {requiresAuth: true},
			children: []
		}
	]
})

export default router;