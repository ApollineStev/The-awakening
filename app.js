let start = document.querySelector('#start')

let pentacle = document.querySelectorAll('.pentacle')
let ghost = document.querySelectorAll('.ghost')
let worm = document.querySelectorAll('.worm')
let life = document.querySelector('.life')
let wormSum = 0
let lastPentacle
let result = document.querySelector('.result')
let end = document.querySelector('#game-over')
let score = 0




start.addEventListener('click', () => {
    start.remove('id')
    moveGhost()
    timeOut
    gameOver()
})

function randomPentacle() {
    
    ghost.forEach(element => {
        element.classList.remove('ghost')
        
        
    });
    let randomPentacle = ghost[Math.floor(Math.random() * 12)]
    randomPentacle.classList.add('ghost')
    setTimeout(() => {
        if (randomPentacle.classList == 'ghost'){
            
            randomPentacle.classList.add('worm')
            randomPentacle.classList.add('ghost')
        
        }
        
    }, 999)

    ghost.forEach(element => {
        element.classList.contains('worm')
        wormSum += 1
        life.innerHTML = wormSum
    })
    
}

function moveGhost() {
   let timer = null
   timer = setInterval(randomPentacle, 1000)
}

ghost.forEach(ghost => {
    
    ghost.addEventListener('click', () => {
       if(ghost.classList.contains('ghost') && ghost.classList.contains('ghost')){
          ghost.classList.remove('ghost')
        score += 10
        result.innerHTML = score
       }else{
        return score
       } 
    })
        
        
    return score
})




function gameOver() {
   if(score == 30){
    end.style.visibility = "visible"
   }
}

