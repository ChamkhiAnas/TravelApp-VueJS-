<template>


    <nav id="nav">
      <p class="logo">The Travel App</p>
      <ul class="nav-links">
        <li class="links">
          <router-link to="/">Home</router-link>
        </li>
        <li v-for="destination in destinations" :key="destination.name" class="links"> 
           <router-link :to="{name:'destinationsDetails',params:{id:destination.id}}">
                {{destination.name}}
            </router-link>
        </li>
      </ul>
   
    </nav>

</template>

<script>
import store from '@/store.js'; 
export default {
  data(){
    return {
      // destinationId:this.$route.params.id,
      destinations:store.destinations
    }
  }
  
}
</script>

<style scoped>
#nav{
    display: flex;
}

#nav a.classActive {
    color:#ab26ab ;
}
.nav-links {
display:flex
}
.links{
  padding-right: 20px;
  list-style: none;
}
.links:hover{
  text-decoration: underline;
}
.logo{
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding:0 10px;
}

</style>