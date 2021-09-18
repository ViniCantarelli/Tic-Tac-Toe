"use strict";
/*
	
	{Viniciu Lins -  April 16 2021}
*/

const wins = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]
];


function checkWin(event) {

 let grid = Array.from(square, function(squares) {
 return squares.classList.contains(event);
 });
 for (let win of wins) {
 if (grid[win[0]] && grid[win[1]] && grid[win[2]]) {
 for (let sq of win) {
      square[sq].style.backgroundColor = 'lightgreen';
     
         
     }
    if(event === "X-marker"){
         alert("X Wins!!!");
     }else if(event === "O-marker"){
         alert("O Wins!!!");
 }
 return true;
 }
 }
 return false;
}
   

   


let playerX = document.getElementById('X');
let playerO= document.getElementById('O');

let newGame = document.querySelector('input');

playerX.classList.add('current-player');

const square = document.querySelectorAll('td');

let game = function(event){
       
   const name = document.querySelector('.current-player').id;
  console.log('Square clicked ' + name);
   
   

const play = event.target.id;
    const ha = document.getElementById(play);

   
    playerX.classList.toggle('current-player');
    if(playerX.className === 'current-player' && ha.className !== 'X-marker'){
        event.target.classList.add(name + '-marker');
     }
       
     playerO.classList.toggle('current-player');
    if(playerO.className === 'current-player' && ha.className !== 'O-marker'){
         event.target.classList.add(name + '-marker');
     }
   
         
}



for (let squares of square) {
  squares.addEventListener('click', game);
    squares.addEventListener('click', function(event){
        
        checkWin('X-marker');
        checkWin('O-marker')
        
    });
   }




 document.querySelector('input.button').addEventListener('click', function() {
  for (let squares of square) {
    squares.className = '';
    squares.style.backgroundColor = '';
  }
});


   
   
    
 

    
    


