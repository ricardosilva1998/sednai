import RouteLoader from "@/js/components/partials/RouteLoader";

const Home1 = () => import("./components/Paginas/Home");
const Home2 = () => import("./components/Paginas/Home2");
const Home3 = () => import("./components/Paginas/Home3");
const Home4 = () => import("./components/Paginas/Home4");
const HomePage1 = () => import("./components/Paginas/HomePage");
const HomePage2 = () => import("./components/Paginas/HomePage2");
const HomePage3 = () => import("./components/Paginas/HomePage3");
const HomePage4 = () => import("./components/Paginas/HomePage4");

const PaginaPortefolio1 = () =>
  import("./components/Paginas/PaginaPortefolio1");
const PaginaPortefolio2 = () =>
  import("./components/Paginas/PaginaPortefolio2");
const PaginaPortefolio3 = () =>
  import("./components/Paginas/PaginaPortefolio3");
const Portefolio1 = () => import("./components/PaginaDePortefolio/Portefolio1");
const Portefolio2 = () => import("./components/PaginaDePortefolio/Portefolio2");
const Portefolio3 = () => import("./components/PaginaDePortefolio/Portefolio3");

const PaginaProjeto = () => import("./components/Paginas/PaginaProjeto");
const Projeto1 = () => import("./components/PaginaProjeto/Projeto");
const Projeto2 = () => import("./components/PaginaProjeto/Projeto2");
const Projeto3 = () => import("./components/PaginaProjeto/Projeto3");

const PaginaBlog = () => import("./components/Paginas/PaginaBlog1");
const Blog1 = () => import("./components/Blog/Blog1");
const Blog2 = () => import("./components/Blog/Blog2");

const PaginaBlogPost = () => import("./components/Paginas/PaginaBlogPost");
const BlogPost1 = () => import("./components/Blog/BlogPost");
const BlogPost2 = () => import("./components/Blog/BlogPost2");

const PaginaTemplate = () => import("./components/Paginas/PaginaTemplate");
const Template = () => import("./components/OpçoesTemplate/Template");
const Modulos = () => import("./components/OpçoesTemplate/Modulos/Modulos");

export default [
  {
    path: "",
    component: RouteLoader,
    meta: { title: "Home", breadCrumb: "Home" },
    children: [
      {
        path: "",
        component: PaginaTemplate,
        name: "template",
        meta: { title: "Página Template" },
        children: [
          {
            path: "",
            component: Template,
            name: "template",
            meta: { title: "Template" }
          },
          {
            path: "/modulos/:id",
            component: Modulos,
            name: "modulos",
            meta: { title: "Modulos" }
          }
        ]
      },

      {
        path: "/home-1",
        component: Home1,
        name: "home-1",
        meta: { title: "Home-1" },
        children: [
          {
            path: "/home-1",
            component: HomePage1,
            name: "main-page",
            meta: { title: "Main Page" }
          }
        ]
      },

      {
        path: "/home-2",
        component: Home2,
        name: "home-2",
        meta: { title: "Home-2" },
        children: [
          {
            path: "/home-2",
            component: HomePage2,
            name: "main-page-2",
            meta: { title: "Main Page 2" }
          }
        ]
      },

      {
        path: "/home-3",
        component: Home3,
        name: "home-3",
        meta: { title: "Home-3" },
        children: [
          {
            path: "/home-3",
            component: HomePage3,
            name: "main-page-3",
            meta: { title: "Main Page 3" }
          }
        ]
      },

      {
        path: "/home-4",
        component: Home4,
        name: "home-4",
        meta: { title: "Home-4" },
        children: [
          {
            path: "/home-4",
            component: HomePage4,
            name: "main-page-4",
            meta: { title: "Main Page 4" }
          }
        ]
      },

      {
        path: "/pp-1",
        component: PaginaPortefolio1,
        name: "pp-1",
        meta: { title: "PP-1" },
        children: [
          {
            path: "/pp-1",
            component: Portefolio1,
            name: "portefolio-1",
            meta: { title: "Portefolio 1" }
          }
        ]
      },

      {
        path: "/pp-2",
        component: PaginaPortefolio2,
        name: "pp-2",
        meta: { title: "PP-2" },
        children: [
          {
            path: "/pp-2",
            component: Portefolio2,
            name: "portefolio-2",
            meta: { title: "Portefolio 2" }
          }
        ]
      },

      {
        path: "/pp-3",
        component: PaginaPortefolio3,
        name: "pp-3",
        meta: { title: "PP-3" },
        children: [
          {
            path: "/pp-3",
            component: Portefolio3,
            name: "portefolio-3",
            meta: { title: "Portefolio 3" }
          }
        ]
      },

      {
        path: "/pagina-projeto",
        component: PaginaProjeto,
        name: "pagina-projeto",
        meta: { title: "Pagina Projeto" },
        children: [
          {
            path: "/pagina-projeto/:id",
            component: Projeto1,
            name: "projeto",
            meta: { title: "Projeto" }
          },
          {
            path: "/pagina-projeto-caravanas/:id",
            component: Projeto2,
            name: "pagina de projeto caravanas",
            meta: { title: "Página de Projeto Caravanas" }
          },
          {
            path: "/pagina-projeto-casas/:id",
            component: Projeto3,
            name: "pagina de projeto casas",
            meta: { title: "Página de Projeto Casas" }
          }
        ]
      },

      {
        path: "/blog",
        component: PaginaBlog,
        name: "pagina-blog-1",
        meta: { title: "Pagina Blog 1" },
        children: [
          {
            path: "/blog-1",
            component: Blog1,
            name: "blog1",
            meta: { title: "Blog 1" }
          },
          {
            path: "/blog-2",
            component: Blog2,
            name: "blog2",
            meta: { title: "Blog 2" }
          }
        ]
      },
      {
        path: "/blog-post",
        component: PaginaBlogPost,
        name: "pagina-blog-post",
        meta: { title: "Pagina Blog Post" },
        children: [
          {
            path: "/blog-post/:id",
            component: BlogPost1,
            name: "blogpost",
            meta: { title: "Blog Post" }
          },
          {
            path: "/blog-post-2/:id",
            component: BlogPost2,
            name: "blogpost2",
            meta: { title: "Blog Post 2" }
          }
        ]
      }
    ]
  }
];
