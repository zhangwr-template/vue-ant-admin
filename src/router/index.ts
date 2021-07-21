import * as VueRouter from 'vue-router'
// import MainContainer from "../layouts/MainContainer.vue";
const routes:any = [
  {
    path: '/login',
    component: ()=>import('./../pages/login/login.component.vue'),
  },
  {
    path: '/main',
    component: ()=>import('./../components/test.vue'),
    children: [
      {
        path: 'table-list',
        component: ()=>import('./../pages/table-list/table-list.component.vue'),
      }]
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router
