<template>
    <div id="User">
      这是用户页面(打开用户并且直接显示添加用户)
      <div class="content">
        <div class="leftCont">
          <ul>
            <li><router-link to="/user/useradd">添加用户</router-link></li>
            <li><router-link to="/user/userlist">用户列表</router-link></li>
          </ul>
        </div>

        <div class="rightCont">
          <router-view></router-view>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="css" scoped>

.leftCont{
  width:20%;
  float:left;
  border-right:1px solid #111;
  height:500px;
}
  .rightCont{
    width:70%;
    float:left;
  }
</style>
