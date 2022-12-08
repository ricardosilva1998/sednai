<template>
  <div class="sednai">
    <Header />
    <WhereFrom :whereFrom="whereFrom" />
    <Profile :profile="profile" />
    <Values :values="values" />
    <Team :team="team" />
    <Partners :partners="partners" />
    <Footer />
  </div>
</template>

<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import WhereFrom from "./WhereFrom";
import Values from "./Values";
import Profile from "./Profile";
import Team from "./Team";
import Partners from "./Partners";
export default {
  components: { Header, Footer, WhereFrom, Profile, Values, Team, Partners },
  data() {
    return {
      profile: {
        name: "Krzysztof Nienartowicz",
        img: "/assets/headshot.jpg",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
      whereFrom: {
        h3: "Our team consists of a mix of xxxx and data xxxxx specialists so we have the right balance of science and xxxxx that allows us to xxxxxxx and help you faster and better",
        h4: "Where do we come from",
        h6: "Our team consists of a mix of xxxx and data xxxxx specialists so we have the right balance of science and xxxxx that allows us to xxxxxxx and help you faster and better",
      },
      values: {
        h3: "Our company's values are the drivers of out business. For us they are valid in both professional and private lives which is something we value deeply",
        h4: "Values",
        values: [
          {
            title: "Time",
            text: "We Value time-series of our clients. time spent with out loved ones and doing what we enjoy in life",
          },
          {
            title: "Time",
            text: "We Value time-series of our clients. time spent with out loved ones and doing what we enjoy in life",
          },
          {
            title: "Time",
            text: "We Value time-series of our clients. time spent with out loved ones and doing what we enjoy in life",
          },
          {
            title: "Time",
            text: "We Value time-series of our clients. time spent with out loved ones and doing what we enjoy in life",
          },
        ],
      },
      team: {
        h3: "Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to",
        h4: "Team",
        members: [
          {
            id: 1,
            name: "Krzysztof Nienartowicz",
            role: "Founder & CEO",
            img: "/assets/headshot.jpg",
            description:
              "Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to.Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to.Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to",
          },
          {
            id: 2,
            name: "Krzysztof Nienartowicz",
            role: "Founder & CEO",
            img: "/assets/headshot.jpg",
            description:
              "Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to.Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to.Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to",
          },
          {
            id: 3,
            name: "Krzysztof Nienartowicz",
            role: "Founder & CEO",
            img: "/assets/headshot.jpg",
            description:
              "Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to.Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to.Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to",
          },
          {
            id: 4,
            name: "Krzysztof Nienartowicz",
            role: "Founder & CEO",
            img: "/assets/headshot.jpg",
            description:
              "Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to.Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to.Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to",
          },
        ],
      },
      partners: {
        title: "Projects & Partners",
        paragraphs: [
          {
            text: "Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to",
          },
          {
            text: "Our team consists of a mix of xxxx anda data xxxxx specialists so we have the right balance of science and xxxx that allows us to",
          },
        ],
        partners: [
          {
            id: "esa",
            img: "/assets/esa.png",
          },
          {
            id: "sql",
            img: "/assets/sql.png",
          },
          {
            id: "unigenevre",
            img: "/assets/unigenevre.png",
          },
          {
            id: "science",
            img: "/assets/science.png",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.sednai {
  background: #121212;
}
</style>
