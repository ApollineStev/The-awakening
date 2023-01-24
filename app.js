let start = document.querySelector('#start')
let replay = document.querySelector('#replay')

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
    cleanBoard()
    moveGhost()

})



function randomPentacle() {
    
    ghost.forEach(element => {
        element.classList.remove('ghost')       
    });

    let randomPentacle = ghost[Math.floor(Math.random() * ghost.length)]
    randomPentacle.classList.add('ghost')

    
    setTimeout(() => {
        if (randomPentacle.classList == 'ghost'){
            randomPentacle.classList.add('worm')
            wormSum += 1
            life.innerHTML = wormSum
            return randomPentacle
        }
        return wormSum
        
    }, 1000)


    ghost.forEach(ghost => {
        if(ghost.classList == 'worm'){
            return randomPentacle
        }
    })

    

    if(wormSum === 5){
        end.style.visibility = "visible"
        console.log('game over')
    }

    

}

function moveGhost() {
   let timer = null
   timer = setInterval(randomPentacle, 1250)
   if(ghost.classList == 'worm'){
    let randomPentacle = ghost[Math.floor(Math.random() * ghost.length)]
    randomPentacle.classList.add('ghost')
    return timer
   }
}

replay.addEventListener('click', () => {
    end.style.visibility = 'hidden'
    cleanBoard()
    moveGhost()

    
})

function cleanBoard() {
    score = 0
    result.innerHTML = score
    wormSum = 0
    life.innerHTML = wormSum
    ghost.forEach(ghost => {
        ghost.classList.remove('ghost')
        ghost.classList.remove('worm')
    })
    
}

ghost.forEach(ghost => {
    
    ghost.addEventListener('click', () => {
       if(ghost.classList.contains('ghost')){
          ghost.classList.remove('ghost')
        score += 10
        result.innerHTML = score
       }else{
        return score
       } 
    })
        
        
    return score
})




