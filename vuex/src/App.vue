<template>
  <div id="app">
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/user/useradd">User</router-link>
      <router-link to="/mintui/actionsheet">MintUI</router-link>
    </header>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
header{
  text-align:center;
}
</style>
