<template>
  <div :id="'popup-' + member.id" class="teamPopup">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <button @click="hideMember(member)">
            <font-awesome-icon class="close" icon="fa-solid fa-xmark" />
          </button>
          <img class="profile-pic" :src="member.img" :key="index" />
        </div>
        <div class="col-2">
          <button @click="hideMember(member)">
            <font-awesome-icon class="close" icon="fa-solid fa-xmark" />
          </button>
          <h4>{{ member.name }}</h4>
          <h5>{{ member.role }}</h5>
          <h6>{{ member.description }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: Object,
    hideMember: Function,
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
.teamPopup {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  background: #a6312a;
  padding-top: 50px;
  padding-bottom: 50px;
  z-index: 2;
  @media (max-width: 800px) {
    height: auto;
  }
  & .container {
    width: 60%;
    height: 100%;
    background: black;
    padding: 0;
    @media (max-width: 1700px) {
      width: 70%;
    }
    @media (max-width: 1400px) {
      width: 80%;
    }
    @media (max-width: 1000px) {
      width: 90%;
    }

    & .row {
      width: 100%;
      margin: 0;
      height: 100%;
      & .col-1 {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;
        position: relative;
        @media (max-width: 800px) {
          width: 100%;
        }

        & button {
          background: none;
          border: none;
          display: none;
          @media (max-width: 800px) {
            display: flex;
          }
          & .close {
            font-size: 25px;
            color: black;
            position: absolute;
            top: 5%;
            right: 5%;
          }
        }
        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          @media (max-width: 800px) {
            max-height: 600px;
            object-position: top center;
          }
          @media (max-width: 500px) {
            max-height: 400px;
            object-position: top center;
          }
          @media (max-width: 400px) {
            max-height: 300px;
            object-position: top center;
          }
        }
      }
      & .col-2 {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 0;
        padding: 50px;
        position: relative;
        @media (max-width: 800px) {
          width: 100%;
        }
        @media (max-width: 500px) {
          padding: 10% 5% 10% 5%;
        }

        & button {
          background: none;
          border: none;
          @media (max-width: 800px) {
            display: none;
          }
          & .close {
            font-size: 25px;
            color: white;
            position: absolute;
            top: 5%;
            right: 10%;
          }
        }

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
        & h5 {
          font-family: Gotham Light;
          color: white;
          font-size: 18px;
          margin-bottom: 50px;

          @media (max-width: 500px) {
            font-size: 16px;
          }
        }
        & h6 {
          font-family: Gotham Light;
          color: white;
          margin-bottom: 20px;
          font-size: 18px;
          line-height: 1.5;
          @media (max-width: 500px) {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
