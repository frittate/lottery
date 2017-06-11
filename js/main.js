

//generate 6 numbers from 49
//get user input of 6 numbers
//compare numbers and return rights and wrongs. 
//make payment for one bet and return pool
function lottery(numbers,bet){
  let pool = [];
  let draw = [];
  let rand;
  let win = [];

  for (let i=1;i<50;i++){
    pool[i-1]=i;
  }

  for (let j=0;j<6;j++){
    rand = pool[Math.floor(Math.random() * pool.length)];
    pool.splice(pool.lastIndexOf(rand),1);
    draw.push(rand);  
  }

  for (let d of draw){
    for (let n of numbers) {
      if (d === n){
        win.push(d);
      }
    }
  }
  
  draw.sort(function(a,b){return a-b});
  win.sort(function(a,b){return a-b});
  
  let msg = 'You bet ' + bet + '$ on the numbers ' + numbers + '. The winning numbers were ' + draw + '. ';
  return (win.length === 0) ? msg + 'Sorry, no win' : msg + win.length + ' correct: ' + win;
  
}

let numbers = [7,31,15,41,27,11];
let bet = 1;


lottery(numbers, bet);

let container = {
  numbers: [], 
};

let handlers = {
  addNumber: function(number){
      container.numbers.push(number);
      console.log(container.numbers);
    },
};

let view = {
  createField: function(){
    for (let s = 1;s<11;s++){
      let selector = document.createElement('BUTTON');
      selector.innerHTML = s;
      selector.onclick = function() {view.createNew(this.innerHTML)};
      document.getElementById('selectorDiv').appendChild(selector);
    }
  },

  createNew: function(number){
if (container.numbers.length < 6){
    let inputNumberItem = document.createElement('LI');
    let inputNumber = document.createTextNode(number);
    inputNumberItem.appendChild(inputNumber);
    document.getElementById('chosenNumbers').appendChild(inputNumberItem);
    handlers.addNumber(number);
}
  },
  
};

view.createField();







