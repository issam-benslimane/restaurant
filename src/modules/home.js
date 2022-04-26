import { createElement } from "../helpers/utility";
import chefImg from "../assets/chef.png";

export default function Home() {
  const container = createElement("div", {
    class: "home__container container",
  });
  const heading = createElement("h1", {
    class: "heading heading--primary",
    text: "Best pizza in your country",
  });
  const subheading = createElement("p", {
    class: "text",
    text: "Made with passion since 1915",
  });
  const img = createElement("img", {
    class: "home__img",
    src: chefImg,
    alt: "",
  });
  const text = createElement("p", {
    class: "text",
    text: "Order online or visit us!",
  });

  container.appendChild(heading);
  container.appendChild(subheading);
  container.appendChild(img);
  container.appendChild(text);

  return container;
}
