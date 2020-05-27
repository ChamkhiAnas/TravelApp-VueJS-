<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
      <router-link to="/hawai">Hawai</router-link> -->
      <!-- <router-link to="/hawai">Hawai</router-link> -->
    <TheNavigation />

    <router-view :key="$route.path"/>
  </div>
</template>

<script>

import TheNavigation from '@/components/TheNavigation.vue'
export default {
  components:{
    TheNavigation
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



</style>
