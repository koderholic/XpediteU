<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="100%"
                img-height="auto"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                class="bannerNav banner"
    >

      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="slider1">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="slider2">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="slider3">
        <h1>Hello world!</h1>
      </b-carousel-slide>

    </b-carousel>

    <b-navbar toggleable="md" type="dark" variant="info" class="navBanner" :style="{
    bottom: '500px!important'}">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">XpeditedU</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Signup / Login</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="bannerOverlay">wnjfenfjwbn</div>
  </div>
</template>

<style>
  /* .img-fluid{
    width: 100%;
    height: 500px!important;
  } */
  .bannerNav {
    position: relative;
  }
  .navbanner {
    position: absolute;
    bottom: 500px!important;
    top: 0;
    z-index: 9999!important;
  }
  .navbar-brand, .nav-link{
    font-size: 16px;
    color: #b91b31;
    font-weight: bold;
  }
  .banner {
    position: relative;
  }
  .bannerOverlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 500px;
    background: rgba(23, 162, 184, .5);
    z-index: 99;
  }
</style>

<script>
import slider1 from '@/assets/img/xpedite1.jpg'
import slider2 from '@/assets/img/xpedite.jpg'
import slider3 from '@/assets/img/xpedite3.jpg'

export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      slider1: slider1,
      slider2: slider2,
      slider3: slider3
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->
