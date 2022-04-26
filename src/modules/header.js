import { createElement } from "../helpers/utility";

export default function Header(pages) {
  const header = createElement("header", { class: "header" });
  const logo = createElement("div", { class: "logo", text: "Mozzafiato" });
  const nav = createElement("nav", {
    class: "nav",
    "aria-label": "primary navigation",
  });
  const ul = createElement("ul", { class: "nav__list" });

  for (let { page, active = false } of pages) {
    const li = createElement("li", { class: "nav__item" });
    active && li.classList.add("nav__item--active");
    const button = createElement("button", {
      class: "btn nav__btn",
      "data-page": page,
      text: page,
    });

    li.appendChild(button);
    ul.appendChild(li);
  }
  nav.appendChild(ul);

  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}
