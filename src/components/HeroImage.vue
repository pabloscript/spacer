<template>
  <div class="heroImage"></div>
</template>

<script>
export default {
  name: 'HeroImage',
};
</script>

<style lang="scss" scoped>
  .heroImage {
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background: url('../assets/heroimage.jpg') no-repeat 80% 100%;
  }

  .heroImage::after {
    content: '';
    background: rgba(0,0,0, .2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }

</style>
