<template lang="html">
  <div id="app"> 
    <app-menu></app-menu>      
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'

export default {
  name: 'app',
  components: {
    AppMenu
  }
}
</script>

<style lang="stylus">
@import './assets/lib/normalize'
</style>