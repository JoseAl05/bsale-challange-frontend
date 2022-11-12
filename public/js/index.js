import Main from "../../src/views/Main.js";
import Products from "../../src/views/Products.js";
import Categories from "../../src/views/Categories.js";
import ProductsByCategory from "../../src/views/ProductsByCategory.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Main },
    { path: "/productos", view: Products },
    { path: "/categorias", view: Categories},
    { path: "/categorias/:name/:id" , view:ProductsByCategory},
  ];

  const matchRoutes = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let matchFinder = matchRoutes.find(
    (matchRoute) => matchRoute.result !== null
  );

  if (!matchFinder) {
    matchFinder = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new matchFinder.route.view(getParams(matchFinder));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
