const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "teal",
  "white",
];
const lights = document.querySelectorAll("div.light");
let counter = 0;
let dot;

const light = () => {
  dot = event.target;
  dot.classList.remove(...dot.classList);
  dot.classList.add("light");
  dot.classList.add(colors[counter]);
  counter++;
  if (counter >= colors.length) counter = 0;
};

const reset = () => {
  dot.classList.remove(...dot.classList);
  dot.classList.add("light");
};

const resetAll = () => {
  lights.forEach((light) => {
    light.classList.remove(...light.classList);
    light.classList.add("light");
  });
};
