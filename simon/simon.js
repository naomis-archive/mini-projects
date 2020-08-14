const colors = ["red", "blue", "green", "yellow"];
let sequence = [];
let count = 0;
let player = 0;

const start = () => {
  console.log("started");
  count = 0;
  player = 0;
  sequence = [];
  const random = Math.floor(Math.random() * 4);
  const firstColor = colors[random];
  sequence.push(firstColor);
  count++;
  lightUp(firstColor);
  if (count < player + 1) {
    setTimeout(nextInLine, 1000);
  }
};

const nextInLine = () => {
  const random = Math.floor(Math.random() * 4);
  const targetColor = colors[random];
  sequence.push(targetColor);
  count++;
  lightUp(targetColor);
  if (count < player + 1) {
    setTimeout(nextInLine, 1000);
  } else {
    player = 0;
  }
};

const press = (color) => {
  if (count === 0) {
    return alert("Please press start!");
  }
  if (count < player + 1) {
      return;
  }
  if (color != sequence[player]) {
    return alert("You lose! Press Start to try again.");
  }
  if (color == sequence[player]) {
    player++;
  }
  if (player == sequence.length) {
    setTimeout(lightUpAll, 1000)
  }
};

const lightUp = (color) => {
  const target = document.getElementById(color);
  target.classList.add("lit");
  setTimeout(() => {
    target.classList.remove("lit");
  }, 500);
};

const lightUpAll = () => {
  if (sequence.length === 10) {
    return alert("You win!");
  }
  for (let i = 0; i < sequence.length; i++) {
    setTimeout(() => {
      lightUp(sequence[i]);
    }, 1000 * i);
  }
  setTimeout(nextInLine, 1000 * sequence.length);
};
