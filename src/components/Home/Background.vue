<template>
  <div class="background">
    <vue-particles
      class="particles"
      color="#ffae42"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#ffae42"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.background {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  & .particles {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
}
</style>
