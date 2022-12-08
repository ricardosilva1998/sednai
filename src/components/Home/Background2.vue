<template>
  <div class="background2" id="background2">
    <v-vanta class="vanta" effect="globe" :options="options"></v-vanta>
  </div>
</template>

<script>
import VVanta from "vue-vanta";
export default {
  components: { VVanta },
  data() {
    return {
      options: {
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: "#a6312a",
        color2: " #a6312a",
        backgroundColor: "black",
      },
    };
  },
};
</script>

<style lang="scss">

.background2 {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;

  & .vanta {
    height: 100vh;
    width: 100%;
    & .vanta-container {
      width: 100%;
      height: 100%;
      & .vanta-canvas {
      }
    }
  }
  & .particles {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
}
</style>
