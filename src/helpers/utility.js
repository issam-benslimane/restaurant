export function createElement(type, options = {}) {
  const el = document.createElement(type);
  for (const [key, value] of Object.entries(options)) {
    if (key === "text") el.textContent = value;
    else el.setAttribute(key, value);
  }
  return el;
}
