<template>
  <div class="team">
    <div class="tv-static"></div>
    <TeamPopup
      v-for="(member, index) in team.members"
      :key="index"
      :member="member"
      :hideMember="hideMember"
    />
    <div class="container">
      <div class="col">
        <h4>{{ team.h4 }}</h4>
        <h3>{{ team.h3 }}</h3>
        <div class="row">
          <div
            v-for="(member, index) in team.members"
            :key="index"
            class="miniProfile"
            @click="showMember(member)"
          >
            <img :src="member.img" />
            <span class="name">{{ member.name }}</span>
            <span class="role">{{ member.role }}</span>
          </div>
        </div>
      </div>
      <hr class="white-hr" />
    </div>
  </div>
</template>

<script>
import TeamPopup from "./TeamPopup.vue";
export default {
  methods: {
    showMember(member) {
      let id = "popup-" + member.id;
      document.getElementById(id).style.transition = "all 0.5s";
      document.getElementById(id).style.visibility = "visible";
      document.getElementById(id).style.transition = "all 0.5s";
      document.getElementById(id).style.opacity = "1";
    },
    hideMember(member) {
      let id = "popup-" + member.id;
      document.getElementById(id).style.transition = "all 0.5s";
      document.getElementById(id).style.visibility = "hidden";
      document.getElementById(id).style.transition = "all 0.5s";
      document.getElementById(id).style.opacity = "0";
    },
  },
  props: {
    team: Object,
  },
  components: { TeamPopup },
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
.team {
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
      top: -25%;
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
      & .row {
        width: 100%;
        margin: 0;
        & .miniProfile {
          width: 25%;
          height: auto;
          display: flex;
          flex-direction: column;
          transition: all 0.5s;
          padding-left: 0;
          padding-right: 20px;

          @media (max-width: 850px) {
            width: 33%;
            margin-bottom: 30px;
          }
          @media (max-width: 710px) {
            width: 50%;
            margin-bottom: 30px;
          }
          @media (max-width: 450px) {
            width: 100%;
            padding: 0;
            margin-bottom: 50px;
          }
          & img {
            width: 100%;
            height: auto;
          }
          & .name {
            font-family: Coolvetica-Regular;
            color: white;
            margin-top: 20px;
            font-size: 25px;
            @media (max-width: 500px) {
              font-size: 20px;
            }
          }
          & .role {
            font-family: Gotham Light;
            color: white;
            font-size: 18px;
            margin-top: 10px;
            padding-bottom: 20px;
            @media (max-width: 500px) {
              font-size: 16px;
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
