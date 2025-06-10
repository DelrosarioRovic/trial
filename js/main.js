const routes = {
  "/": "../pages/index.html",
  "/login": "../pages/login.html",
  "/home": "../pages/home.html",
  "/video": "../pages/video.html",
  "/profile": "../pages/profile.html"
};

const loadPage = async (path) => {
  const html = await fetch(routes[path] || routes["/"]).then(res => res.text());
  document.getElementById("app").innerHTML = html;
};

const router = () => {
  const path = location.hash.slice(1) || "/";
  loadPage(path);
};

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
