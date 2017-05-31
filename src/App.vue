<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
  name: 'app',
  mounted() {
    if (this.$route.name === 'Main') {
      TweenMax.fromTo(this.$el, 0.6, { scale: 1.5, rotationX: 90 }, { scale: 1, rotationX: 0 });
    }
    if (this.$route.name === 'Resume') {
      TweenMax.fromTo(this.$el, 0.6, { scale: 1.5, rotationX: 90 }, { scale: 1, rotationX: 180 });
    }
    if (this.$route.name === 'Blog') {
      TweenMax.fromTo(this.$el, 0.6, { scale: 1.5, rotationX: -90 }, { scale: 1, rotationX: -180 });
    }
    if (this.$route.name === 'Portfolio') {
      TweenMax.fromTo(this.$el, 0.6, { scale: 1.5, rotationY: 90 }, { scale: 1, rotationY: 180 });
    }
    if (this.$route.name === 'Contacts') {
      TweenMax.fromTo(this.$el, 0.6, { scale: 1.5, rotationY: -90 }, { scale: 1, rotationY: -180 });
    }
  },
  data: () => ({
    transitionName: 'slide-left',
  }),
  watch: {
    $route(to, from) {
      if ((to.name === 'Resume' && from.name === 'Main') ||
          (to.name === 'Resume' && from.name === 'Blog') ||
          (to.name === 'Resume' && from.name === 'Portfolio') ||
          (to.name === 'Resume' && from.name === 'Contacts')) {
        TweenMax.fromTo(this.$el, 1, { rotationY: 0, rotationX: 0 },
                                     { rotationY: 0, rotationX: 180 });
      }
      if ((to.name === 'Portfolio' && from.name === 'Main') ||
          (to.name === 'Portfolio' && from.name === 'Blog') ||
          (to.name === 'Portfolio' && from.name === 'Resume') ||
          (to.name === 'Portfolio' && from.name === 'Contacts')) {
        TweenMax.fromTo(this.$el, 1, { rotationX: 0, rotationY: 0 },
                                     { rotationX: 0, rotationY: 180 });
      }
      if ((to.name === 'Blog' && from.name === 'Main') ||
          (to.name === 'Blog' && from.name === 'Resume') ||
          (to.name === 'Blog' && from.name === 'Portfolio') ||
          (to.name === 'Blog' && from.name === 'Contacts')) {
        TweenMax.fromTo(this.$el, 1, { rotationY: 0, rotationX: 0 },
                                     { rotationY: 0, rotationX: -180 });
      }
      if ((to.name === 'Contacts' && from.name === 'Main') ||
          (to.name === 'Contacts' && from.name === 'Resume') ||
          (to.name === 'Contacts' && from.name === 'Portfolio') ||
          (to.name === 'Contacts' && from.name === 'Blog')) {
        TweenMax.fromTo(this.$el, 1, { rotationX: 0, rotationY: 0 },
                                     { rotationX: 0, rotationY: -180 });
      }
      if (to.name === 'Main' && from.name === 'Resume') {
        TweenMax.fromTo(this.$el, 1, { rotationX: -180 }, { rotationX: 0 });
      }
      if (to.name === 'Main' && from.name === 'Portfolio') {
        TweenMax.fromTo(this.$el, 1, { rotationY: -180 }, { rotationY: 0 });
      }
      if (to.name === 'Main' && from.name === 'Blog') {
        TweenMax.fromTo(this.$el, 1, { rotationX: 180 }, { rotationX: 0 });
      }
      if (to.name === 'Main' && from.name === 'Contacts') {
        TweenMax.fromTo(this.$el, 1, { rotationY: 180 }, { rotationY: 0 });
      }
      console.log('beforeRouteUpdate', to, from);
    },
  },
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
</style>
