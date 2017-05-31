<template lang="pug">
  .main
    .nav
      router-link.nav__arrow.up(to="resume") резюме
      router-link.nav__arrow.bottom(to="blog") блог
      router-link.nav__arrow.left(to="portfolio") портфолио
      router-link.nav__arrow.right(to="contacts") контакты
    .main__content
      h1.main__word {{ word }}
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      word: 'main',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~stylus-mixins/index.styl'

hoverEasing = cubic-bezier(0.23, 1, 0.32, 1)
returnEasing = cubic-bezier(0.445, 0.05, 0.55, 0.95)

.main 
  width calc(100vw - (77.5px*2))
  height calc(100vh - (137px*2))
  margin auto
  background-color forestgreen
  box-shadow 0px 0px 50px #292F47
  display flex
  align-items center
  justify-content center
  overflow hidden
  color #fff
  transform perspective(800px)
  transform-style preserve-3d
  position absolute
  top calc(50% - ((100vh - (137px*2)) / 2))
  left calc(50% - ((100vw - (77.5px*2)) / 2))
  +width-lessthan(1024)
    width calc(100vw - 50px)
    height calc(100vh - 100px)
    top -30px
  // &:after 
  //   content ''
  //   display block
  //   width 50%
  //   height 100%
  //   background-color #323A57
  //   transform-origin 0% 0%
  //   position absolute 
  //   top 0
  //   left 0

  &__content
    position relative
    z-index 2
    transform perspective(800px)
    transform-style preserve-3d
    transition 1s hoverEasing
    pointer-events none

  &__word 
    transform translateZ(50px)
    font-size 425px
    line-height 0.8
    margin 0
    pointer-events none
    text-shadow 0 0 50px rgba(255,255,255,0.2)
    +width-lessthan(768)
      font-size 245px
  
  &__subtitle
    font-weight 400
    transform translateZ(50px)
    +width-lessthan(768)
      padding-left 46px
      padding-right 46px
    
  
  &__ticker
    font-weight 600
    font-size 350px
    white-space nowrap
    transition 1s hoverEasing
    +width-lessthan(768)
      display none

.perspective-wrap
  position absolute
  left 56%
  bottom -23%
  transform perspective(800px) 
  transform-style preserve-3d
  

.triangle-thin-1
.triangle-thin-2
.triangle-fill-1
svg
  position absolute
  z-index 1
  top 50%
  left 50%
  transform translate(-50%, -50%) translateZ(50px)

.triangle-thin-1
  transform translate(-50%, -67%)

.triangle-thin-2
  transform translate(-50%, -30%)

.triangle-fill-1
  top 53%
  left 56%

.circle-yellow-fill-big
  top 39%
  left 35%

.quare-cyan-fill-big
  top 20%
  left 58%

.circle-yellow-fill-big
.quare-cyan-fill-big
.triangle-fill-1
  z-index 2
  transform translate(0, 0)
  transition 1s hoverEasing

.nav 
  position absolute 
  top 0
  left 0
  right 0
  bottom 0
  z-index 10
  &__arrow 
    cursor pointer
    display inline-block
    position absolute
    color #fff

    &.up
      top 0 
      left 50%
    &.bottom 
      bottom 0
      left 50%
    &.left 
      top 50%
      right 0
    &.right 
      left 0
      top 50%


</style>
