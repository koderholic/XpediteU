<template>
  <div id="app">
    <v-app>
      <app-banner></app-banner>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    AppNav: Navbar,
    AppBanner: Banner,
    AppFooter: Footer
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
}
</style>
