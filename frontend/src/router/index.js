import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Teacher from "../views/Teacher.vue";
import NewComment from "../views/New-Comment.vue";
//import axios from 'axios'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new-Comment",
    name: "New-Comment",
    component: NewComment,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: `/teacher/:id`,
    name: "Teacher",
    props: true,
    component: Teacher,
  },
];

/* var teachers = fetchTeachers()
console.log(teachers);

 */
/* var arrayToAddRoutes = teachers.forEach( (teacher) => {
  
  return  {
    path: `/teacher/${teacher._id}`,
    name: `/teacher/${teacher._id}`,
    component: Teacher
  }
  
} )

console.log(arrayToAddRoutes); */

/* async function fetchTeachers() {
  const response = await axios.get('http://localhost:3000/post/all/json') 
  return response.data
}
 */

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
