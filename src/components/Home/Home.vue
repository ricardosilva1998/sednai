<template>
  <div class="home">
    <Header />
    <VideoBlock video="video.mp4" />
    <Midpage />
    <ImageBlock image="2.jpg" />
    <Footer />
  </div>
</template>

<script>
import Header from "../Header.vue";
import Midpage from "./Midpage.vue";
import Footer from "../Footer.vue";
import VideoBlock from "./VideoBlock.vue";
import ImageBlock from "./ImageBlock.vue";
export default {
  components: { Header, Footer, Midpage, ImageBlock, VideoBlock },
};
</script>

<style lang="scss">
.home {
  position: relative;
}
</style>
