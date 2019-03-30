<template>
    <div id="ActionSheet">
        <div class="left">
          <router-link to="/mintui/actionsheet">ActionSheet</router-link>
          <router-link to="/mintui/infinitescroll">InfiniteScroll</router-link>
        </div>
      <div class="right">
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
      components:{

      }
    }
</script>

<style lang="css" scoped>
.left{
  width:100%;
  border:#ddd solid 1px;
  min-height:80px;
}

</style>
