<template lang="pug">
  .main(:style="rotate")
    .nav
      .nav__arrow.up резюме
      .nav__arrow.bottom блог
      .nav__arrow.left портфолио
      .nav__arrow.right контакты
    .main__content(:style="rotate")
      h1.main__word {{ word }}
      h3.main__subtitle {{ subtitle }}
    .perspective-wrap
      .main__ticker(:style="translate") {{ ticker }}
    svg.triangle-thin-1(height="435" width="540")
      polygon(points="270,0 540,435 0,435" style="fill:transparent; stroke:rgba(255,255,255,0.17); stroke-width:1")
    svg.triangle-thin-2(width="920" height="695" viewBox="0 0 920 693")
      polygon(points="460,695 920,0 0,0" style="fill:transparent; stroke:rgba(255,255,255,0.07); stroke-width:1")

    // svg.triangle-fill-1(:style="translate" height="75" width="90")
    //   polygon(points="45,0 90,75 0,75" style="fill:#EF4F54; stroke:transparent; stroke-width:0")

    // svg.quare-cyan-fill-big(:style="translate" height="80" width="80")
    //   polygon(points="0,0 80,0 80,80 0,80" style="fill:#26E2D2; stroke:transparent; stroke-width:0")

    // svg.circle-yellow-fill-big(:style="translate" height="106" width="106")
    //   circle(cx="53" cy="53" r="53" style="fill:#F7E243; stroke:transparent; stroke-width:0")
</template>

<script>
import { TweenMax } from 'gsap';
import { Power0 } from 'EasePack';
import './../common/DrawSVGPlugin';

export default {
  name: 'hello',
  props: [
    'rotate',
    'translate',
  ],
  mounted() {
    TweenMax.from('.triangle-thin-1 polygon', 3, { drawSVG: '0%', ease: Power0.easeNone });
    TweenMax.from('.triangle-thin-2 polygon', 3, { drawSVG: '0%', ease: Power0.easeNone });
  },
  data() {
    return {
      word: 'G',
      subtitle: 'Pavel Gonzales front-end developer',
      ticker: 'developer',
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
  background-color #2F3550
  box-shadow 0px 0px 50px #292F47
  position relative
  display flex
  align-items center
  justify-content center
  overflow hidden
  color #fff
  transition 1s hoverEasing
  transform perspective(800px)
  transform-style preserve-3d
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

  &__content
    position relative
    z-index 2
    transform perspective(800px)
    transform-style preserve-3d
    transition 1s hoverEasing

  &__word 
    transform translateZ(50px)
    font-size 425px
    line-height 0.8
    margin 0
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
  z-index 1
  &__arrow 
    cursor pointer
    display inline-block
    position absolute
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
