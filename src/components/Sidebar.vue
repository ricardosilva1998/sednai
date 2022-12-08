<template>
  <div class="sidebar">
    <b-button
      @mouseover="animateButton()"
      @mouseleave="resetButton()"
      class="button-sidebar"
      v-b-toggle.sidebar-right
      ><div class="col">
        <div id="bar-1" class="bar-1"></div>
        <div id="bar-2" class="bar-2"></div>
        <div id="bar-3" class="bar-3"></div>
      </div>
    </b-button>
    <b-sidebar id="sidebar-right" right>
      <div class="py-2">
        <div class="col">
          <div class="row-1">
            <div class="col">
              <a href="/sednai">Sednai</a>
              <a href="">Tool</a>
              <a href="">Contacts</a>
            </div>
          </div>
          <div class="row-1">
            <div class="col">
              <a href="/">Home</a>
              <a href="/home-2">Home-2</a>
            </div>
          </div>
          <div class="row-2">
            <div class="col">
              <a
                href="https://www.linkedin.com/company/sednai/
"
                ><font-awesome-icon
                  class="linkedin-icon"
                  icon="fa-brands fa-linkedin"
                />
              </a>
            </div>
          </div>
          <div class="row-3">
            <div class="col">
              <a
                href="https://www.linkedin.com/company/sednai/
"
                >Connect With Us</a
              >
            </div>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  methods: {
    animateButton() {
      document.getElementById("bar-1").style.transition = "all 0.5s";
      document.getElementById("bar-1").style.width = "35px";
      document.getElementById("bar-3").style.transition = "all 0.5s";
      document.getElementById("bar-3").style.width = "35px";
    },
    resetButton() {
      document.getElementById("bar-1").style.transition = "all 0.5s";
      document.getElementById("bar-1").style.width = "20px";
      document.getElementById("bar-3").style.transition = "all 0.5s";
      document.getElementById("bar-3").style.width = "20px";
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  & .button-sidebar {
    z-index: 3;
    border: none;
    background: none;
    padding: 0;
    &:hover {
      background: none;
      border: none;
    }
    &:focus {
      background: none !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
    & .col {
      width: auto;
      display: flex;
      flex-direction: column;
      position: relative;
      & .bar-1 {
        width: 20px;
        height: 2px;
        background: white;
        position: absolute;
        top: 0;
        right: 0;
      }
      & .bar-2 {
        width: 35px;
        height: 2px;
        background: white;
        margin-bottom: 8px;
        margin-top: 8px;
      }
      & .bar-3 {
        width: 20px;
        height: 2px;
        background: white;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  & .b-sidebar.b-sidebar-right {
    background: #a6312a;
  }
  & .b-sidebar > .b-sidebar-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: #a6312a;
  }

  & .b-sidebar {
    width: 400px;
    @media (max-width: 650px) {
      width: 100%;
    }
  }

  & .b-sidebar.b-sidebar-right > .b-sidebar-header .close {
    margin-right: 0;
    border: none;
    background: none;
    color: white;

    & .b-icon.bi {
      color: white;
      font-size: 40px;
    }
  }
  & .b-sidebar > .b-sidebar-body {
    background: #a6312a;
    padding: 100px 100px 0 100px;

    & .col {
      display: flex;
      flex-direction: column;
      & .row-1 {
        margin: 0;
        margin-bottom: 40%;
        & .col {
          & a {
            text-align: left;
            color: white;
            text-decoration: none;
            font-size: 20px;
            text-transform: uppercase;
            transition: all 0.5s;

            &:hover {
              text-decoration-line: underline;
              text-underline-offset: 8px;
            }
          }
        }
      }
      & .row-2 {
        margin: 0;
        & .col {
          & a {
            text-align: left;
            color: white;
            text-decoration: none;
            font-size: 20px;
            text-transform: uppercase;
          }
        }
      }
      & .row-3 {
        margin: 0;
        & .col {
          & a {
            text-align: left;
            color: white;
            text-decoration: none;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
