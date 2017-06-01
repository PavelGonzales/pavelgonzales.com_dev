<template lang="pug">
  .main
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

</style>
