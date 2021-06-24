let currColor = 'blue';

function createDivs(n) {
  const containerBoard = document.querySelector('.container__board');
  containerBoard.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  for (let i = 0; i < n*n; i++) {
    const div = document.createElement('div');
    div.classList.add('container__board__cell');
    div.style.filter = 'brightness(100%)';
    div.addEventListener('mouseenter', colorCell)

    containerBoard.insertAdjacentElement('beforeend', div);
  }
}

function colorCell() {
  if (currColor === 'random') {
    random = `#${Math.floor(Math.random()*255).toString(16)}${Math.floor(Math.random()*255).toString(16)}${Math.floor(Math.random()*255).toString(16)}`;
    this.style.backgroundColor = random;
  } else if (currColor === 'shadow'){
    let filterValue = Number(this.style.filter.replace(/\D/g, ""));
    filterValue -= 10;
    if (filterValue < 0) filterValue = 0;
    this.style.filter = `brightness(${filterValue}%)`;
  } else {
    this.style.backgroundColor = currColor;
  }
}

function menu() {
  const btnReset = document.querySelector('.btn-reset');

  btnReset.addEventListener('click', clearBoard);
}

function clearBoard() {
  
  let size = 2;
  do {
    size = prompt('What board size you want? (max 100)');
  } while(size < 0 || size > 100);
  if (size) {
    document.querySelector('.container__board').innerHTML = '';
    createDivs(size)
  }
}

document.querySelector('.btn-rainbow').addEventListener('click', function(){
  currColor = 'random';
})
document.querySelector('.btn-shadow').addEventListener('click', function(){
  currColor = 'shadow';
})
document.querySelector('#colorpicker').addEventListener('change', (e) => {
  currColor = e.target.value;
})

menu();
createDivs(16);