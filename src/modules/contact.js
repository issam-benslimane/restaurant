import { createElement } from "../helpers/utility";
import location from "../assets/location.png";

export default function Contact() {
  const container = createElement("div", {
    class: "contact__container container",
  });
  const address = createElement("address", { class: "address" });
  const tel = createElement("p", { class: "text", text: "📞 123 456 789" });
  const loc = createElement("p", {
    class: "text",
    text: "🏠 Hollywood Boulevard 42, Los Angeles, USA",
  });
  const img = createElement("img", { class: "", src: location });

  address.appendChild(tel);
  address.appendChild(loc);
  address.appendChild(img);

  container.appendChild(address);

  return container;
}
