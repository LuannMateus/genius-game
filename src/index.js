let order = [];
let clickedOrder = [];
let score = 0;

const elements = {
  blue: document.querySelector('.game__left--blue'),
  yellow: document.querySelector('.game__right--yellow'),
  red: document.querySelector('.game__bottom-left--red'),
  green: document.querySelector('.game__bottom-right--green'),
};

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;

  for (let index in order) {
    let elementColor = createColorElement(order[index]);

    lightColor(elementColor, Number(index) + 1);
  }
};

const lightColor = (element, interval) => {
  interval = interval * 1000;

  setTimeout(() => {
    element.classList.add('selected');
  }, interval);

  setTimeout(() => {
    element.classList.remove('selected');
  }, interval + 500);
};

const checkOrder = () => {
  for (let index in clickedOrder) {
    if (clickedOrder[index] !== order[index]) {
      gameOver();
      break;
    }
  }

  if (clickedOrder.length === order.length) {
    alert(`Score: ${score}\nYou win! Start next level!`);
    nextLevel();
  }
};

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;

  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  });
};

const createColorElement = (colorIndex) => {
  if (colorIndex === 0) {
    return elements.blue;
  } else if (colorIndex === 1) {
    return elements.yellow;
  } else if (colorIndex === 2) {
    return elements.red;
  } else if (colorIndex === 3) {
    return elements.green;
  }
};

const nextLevel = () => {
  score++;
  clickedOrder = [];
  shuffleOrder();
};

const gameOver = () => {
  alert(
    `Score: ${score}!\n Do you lose the game!\nClick in OK to start another game!`
  );

  order = [];
  clickedOrder = [];

  playGame();
};

const playGame = () => {
  alert(`Welcome to Genius! Starting a new game!`);

  score = 0;
  shuffleOrder();
};

elements.blue.addEventListener('click', () => click(0));
elements.yellow.addEventListener('click', () => click(1));
elements.red.addEventListener('click', () => click(2));
elements.green.addEventListener('click', () => click(3));

playGame();
