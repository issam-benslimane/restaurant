import { createElement } from "../helpers/utility";
import img from "../assets/salsiccia.png";

const menu = [
  {
    id: 1,
    name: "Salsiccia",
    src: img,
    recipe: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    id: 2,
    name: "Gamberi",
    src: img,
    recipe: "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
  },
  {
    id: 3,
    name: "Pepe",
    src: img,
    recipe: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    id: 4,
    name: "Disgustoso",
    src: img,
    recipe: "Tomato sauce, Bacon, Pineapple, Olives, Basil",
  },
  {
    id: 5,
    name: "Colorato",
    src: img,
    recipe: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    id: 6,
    name: "Pomodoro",
    src: img,
    recipe: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    id: 7,
    name: "Crema",
    src: img,
    recipe: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    id: 8,
    name: "Carne",
    src: img,
    recipe: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
];

export default function Menu() {
  const container = createElement("div", {
    class: "menu__container container",
  });
  const ul = createElement("ul", { class: "menu__list" });
  for (let item of menu) {
    const li = createElement("li", { class: "menu__item" });
    const img = createElement("img", { class: "menu__img", src: item.src });
    const name = createElement("h2", {
      class: "heading heading--secondary",
      text: item.name,
    });
    const recipe = createElement("p", {
      class: "text text--sm",
      text: item.recipe,
    });

    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(recipe);
    ul.appendChild(li);
  }
  container.appendChild(ul);
  return container;
}
