import { createElement } from "../helpers/utility";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import Menu from "./menu";
import "../styles.css";

export default function App() {
  const appContainer = document.querySelector("#app");
  const pages = [
    { page: "home", active: true, html: Home() },
    { page: "menu", html: Menu() },
    { page: "contact", html: Contact() },
  ];

  const displayPage = () => {
    const { page, html } = activePage();
    const header = Header(pages);
    const footer = Footer();

    const main = createElement("main");
    main.classList.add(page);
    main.appendChild(html);

    appContainer.appendChild(header);
    appContainer.appendChild(main);
    appContainer.appendChild(footer);

    initListeners();
  };

  const activePage = () => pages.find((p) => p.active);
  const changePage = (ev) => {
    const { page } = activePage();
    const currentPage = ev.target.dataset.page;
    if (currentPage === page) return;

    for (let p of pages) {
      p.active = p.page === currentPage;
    }
    switchClass(ev.target.parentElement);
    renderPage();
  };

  const renderPage = () => {
    const { page, html } = activePage();
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.className = page;
    main.appendChild(html);
  };

  const switchClass = (item) => {
    console.log(item, document.querySelector(".nav__item--active"));
    document
      .querySelector(".nav__item--active")
      .classList.remove("nav__item--active");
    item.classList.add("nav__item--active");
  };

  const initListeners = () => {
    const btns = document.querySelectorAll("[data-page]");
    btns.forEach((e) => e.addEventListener("click", changePage));
  };

  displayPage();
}
