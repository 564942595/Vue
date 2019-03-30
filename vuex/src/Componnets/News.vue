<template>
    <div>
      news
      <br>
      vux获取是数据：{{this.$store.state.count}}
      <br><br>
      <button @click="reduce()">--所有组件的count值</button>
      <br><br><br><br><br>
      <ul>
        <li v-for="item in list">
            <router-link :to="'/newsdetails?aid='+item.aid">{{item.title}}</router-link>
        </li>
      </ul>

    </div>
</template>

<script>
  import store from '../vuex/store.js'
    export default {
        data() {
            return {
              list:[],
            }
        }  ,
        store,
        methods:{
          requestData(){
            var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
            this.$http.get(api).then((res)=>{
                console.log(res);
                this.list=res.body.result;
                this.$store.commit("setVuexList",res.body.result);
            },(err)=>{

            })
          },
          reduce(){
            this.$store.commit('reduce',2);
          }
        },mounted(){
          const ListData=this.$store.state.list;
          if(ListData.length>0){
            this.list=this.$store.state.list;//把news列表的数据保存在vuex，避免每次打开路由都要重新请求
          }else{
            this.requestData();
          }
       }
    }
</script>

<style lang="scss" scoped>

</style>
