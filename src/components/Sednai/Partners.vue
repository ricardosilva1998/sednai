<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="partners">
    <div class="tv-static"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h4>
              {{ partners.title }}
            </h4>
          </div>
          <div class="row">
            <img
              v-for="(partner, index) in partners.partners"
              :key="index"
              :src="partner.img"
            />
          </div>
        </div>
        <div class="col">
          <p v-for="(paragraph, index) in partners.paragraphs" :key="index">
            {{ paragraph.text }}
          </p>
        </div>
      </div>
      <hr class="white-hr" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partners: Object,
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

.partners {
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
      top: -100%;
      background-image: url("/assets/filtro.png");
      animation: grain 1.5s steps(6) infinite;
    }
  }
  & .container {
    max-width: 90%;
    & .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0;
      & .col {
        padding: 0;
        @media (max-width: 710px) {
          width: 100%;
          display: flex;
          flex-direction: column;
          flex: 100%;
        }
        & .row {
          display: flex;
          flex-direction: row;
          align-items: center;
          & h4 {
            padding: 0;
            font-family: Coolvetica-Regular;
            text-align: left;
            font-size: 35px;
            color: white;
            margin-bottom: 50px;
            @media (max-width: 710px) {
              padding-left: 0;
            }
            @media (max-width: 500px) {
              font-size: 20px;
            }
          }
          & img {
            height: 40px;
            width: auto;
            padding-left: 0;
            @media (max-width: 1110px) {
              margin-bottom: 30px;
            }
            @media (max-width: 710px) {
              padding-left: 0;
              padding-right: 20px;
            }
          }
        }

        & p {
          font-family: Gotham Light;
          text-align: left;
          font-size: 16px;
          color: white;
          line-height: 1.5;
          width: 100%;
          @media (max-width: 500px) {
            font-size: 14px;
          }
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
