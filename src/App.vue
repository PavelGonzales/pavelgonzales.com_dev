<template lang="pug">
  #app
    .main-view
      .nav
        router-link.nav__arrow.up(:to="topLink") {{ topLinkText }}
        router-link.nav__arrow.left(:to="leftLink") {{ leftLinkText }}
        router-link.nav__arrow.right(:to="rightLink") {{ rightLinkText }}
        router-link.nav__arrow.bottom(:to="bottomLink") {{ bottomLinkText }}
      router-view.router-view
</template>

<script>
import { TimelineMax } from 'gsap';

export default {
  name: 'app',
  mounted() {
    this.mainView = document.querySelector('.main-view');
    if (this.$route.name === 'Main') {
      this.tl.fromTo(this.mainView, 0.6, { scale: 1.5, rotationX: 90 },
                                         { scale: 1, rotationX: 0 });
      this.topLinkText = 'резюме';
      this.leftLinkText = 'портфолио';
      this.rightLinkText = 'контакты';
      this.bottomLinkText = 'блог';
      this.topLink = 'resume';
      this.leftLink = 'portfolio';
      this.rightLink = 'contacts';
      this.bottomLink = 'blog';
    }
    if (this.$route.name === 'Resume') {
      this.tl.fromTo(this.mainView, 0.6, { scale: 1.5, rotationX: 90 },
                                          { scale: 1, rotationX: 0 });
      this.topLinkText = 'главная';
      this.leftLinkText = 'портфолио';
      this.rightLinkText = 'контакты';
      this.bottomLinkText = 'блог';
      this.topLink = '/';
      this.leftLink = 'portfolio';
      this.rightLink = 'contacts';
      this.bottomLink = 'blog';
    }
    if (this.$route.name === 'Blog') {
      this.tl.fromTo(this.mainView, 0.6, { scale: 1.5, rotationX: -90 },
                                          { scale: 1, rotationX: 0 });
      this.topLinkText = 'резюме';
      this.leftLinkText = 'портфолио';
      this.rightLinkText = 'контакты';
      this.bottomLinkText = 'главная';
      this.topLink = 'resume';
      this.leftLink = 'portfolio';
      this.rightLink = 'contacts';
      this.bottomLink = '/';
    }
    if (this.$route.name === 'Portfolio') {
      this.tl.fromTo(this.mainView, 0.6, { scale: 1.5, rotationY: 90 },
                                          { scale: 1, rotationY: 0 });
      this.topLinkText = 'резюме';
      this.leftLinkText = 'главная';
      this.rightLinkText = 'контакты';
      this.bottomLinkText = 'блог';
      this.topLink = 'resume';
      this.leftLink = '/';
      this.rightLink = 'contacts';
      this.bottomLink = 'blog';
    }
    if (this.$route.name === 'Contacts') {
      this.tl.fromTo(this.mainView, 0.6, { scale: 1.5, rotationY: -90 },
                                          { scale: 1, rotationY: 0 });
      this.topLinkText = 'резюме';
      this.leftLinkText = 'портфолио';
      this.rightLinkText = 'главная';
      this.bottomLinkText = 'блог';
      this.topLink = 'resume';
      this.leftLink = 'portfolio';
      this.rightLink = '/';
      this.bottomLink = 'blog';
    }
  },
  data: () => ({
    tl: new TimelineMax(),
    topLinkText: '',
    leftLinkText: '',
    rightLinkText: '',
    bottomLinkText: '',
    topLink: '',
    leftLink: '',
    rightLink: '',
    bottomLink: '',
  }),
  watch: {
    $route(to, from) {
      if ((to.name === 'Resume' && from.name === 'Main') ||
          (to.name === 'Resume' && from.name === 'Blog') ||
          (to.name === 'Resume' && from.name === 'Portfolio') ||
          (to.name === 'Resume' && from.name === 'Contacts')) {
        this.tl.fromTo(this.mainView, 1, { rotationY: 0, rotationX: -180 },
                                         { rotationY: 0, rotationX: 0 });
        this.topLinkText = 'главная';
        this.leftLinkText = 'портфолио';
        this.rightLinkText = 'контакты';
        this.bottomLinkText = 'блог';
        this.topLink = '/';
        this.leftLink = 'portfolio';
        this.rightLink = 'contacts';
        this.bottomLink = 'blog';
      }
      if ((to.name === 'Portfolio' && from.name === 'Main') ||
          (to.name === 'Portfolio' && from.name === 'Blog') ||
          (to.name === 'Portfolio' && from.name === 'Resume') ||
          (to.name === 'Portfolio' && from.name === 'Contacts')) {
        this.tl.fromTo(this.mainView, 1, { rotationX: 0, rotationY: -180 },
                                         { rotationX: 0, rotationY: 0 });
        this.topLinkText = 'резюме';
        this.leftLinkText = 'главная';
        this.rightLinkText = 'контакты';
        this.bottomLinkText = 'блог';
        this.topLink = 'resume';
        this.leftLink = '/';
        this.rightLink = 'contacts';
        this.bottomLink = 'blog';
      }
      if ((to.name === 'Blog' && from.name === 'Main') ||
          (to.name === 'Blog' && from.name === 'Resume') ||
          (to.name === 'Blog' && from.name === 'Portfolio') ||
          (to.name === 'Blog' && from.name === 'Contacts')) {
        this.tl.fromTo(this.mainView, 1, { rotationY: 0, rotationX: 180 },
                                     { rotationY: 0, rotationX: 0 });
        this.topLinkText = 'резюме';
        this.leftLinkText = 'портфолио';
        this.rightLinkText = 'контакты';
        this.bottomLinkText = 'главня';
        this.topLink = 'resume';
        this.leftLink = 'portfolio';
        this.rightLink = 'contacts';
        this.bottomLink = '/';
      }
      if ((to.name === 'Contacts' && from.name === 'Main') ||
          (to.name === 'Contacts' && from.name === 'Resume') ||
          (to.name === 'Contacts' && from.name === 'Portfolio') ||
          (to.name === 'Contacts' && from.name === 'Blog')) {
        this.tl.fromTo(this.mainView, 1, { rotationX: 0, rotationY: 180 },
                                     { rotationX: 0, rotationY: 0 });
        this.topLinkText = 'резюме';
        this.leftLinkText = 'портфолио';
        this.rightLinkText = 'главная';
        this.bottomLinkText = 'блог';
        this.topLink = 'resume';
        this.leftLink = 'portfolio';
        this.rightLink = '/';
        this.bottomLink = 'blog';
      }
      if (to.name === 'Main' && from.name === 'Resume') {
        this.tl.fromTo(this.mainView, 1, { rotationX: -180 }, { rotationX: 0 });
        this.topLinkText = 'резюме';
        this.leftLinkText = 'портфолио';
        this.rightLinkText = 'контакты';
        this.bottomLinkText = 'блог';
        this.topLink = 'resume';
        this.leftLink = 'portfolio';
        this.rightLink = 'contacts';
        this.bottomLink = 'blog';
      }
      if (to.name === 'Main' && from.name === 'Portfolio') {
        this.tl.fromTo(this.mainView, 1, { rotationY: -180 }, { rotationY: 0 });
        this.topLinkText = 'резюме';
        this.leftLinkText = 'портфолио';
        this.rightLinkText = 'контакты';
        this.bottomLinkText = 'блог';
        this.topLink = 'resume';
        this.leftLink = 'portfolio';
        this.rightLink = 'contacts';
        this.bottomLink = 'blog';
      }
      if (to.name === 'Main' && from.name === 'Blog') {
        this.tl.fromTo(this.mainView, 1, { rotationX: 180 }, { rotationX: 0 });
        this.topLinkText = 'резюме';
        this.leftLinkText = 'портфолио';
        this.rightLinkText = 'контакты';
        this.bottomLinkText = 'блог';
        this.topLink = 'resume';
        this.leftLink = 'portfolio';
        this.rightLink = 'contacts';
        this.bottomLink = 'blog';
      }
      if (to.name === 'Main' && from.name === 'Contacts') {
        this.tl.fromTo(this.mainView, 1, { rotationY: 180 }, { rotationY: 0 });
        this.topLinkText = 'резюме';
        this.leftLinkText = 'портфолио';
        this.rightLinkText = 'контакты';
        this.bottomLinkText = 'блог';
        this.topLink = 'resume';
        this.leftLink = 'portfolio';
        this.rightLink = 'contacts';
        this.bottomLink = 'blog';
      }
      console.log('beforeRouteUpdate', to, from);
    },
  },
};


