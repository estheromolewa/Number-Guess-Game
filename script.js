'use strict'
let score = 20
let secretNum = Math.trunc(Math.random() * 20) + 1
let highScore = 0

// using function to handle the display message
function displayMsg(message){
    document.querySelector('.num-status').textContent = message
}

// targeting the button check
document.querySelector('.btn-check').addEventListener('click', function(){
    let inputGuess = Number(document.querySelector('.input-guess').value)
    document.querySelector('.quest-mark-display').textContent= inputGuess
    document.querySelector('.quest-mark-display').style.fontSize = '80px'
    // checks when entry is empty 
    if(!inputGuess){
        displayMsg('❌❗🚫 No Number!!')
   

    // when player wins
    }else if(inputGuess === secretNum){
        displayMsg('🎊✨Correct Number!!')
        document.querySelector('.quest-mark-display').textContent = secretNum
        document.querySelector('body').style.backgroundColor = '#FFA447'
        document.querySelector('.quest-mark-display').style.width = '20vh'
    
        // updates highScore
        if(score > highScore){
            highScore = score
            document.querySelector('.highScore').textContent = highScore
        }

    }// when entry is not equal to the secretNum
    else if(inputGuess !== secretNum){
        if(score > 1){
            displayMsg(inputGuess >= secretNum ? '💹Your guess is too high!!' : '♏Your guess is too low!!' ) 
            score--
            document.querySelector('.score').textContent = score
        }else {
           displayMsg('💥💥💥Game Over! You lose') 
            document.querySelector('.score').textContent = 0
        }

    }
    
})

document.querySelector('.btn-again').addEventListener('click', function(){
    score = 20
    secretNum = Math.trunc(Math.random() * 20) + 1
    console.log(secretNum)
    displayMsg('Start guessing...') 
    document.querySelector('.quest-mark-display').textContent = '?'
    document.querySelector('.score').textContent = score
    document.querySelector('.input-guess').value = ''
    document.querySelector('body').style.backgroundColor = '#E8C872';
    document.querySelector('.quest-mark-display').style.width = '20vh'


})