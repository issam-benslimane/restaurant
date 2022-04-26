import { createElement } from "../helpers/utility";

export default function Footer() {
  const footer = createElement("footer", { class: "footer" });
  const p = createElement("p", { text: "Mozzafiato" });
  const small = createElement("small", {
    text: "Copyright © 2022 ",
  });

  p.insertAdjacentElement("afterbegin", small);
  footer.appendChild(p);

  return footer;
}
