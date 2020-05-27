<template>
  <div class="home">

    <h1>
      All Destinations
    </h1>
    <div class="destinations">
    <div v-for="dest in destinations" :key="dest.name">
          <router-link :to="{name:'destinationsDetails',params:{id:dest.id}}">
            <h2>{{dest.name}}</h2>
          </router-link>

          <figure>
            <router-link :to="{name:'destinationsDetails',params:{id:dest.id}}">
              <!-- <img :src="require(`/${dest.image}`)" :alt="dest.name">  -->
            <img :src="require(`../assets/${dest.image}`)" :alt="dest.name"> 
            </router-link>
          </figure>
    </div>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src

import store from '@/store.js';

export default {
  name: "Home",
  components: {
  },
  data:function(){
    return {
      destinations:store.destinations
    }
  }
};
</script>


<style scoped>
  .home{
    max-width: 1200px;
    margin: 0 auto;
  }
  img{
    max-width: 200px;
  }
  .destinations{
    display: flex;
    justify-content: space-between;
  }
  a{
    color: lightseagreen;
    text-decoration: none;
  }
  a:hover,
  a:visited{
    text-decoration: underline;
  }

</style>