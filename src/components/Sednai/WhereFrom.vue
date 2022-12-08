<template>
  <div class="whereFrom">
    <div class="tv-static"></div>
    <div class="container">
      <div class="col">
        <h4>{{ whereFrom.h4 }}</h4>
        <h3>
          {{ whereFrom.h3 }}
        </h3>
        <h6>
          {{ whereFrom.h6 }}
        </h6>
        <hr class="white-hr" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    whereFrom: Object,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Coolvetica-Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Coolvetica-Regular"), url("/fonts/coolvetica.woff") format("woff");
}
@font-face {
  font-family: "Gotham Light";
  src: local("Gotham Light"), url("/fonts/GothamLight.ttf") format("truetype");
}
.whereFrom {
  background: #121212;
  height: auto;
  padding-top: 200px;
  position: relative;
  padding-bottom: 100px;
  @media (max-width: 500px) {
    padding-bottom: 50px;
  }
  & .tv-static {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    & .grain-img {
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      width: 200vw;
      height: 200vh;
      left: -50%;
      top: -50%;
      background-image: url("/assets/filtro.png");
      animation: grain 1.5s steps(6) infinite;
    }
  }

  & .container {
    max-width: 90%;
    & .col {
      & h4 {
        color: white;
        font-family: Coolvetica-Regular;
        width: 90%;
        font-size: 25px;
        margin-bottom: 30px;
        @media (max-width: 500px) {
          font-size: 20px;
        }
      }
      & h3 {
        color: white;
        font-family: Coolvetica-Regular;
        width: 90%;
        font-size: 35px;
        line-height: 1;
        margin-bottom: 30px;
        @media (max-width: 500px) {
          font-size: 25px;
        }
      }
      & h6 {
        color: white;
        font-family: Gotham Light;
        width: 90%;
        font-size: 18px;
        @media (max-width: 500px) {
          font-size: 16px;
        }
      }
      & .white-hr {
        color: white;
        z-index: 3;
        width: 100%;
        margin: 100px 0 0 0;
        @media (max-width: 500px) {
          margin: 50px 0 0 0;
        }
      }
    }
  }
}
</style>
