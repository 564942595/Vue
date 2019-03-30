<template>
    <div id="InfiniteScroll">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in list">{{ item.title }}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              list:[],
              page:1,
              loading:false,
            }
        },
      methods:{
        loadMore(){//这个函数int的时候就是触发的
          this.loading=true;//loading =true ;不请求
          var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page="+this.page;
          this.$http.get(api).then((res)=>{
            this.list=this.list.concat(res.body.result);
            this.page++;
            if(res.body.result.length<20){
              this.loading=true;
            }else{
              this.loading=false;
            }
          },(err)=>{
            console.log(err)
          })
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
