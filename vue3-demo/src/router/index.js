import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/@/views/home.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>import( '/@/views/About.vue'),
  },
],
router = createRouter({
  history:createWebHashHistory(),
  routes
})
export default  router