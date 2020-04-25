<template> <!-- Globalna navigacija -->
  <div id="app">
    <nav class="navbar">
      <router-link to="/"><img alt="Vue logo" src="@/assets/logor8.png"></router-link>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <router-link to="/nova-objava"><button class="objavi">POST</button></router-link>
      <router-link to="/prijava">Prijava</router-link>
      <router-link to="/registracija">Registracija</router-link> 
    </nav>
  </div>
</template>

<script>
//import store from '@/store'

export default {
  
    
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {

  .objavi {
   
    color: black;
    border: 1px #FFBE3D solid;
    border-radius: 5px;
    margin-top: 20px;
    width: 100px;
    height: 27px;
    background-color:#FFBE3D;
    font-family: 'catamaran';
    padding-top: 3px;
  }
    .objavi:hover{
      background-color: #F27405;
      border-color: #F2A922;
    } 

  .btn{
    color:#FFBE3D;
    border: 2px, #FFBE3D solid;
    border-color: #FFBE3D;
  }

  .bth:hover{
    color: black;
    background: #FFBE3D;
    border-color: #ffbe3d;
  }

  .btn :focus{
    border-color: #F29422;;
  }
  
  a{
    color: inherit;
    text-decoration: none;
  }

}
</style>