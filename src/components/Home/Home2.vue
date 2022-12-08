<template>
  <div class="home2">
    <Background2 />
    <Header />
    <MidpageTransparent />
    <FooterTransparent />
  </div>
</template>

<script>
import Header from "../Footer.vue";
import MidpageTransparent from "./MidpageTransparent.vue";
import FooterTransparent from "../FooterTransparent.vue";
import Background2 from "./Background2.vue";
export default {
  components: { Header, FooterTransparent, MidpageTransparent, Background2 },
};
</script>

<style lang="scss">
.home2 {
  position: relative;
}
</style>
