<template>
  <app-nav/>
  <router-view></router-view>
  <mo-footer/>
</template>

<script>
import AppNav from './components/AppNav'
import MoFooter from './components/MoFooter'
  export default {
  components: { AppNav, MoFooter },
    name: 'App',

  }
</script>

<style lang="scss">

</style>