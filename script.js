const fruits = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🥝', '🍉'];
let cards = [];
let card1 = null;
let card2 = null;
let moves = 0;
let lock = false;
let matchedCount = 0;

const board = document.querySelector('.board');


function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


function startGame() {
  cards = shuffle([...fruits, ...fruits]);
  board.innerHTML = '';
  moves = 0;
  matchedCount = 0;
  lock = false;
  card1 = null;
  card2 = null;

  cards.forEach((emoji) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = emoji;
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}


function flipCard() {
  if (lock || this === card1 || this.classList.contains('matched')) return;

  this.textContent = this.dataset.value;
  this.classList.add('flipped');

  if (!card1) {
    card1 = this;
    return;
  }

  card2 = this;
  moves++;
  lock = true;

  setTimeout(checkMatch, 800);
}


function checkMatch() {
  if (card1.dataset.value === card2.dataset.value) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCount += 2;
  } else {
    card1.textContent = '';
    card2.textContent = '';
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }

  card1 = null;
  card2 = null;
  lock = false;

  if (matchedCount === cards.length) {
    setTimeout(() => alert(`🎉 You won in ${moves} moves!`), 500);
  }
}


window.addEventListener('load', startGame);