</script>

<style lang="stylus">
@import '~stylus-mixins/index.styl'

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
  transform perspective(10000px)
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

.main-view 
  width calc(100vw - (35px*2))
  height calc(100vh - (120px*2))
  margin auto
  background-color #2F3550
  box-shadow 0px 0px 50px #292F47
  display flex
  align-items center
  justify-content center
  overflow hidden
  color #fff
  transform perspective(800px)
  transform-style preserve-3d
  position absolute
  top calc(50% - ((100vh - (120px*2)) / 2))
  left calc(50% - ((100vw - (35px*2)) / 2))
  +width-lessthan(1024)
    width calc(100vw - 50px)
    height calc(100vh - 100px)
    top -30px
  &:after 
    content ''
    display block
    width 50%
    height 100%
    background-color #323A57
    transform-origin 0% 0%
    position absolute 
    top 0
    left 0

.nav 
  position absolute 
  top 0
  left 0
  right 0
  bottom 0
  z-index 1
  &__arrow 
    cursor pointer
    display inline-block
    position absolute
    color #fff

    &.up
      transform translateX(-50%)      
      top 0 
      left 50%
    &.bottom 
      transform translateX(-50%)      
      bottom 0
      left 50%
    &.left 
      transform-origin right top      
      transform rotate(90deg) translateX(50%)
      top 50%
      right 0
    &.right 
      transform-origin left top      
      transform rotate(-90deg) translateX(-50%)
      top 50%
      left 0

.router-view
  position absolute 
  top 20px
  left 20px
  right 20px
  bottom 20px
  z-index 1
</style>
