<template>

  <div id="app">
     <Navbar/>
     <router-view :customers="customers" />
  </div>

</template>

<script>

import Navbar from './components/Navbar.vue'
export default {
  name: 'app',

  components: {
   Navbar
  },

  data(){
    return {
      customers:[
                {id:1, firstName:"Tijana", lastName:"Koprivica", email:"tijana@gmail.com", products:[]},
                {id:2, firstName:"Jana", lastName:"Janic", email:"jana@gmail.com",products:[]},
                {id:3, firstName:"Ana", lastName:"Anic", email:"ana@gmail.com",products:[]},
                {id:4, firstName:"Marko", lastName:"Markovic", email:"marko@gmail.com",products:[]},
                {id:5, firstName:"Janko", lastName:"Jankovic", email:"janko@gmail.com",products:[]},  
            ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
