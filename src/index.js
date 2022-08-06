const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  memoryGame.shuffleCards();
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
    <div class="card" data-card-name="${pic.name}">
    <div class="back" name="${pic.img}"></div>
    <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
    </div>
    `;
  });
  
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  
  // Bind the click event of each element to a function
  
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);
      if (memoryGame.pickedCards.length === 2) {
        const check = memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'));
        document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked;
        if (check) {
          document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed;
          memoryGame.pickedCards.forEach((pickCard) => pickCard.classList.add('blocked'));
          memoryGame.pickedCards = [];
          if (memoryGame.checkIfFinished()) {
            const divToRemove = document.querySelectorAll('.card');
            divToRemove.forEach((div) => div.remove());
            document.querySelector('#memory-board').innerHTML = `
            <div id="win">CONGRATULATION!!!</div>
            <button id="btn">Play again?</button>`
            document.getElementById('win').style = `font-size: 3rem; font-weight: bold; text-align: center;`
            document.getElementById('btn').style = `font-size: 2rem; text-align: center; margin-left: 330px`
            document.querySelector('#btn').addEventListener('click', () => location.reload() )           
          }
        } else {
          setTimeout(() => {
            memoryGame.pickedCards.forEach((pickCard) => pickCard.classList.remove('turned'));
            memoryGame.pickedCards = [];
          }, 1000);
        }
      }
      
      console.log(`Card clicked: ${card}`);
    });
  });
});

