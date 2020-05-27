<template>

    <div class="destination">
        <h1>{{destination.name}}</h1>
        <div class="destination-details">
            <img :src="require(`../assets/${destination.image}`)" :alt="destination.name"> 
            <p>{{ destination.description}}</p>
        </div>

    <div class="experiences">
        <h2>Top Experiences in {{destination.name}}</h2>
        <div class="cards">
            <div v-for="exp in destination.experiences" :key="exp.name">

             <router-link class="card" :to="{name:'experienceDetails',params:{experienceSlug:exp.slug}}">
            <img :src="require(`@/assets/${exp.image}`)" :alt='exp.name' >
            <span class="card_text">{{exp.name}}</span>
             </router-link>
            </div>
        </div>
        <router-view :key="$route.path"/>
    </div>


    </div>
   

</template>


<script>
import store from '@/store.js';
export default {
    data:function(){
        return {
        }
    },
    props:{
        slug:{
            type:String,
            required:true,
        },
   
        
    },
    computed:{
        destination(){
               return store.destinations.find(
            destination => destination.slug==this.slug,
            )
        }
    },

}
</script>

<style scoped>
img {
max-width: 600px;
height: auto;
width: 100%;
max-height: 400px;
}
.destination-details {
display: flex;
justify-content: space-between;
}
p{
 margin: 0 40px;
font-size: 20px;
text-align: left;
}
.cards {
display: flex;
}
.cards img {
max-height: 200px;
}
.card {
padding: 0 20px;
position: relative;
}
.card__text {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
font-size: 25px;
font-weight: bold;
text-decoration: none;
}
</style>