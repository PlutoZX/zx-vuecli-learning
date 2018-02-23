<template>
  <div class="home">
    <img src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to 小旋子 Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
