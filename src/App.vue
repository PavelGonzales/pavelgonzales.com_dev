<template>
  <div id="app"
       @mousemove="handleMouseMove"
       @mouseenter="handleMouseEnter"
       @mouseleave="handleMouseLeave">
    <router-view class="movedCard" :translate="translateStyle" :rotate="rotateStyle"></router-view>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  name: 'app',
  mounted() {
    TweenMax.from(this.$el, 0.6, { scale: 1.5, rotationX: 90 });
    this.width = this.$el.offsetWidth;
    this.height = this.$el.offsetHeight;

    this.movedCard = document.querySelector('.movedCard');
    this.garden = document.querySelector('#app');

    this.maxX = this.garden.clientWidth - this.movedCard.clientWidth;
    this.maxY = this.garden.clientHeight - this.movedCard.clientHeight;

    window.addEventListener('deviceorientation', this.handleOrientation);

    document.querySelector('body').style.height = `${window.innerHeight}px`;
  },
  data: () => ({
    document: null,
    windowHeight: null,
    movedCard: null,
    garden: null,
    maxX: 0,
    maxY: 0,
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
    accelerationX: 0,
    accelerationY: 0,
    accelerationZ: 0,
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    rotateStyle() {
      let rX;
      let rY;
      let result;
      if (window.innerWidth < 768) {
        rX = this.accelerationX;
        rY = this.accelerationY;
        result = {
          transform: `rotateY(${rY}deg) rotateX(${rX}deg)`,
        };
      } else {
        rX = this.mousePX * 10;
        rY = this.mousePY * -10;
        result = {
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
        };
      }
      return result;
    },
    translateStyle() {
      const tX = this.mousePX * -10;
      const tY = this.mousePY * -10;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
    rotateDevice() {
      const dX = this.accelerationX;
      const dY = this.accelerationY;
      return {
        transform: `rotateY(${dY}deg) rotateX(${dX}deg)`,
      };
    },
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$el.offsetLeft - (this.width / 2);
      this.mouseY = e.pageY - this.$el.offsetTop - (this.height / 2);
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
    handleOrientation(event) {
      let x = event.beta;
      let y = event.gamma;

      this.accelerationX = (this.maxX * x) / 180;
      this.accelerationY = -((this.maxY * y) / 180);

      if (x > 90) {
        x = 90;
      }
      if (x < -90) {
        x = -90;
      }

      x += 90;
      y += 90;
    },
  },
};


</script>

<style lang="stylus">
html 
body
  margin 0
  padding 0

body
  background-color #2A2F4A
  width 100vw
  height 100%
  overflow hidden
  position fixed
  top 0
  left 0
  &:after 
    content ''
    display block
    width 1390px
    height 700px
    background-color #31ECDB
    transform rotate(35deg)
    transform-origin 0% 0%
    position absolute 
    top 270px
    left 0
    z-index -1

#app
  transform perspective(800px)
  transform-style preserve-3d
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  display flex
  flex-wrap wrap
  z-index 2
    
.acc-info
  display none
  position fixed 
  top 0
  right 0
  background-color black
  color #efefef
  z-index 99999
  width 200px
  height 100px

</style>
