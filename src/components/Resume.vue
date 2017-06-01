<template lang="pug">
  .resume
    .resume__content
      h1.resume__word {{ word }}
</template>

<script>
export default {
  name: 'resume',
  data() {
    return {
      word: 'resume',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~stylus-mixins/index.styl'

</style>
