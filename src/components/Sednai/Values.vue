<template>
  <div class="values">
    <div class="tv-static"></div>
    <div class="container">
      <div class="col">
        <h4>{{ values.h4 }}</h4>
        <h3>{{ values.h3 }}</h3>
        <p v-for="(value, index) in values.values" :key="index">
          <strong>{{ value.title }}</strong> - {{ value.text }}
        </p>
      </div>
      <hr class="white-hr" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: Object,
  },
};
</script>

<style lang="scss">
@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  30% {
    transform: translate(3%, -15%);
  }
  50% {
    transform: translate(12%, 9%);
  }
  70% {
    transform: translate(9%, 4%);
  }
  90% {
    transform: translate(-1%, 7%);
  }
}

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

.values {
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
      & h3 {
        font-family: Coolvetica-Regular;
        color: white;
        margin-bottom: 50px;
        font-size: 35px;
        @media (max-width: 500px) {
          font-size: 25px;
        }
      }
      & h4 {
        font-family: Coolvetica-Regular;
        color: white;
        margin-bottom: 30px;
        font-size: 25px;
        @media (max-width: 500px) {
          font-size: 20px;
        }
      }
      & p {
        font-family: Gotham Light;
        color: white;
        margin-bottom: 20px;
        font-size: 18px;
        @media (max-width: 500px) {
          font-size: 16px;
        }
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
</style>
