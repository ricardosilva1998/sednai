<template>
  <div class="midPage">
    <div class="tv-static"></div>
    <div class="container">
      <div class="col">
        <div class="row">
          <h3>
            Creator of a massive time-series analysis platform enabling the
            extraction of knowledge from temporal data at scale
          </h3>
        </div>
        <hr class="white-hr" />
        <div class="row">
          <div class="col">
            <h4>Data Handled in 2022</h4>
            <h5>
              Creator of a massive time-series analysis platform enabling the
              extraction of knowledge from temporal data at scale. Derived from
              an exceptional, decade-long in-making, astronomical framework for
              ESA Gaia Variability Studies project addressing both scalability
              and the knowledge-derivation process from time-series data.
            </h5>
          </div>
        </div>
        <hr class="white-hr" />
        <div class="row">
          <div class="col">
            <h4>Partners</h4>
            <div class="row">
              <img src="/assets/esa.png" />
              <img src="/assets/sql.png" />
              <img src="/assets/unigenevre.png" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@font-face {
  font-family: "SF Pro Bold";
  src: local("SF Pro Bold"),
    url("/fonts/SFPRODISPLAYBOLD.OTF") format("truetype");
}
@font-face {
  font-family: "SF Pro Regular";
  src: local("SF Pro Regular"),
    url("/fonts/SFPRODISPLAYREGULAR.OTF") format("truetype");
}
@font-face {
  font-family: "Gotham Light";
  src: local("Gotham Light"), url("/fonts/GothamLight.ttf") format("truetype");
}
@font-face {
  font-family: "Coolvetica-Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Coolvetica-Regular"), url("/fonts/coolvetica.woff") format("woff");
}

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

.midPage {
  padding: 0 5% 0 5%;
  position: relative;
  // @media (max-width: 1100px) {
  //   padding: 0 10% 0 10%;
  // }
  // @media (max-width: 550px) {
  //   padding: 0 5% 0 5%;
  // }

  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  height: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  // background: #262626;
  background: #121212;

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
      width: 300vw;
      height: 300vh;
      left: -50%;
      top: -50%;
      background-image: url("/assets/filtro.png");
      animation: grain 1.5s steps(6) infinite;
    }
  }
  & .container {
    height: 100%;
    max-width: 100%;

    & .col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      @media (max-width: 700px) {
        padding: 0;
      }
      & .row {
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: center;

        & h3 {
          text-align: center;
          color: white;
          transition: all 0.5s;
          width: 60%;
          text-align: center;
          font-family: Coolvetica-Regular;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 35px;
          @media (max-width: 1300px) {
            width: 80%;
          }
          @media (max-width: 1000px) {
            width: 90%;
          }
          @media (max-width: 700px) {
            width: 100%;
            padding: 0;
          }
          @media (max-width: 550px) {
            font-size: 20px;
          }
        }

        & .col {
          @media (max-width: 700px) {
            padding: 0;
          }
          & h4 {
            text-align: center;
            color: white;
            transition: all 0.5s;
            margin-bottom: 30px;
            width: 60%;
            font-family: Coolvetica-Regular;
            letter-spacing: 2px;
            font-size: 30px;

            @media (max-width: 1300px) {
              width: 80%;
            }
            @media (max-width: 1000px) {
              width: 90%;
            }
            @media (max-width: 700px) {
              width: 100%;
              padding: 0;
            }
            @media (max-width: 550px) {
              font-size: 18px;
            }
          }
          & h5 {
            text-align: center;
            color: white;
            transition: all 0.5s;
            width: 60%;
            font-family: Gotham Light;
            line-height: 1.5;
            font-size: 18px;

            @media (max-width: 1300px) {
              width: 80%;
            }
            @media (max-width: 1000px) {
              width: 90%;
            }
            @media (max-width: 700px) {
              width: 100%;
              padding: 0;
            }
            @media (max-width: 550px) {
              font-size: 14px;
            }
          }
        }
        & .row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 10px;
          & img {
            height: 40px;
            width: auto;
            margin-bottom: 10px;
          }
        }
      }

      & .white-hr {
        color: white;
        z-index: 3;
        width: 100%;
        margin: 100px 0 100px 0;
      }
    }
  }
}
</style>
