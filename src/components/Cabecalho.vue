  <script>
import { userService } from '@/servicos/userService';

  export default {
    name: 'Navbar',
    data() {
      return {
        menuOpen: false,
        userPhoto: 'https://clickdo.co.uk/wp-content/uploads/2016/12/Amazon-IAM-User.png' 
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      desconectar() {
        userService.desconectar();
        this.menuOpen = false;
        this.$router.push('/login');
      },
      getCurrentPath() {
        return this.$route.path;
        console.log(this.$route.path);
      }
    },
  }
  </script>

<template>
  <nav class="navbar">
    <img src="../assets/favicon.png" alt="Logo"/>
    <div class="navbar-left">
      <img :src="userPhoto" @click="toggleMenu" class="user-photo" alt="User Photo" v-if="getCurrentPath()!='/login'"/>
      <div v-if="menuOpen" class="menu">
        <ul>
          <li v-on:click.prevent="desconectar">Logout</li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
<style scoped>
  .navbar {
    display: flex;
    background-color: #ffffff;
    padding: 10px;
    color: white;
  }
  
  .navbar-left {
    position: relative;
  }
  
  .user-photo {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .menu {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: white;
    color: black;
    border: 1px solid #ddd;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu ul li {
    padding: 10px 20px;
  }
  
  .menu ul li a {
    text-decoration: none;
    color: black;
  }
  
  .menu ul li a:hover {
    background-color: #eee;
  }
</style>
  