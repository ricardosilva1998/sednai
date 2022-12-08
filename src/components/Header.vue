<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <a href="/"><img src="/assets/sednaiWhite.png" class="logo" /> </a>
        </div>
        <div class="col-2">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>

<style lang="scss">
.header {
  padding-top: 20px;
  padding-bottom: 20px;
  position: fixed;
  background: #121212;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 3;
  & .container {
    max-width: 90%;
    & .col-1 {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      & a {
        & .logo {
          height: 60px;
        }
      }
    }
    & .col-2 {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    }
  }
}
</style>
