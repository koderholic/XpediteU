<template>
<div class="homeView">

  <v-layout row align-center>
    <v-flex md8 offset-md2>
      <h3 class="display-3">Xpedite Your Processes!</h3>
      <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
      <v-divider class="my-3"></v-divider>
    </v-flex>
  </v-layout>

  <!-- <v-layout row wrap>
    <v-flex xs12 sm6 md3 offset-md1 class="card-spacing">
      <v-card>
        <v-card-media :src="cardImg1" height="100px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md3 class="card-spacing">
      <v-card>
        <v-card-media :src="cardImg1" height="100px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md3 class="card-spacing">
      <v-card>
        <v-card-media :src="cardImg1" height="100px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout> -->
   <v-layout row align-center :style="{padding: '0 100px'}">
    <v-flex md12 class="wow fadeIn"  data-wow-delay="0.4s" :style="{visibility: 'visible',animationName: 'fadeIn', animationDelay: '0.4s'}">

        <div id="mdb-lightbox-ui">
          <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="pswp__bg"></div>
              <div class="pswp__scroll-wrap">
                  <div class="pswp__container">
                      <div class="pswp__item"></div>
                      <div class="pswp__item"></div>
                      <div class="pswp__item"></div>
                  </div>
                  <div class="pswp__ui pswp__ui--hidden">

                      <div class="pswp__top-bar">
                          <div class="pswp__counter"></div>
                          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                          <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                          <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                          <div class="pswp__preloader">
                              <div class="pswp__preloader__icn">
                                  <div class="pswp__preloader__cut">
                                      <div class="pswp__preloader__donut"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                      </button>

                      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                      </button>

                      <div class="pswp__caption">
                          <div class="pswp__caption__center"></div>
                      </div>

                  </div>

              </div>

          </div>
        </div>
        <div class="row mdb-lightbox" data-pswp-uid="1">
            <figure class="col-md-4 noSpacing ">
              <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20%2884%29.jpg" data-size="1600x1067">
                <img :src="cardImg1" class="img-spread z-depth-1" alt="MDB website displayed on iPad"> </a>
            </figure>
            <figure class="col-md-4 noSpacing">
             <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/5big.jpg" data-size="1600x1067">
              <img :src="cardImg2" class="img-spread z-depth-1" alt="MDB website displayed on laptop"> </a>
            </figure>
            <figure class="col-md-4 noSpacing">
              <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20%2881%29.jpg" data-size="1600x1067">
              <img :src="cardImg3" class="img-spread z-depth-1" alt="MDB website displayed on iPhone"> </a>
            </figure>
        </div>

      </v-flex>
   </v-layout>
</div>
</template>

<script>
import cardImg1 from '@/assets/img/xpedite4.jpeg'
import cardImg2 from '@/assets/img/xpedite 5.jpeg'
import cardImg3 from '@/assets/img/xpedite1.jpeg'

export default {
  name: 'Home',
  data () {
    return {
      cardImg1: cardImg1,
      cardImg2: cardImg2,
      cardImg3: cardImg3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {margin-top: 50px;
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .card-spacing {
    margin-right: 50px;
  }
  .homeView {
    margin-bottom: 50px;
  }
  .img-spread {
      max-width: 100%;
      width: 100%;
      height: 300px;
  }
  .noSpacing {
    padding-right: 0;
    padding-left: 0;
  }
  @media screen and (max-width: 769px) {
    .card-spacing {
      margin-right: 0;
    }
  }

</style>
