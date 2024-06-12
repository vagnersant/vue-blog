<script>
import { RouterLink, RouterView } from 'vue-router'
import Cabecalho from './components/Cabecalho.vue'
export default {
  components: {
    Cabecalho,
    RouterLink,
    RouterView
  },
  methods: {
    
  }
}
</script>

<template>
  <div>
    <div id="pagina">
      <Cabecalho />  
    </div>
    <div id="corpo">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  template {
    position: absolute;
    right: -400px;
    width: 100%;
  }

  #pagina {
    position: relative;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    margin: 20px 0;
  }
</style>
