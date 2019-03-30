<template>
    <div>
      Vuex实现不同组件之间的数据共享，和数据的持久化
      <br>
      获取vuex的state公共数据：{{this.$store.state.count}}-------{{this.$store.getters.computedCount}}
      <br><br>
      <button @click="addCount()">++所有组件的count值</button>
      <br><br><br><br><br>
        home
        <button @click="ToNews()">编程式路由，跳转到News页面</button>

      <br>
      MintUi 的使用方法：
      <br>
      <p>按钮的使用</p>
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
      <br>

      <p>watch监听</p>
      买了<input type="text" v-model="AppleNum">个苹果，每个10元，一共 <input type="text" v-model="AppleMoney">元
      <br>
      {{NewAppleNum}}--{{NewAppleMoney}}
    </div>
</template>

<script>
  import store from '../vuex/store.js';
    export default {
        data() {
            return {
              AppleNum:0,
              AppleMoney:0,
              NewAppleNum:null,
              NewAppleMoney:null,
            }
        },
        store,
        methods:{
          ToNews(){
            //编程式路由

            //第一种：直接跳转，加参数
           // this.$router.push({path:"/news"})
           // this.$router.push({path:'/newsdetails?aid=496'})

            //第二种：命名路由
            this.$router.push({name:'newsdateails',query:{aid:496}})
          },
          addCount(){
            this.$store.commit("add",2);
          }
        },
        components:{

        },
        watch:{
          AppleNum:function(newVals,oldvals){
            console.log(oldvals);
            console.log(newVals);

            this.NewAppleNum=newVals;
            this.NewAppleMoney=this.AppleNum*10;
          },
//          AppleNum:function(newVals){
//
//            this.AppleNum=newVals;
//             this.AppleMoney=this.AppleNum*10;
//          }
        }
    }

</script>

<style lang="scss" scoped>

</style>
