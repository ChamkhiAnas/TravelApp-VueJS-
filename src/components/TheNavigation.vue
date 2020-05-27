<template>


    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
      <router-link to="/hawai">Hawai</router-link>
    </nav>

</template>

<style scoped>
#nav{
    display: flex;
    align-items: center;
    justify-content: center;
}

#nav a.classActive {
    color:#ab26ab ;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding:0 10px;
}

</style>