import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";




Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props:true

  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  // {
  //   path:'/brazil',
  //   name:"brazil",
  //   component:()=> import(/* webpackChunkName: "brazil" */ "../views/Brazil")
  // },
  // {
  //   path:'/hawaii',
  //   name:"hawaii",
  //   component:()=> import(/* webpackChunkName: "hawaii" */ "../views/Hawai")
  // },
  // {
  //   path:'/jamaica',
  //   name:"jamaica",
  //   component:()=> import(/* webpackChunkName: "jamaicca" */"../views/Jamaica")
  // },
  // {
  //   path:'/panama',
  //   name:"panama",
  //   component:()=> import(/* webpackChunkName: "panama" */ "../views/Panama")
  // },
  {
    path:'/destination/:slug',
    name:"destinationsDetails",
    component:()=> import(/* webpackChunkName: "destinationsDetails" */ "../components/TheDestinationDetails"),
    props:true,
    children:[
      {
        path:':experienceSlug',
        name:'experienceDetails',
        props:true,
        component:()=> import(/* webpackChunkName: "experienceDetails" */ "../views/ExperienceDetails"),
      }
    ]
  },
];

const router = new VueRouter({
  mode:'history',
  linkExactActiveClass:"classActive" ,
  routes
});

export default router;
