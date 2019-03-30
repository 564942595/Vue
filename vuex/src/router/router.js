import Vue from 'vue'
import VueRouter from'vue-router'


import Home from '../Componnets/Home.vue'
import News from '../Componnets/News.vue'
import NewsDetails from '../Componnets/NewsDetails.vue'
import User from '../Componnets/User.vue'
import UserAdd from '../Componnets/User/UseAdd.vue'
import UserList from '../Componnets/User/UseList.vue'
import MintUI from '../Componnets/MIntui.vue'
import ActionSheet from '../Componnets/MintUi/ActionSheet.vue';
import InfiniteScroll from '../Componnets/MintUi/InfiniteScroll.vue';

Vue.use(VueRouter);


const routes=[
  {path:"/home",component:Home},
  {path:"/news",component:News},
  {
    path:"/user",
    component:User,
    children:[//---------------------------------路由的嵌套
      {path:"useradd",component:UserAdd},//注意这个地方path不能加/
      {path:"userlist",component:UserList},
    ]
  },
  {path:"/newsdetails",component:NewsDetails,name:'newsdateails'},
  {
    path:"/mintui",
    component:MintUI,
    children:[
      {path:"actionsheet",component:ActionSheet},
      {path:"infinitescroll",component:InfiniteScroll},
    ]
  },
  {path:"*",redirect:"/home"},

]

const router=new VueRouter({
  //mode:"history",//默认的是hash模式，url不美观，改为history ;需要后台配置？
  routes
})
export default router;
