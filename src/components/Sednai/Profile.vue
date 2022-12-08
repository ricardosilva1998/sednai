<template>
  <div class="profile">
    <div class="tv-static"></div>
    <div class="container">
      <div class="row">
        <div class="col-img">
          <img :src="profile.img" />
        </div>
        <div class="col-txt">
          <h4>{{ profile.name }}</h4>
          <h5>{{ profile.description }}</h5>
          <div class="row">
            <a href="">ID - XXXXXXXXXXXX </a>
            <a href=""
              ><font-awesome-icon
                class="linkedin-icon"
                icon="fa-brands fa-linkedin"
              />
              <span>-</span> Connect With {{ profile.name }}
            </a>
          </div>
        </div>
      </div>
      <hr class="white-hr" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
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
.profile {
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
      width: 100%;
      margin: 0;

      & .col-img {
        width: 30%;
        transition: all 0.5s;
        @media (max-width: 1100px) {
          width: 40%;
        }
        @media (max-width: 850px) {
          width: 100%;
          margin-bottom: 40px;
          padding: 0;
        }
        & img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          object-position: center;
          @media (max-width: 850px) {
            object-position: top center;
          }
        }
      }
      & .col-txt {
        width: 70%;
        transition: all 0.5s;
        @media (max-width: 1100px) {
          width: 60%;
        }
        @media (max-width: 850px) {
          width: 100%;
          padding: 0;
        }
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        & h4 {
          font-family: Coolvetica-Regular;
          text-align: left;
          font-size: 35px;
          color: white;
          @media (max-width: 500px) {
            font-size: 25px;
          }
        }
        & h5 {
          font-family: Gotham Light;
          text-align: left;
          font-size: 20px;
          color: white;
          line-height: 1.5;
          width: 100%;
          @media (max-width: 500px) {
            font-size: 16px;
          }
        }
        & .row {
          margin: 0;
          margin-top: 50px;

          & a {
            font-family: Gotham Light;
            color: white;
            text-decoration: none;
            display: flex;
            flex-direction: row;
            align-items: center;
            width: auto;
            line-height: 1;
            @media (max-width: 500px) {
              font-size: 14px;
              margin-bottom: 10px;
            }
            @media (max-width: 850px) {
              padding: 0;
              padding-right: 30px;
            }
            @media (max-width: 390px) {
              padding: 0;
              padding-right: 0;
            }
            & span {
              font-size: 18px;
              margin-right: 10px;
            }
            & .linkedin-icon {
              font-size: 18px;
              margin-right: 10px;
            }
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
