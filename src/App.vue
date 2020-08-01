<template>
  <div id="app">
   <router-view></router-view>
   <tabbarmini></tabbarmini>
  </div>
</template>

<script>
//import tabbarmini from './src/components/content/tab-barmini.vue'
import tabbarmini from "components/content/tab-barmini";

export default {
  
  name: 'App',
  components: {
    tabbarmini
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
