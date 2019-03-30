<template>
    <div>
        详情
      <h2>{{list.title}}</h2>
      <div v-html="list.content"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              list:[]
            }
        },
      mounted(){
          console.log(this.$route.query)
        var aid=this.$route.query.aid;
        console.log(aid)
        this.getData(aid);
      },
      methods:{
        getData(aid){
          var api="http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid;
          this.$http.get(api).then((res)=>{
            console.log(res);
            this.list=res.body.result[0];
          },(err)=>{

          })
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
