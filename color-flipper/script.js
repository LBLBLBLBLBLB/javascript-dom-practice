const title = document.getElementById("title");
const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
const colorName = document.getElementById("color-hex");
const button = document.getElementById("button");
const body = document.body;

let isSimple = true;

simple.addEventListener("click", () => {
  title.innerText = "Color Flipper || Simple";
  sSimple = true;
});

hex.addEventListener("click", () => {
  title.innerText = "Color Flipper || Hex";
  isSimple = false;
});

const customColors = [
  "Red",
  "#F15025",
  "#F1f5f8",
  "rgba(0, 13, 255, 0.8)",
  "rgba(245, 40, 145, 0.8)",
  "#43ff64d9",
  "Purple",
];
const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

button.addEventListener("click", () => {
  const randomColor =
    customColors[Math.floor(Math.random() * customColors.length)];

  const randomHexColor = getRandomHexColor();

  if (isSimple) {
    body.style.backgroundColor = randomColor;
    colorName.innerText = randomColor;
  } else {
    body.style.backgroundColor = randomHexColor;
    colorName.innerText = randomHexColor;
  }
});
