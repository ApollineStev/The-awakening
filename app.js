let start = document.querySelector('#start')
let replay = document.querySelector('#replay')

let pentacle = document.querySelectorAll('.pentacle')
let ghost = document.querySelectorAll('.ghost')
let worm = document.querySelectorAll('.worm')
let life = document.querySelector('.life')
let wormSum = 0
let lastScore = document.querySelector('score-final')
let result = document.querySelector('.result')
let end = document.querySelector('#game-over')
let score = 0

let timer = null


start.addEventListener('click', () => {
    start.remove('id')
    cleanBoard()
    timer = setInterval(randomPentacle, 1000)

})



function randomPentacle() {
    
    ghost.forEach(element => {
        element.classList.remove('ghost')       
    });
/*
    let randomPentacle = ghost[Math.floor(Math.random() * ghost.length)]
    console.log(ghost)
    if(ghost.classList.contains('worm')){
        randomPentacle.classList.add('ghost')
        
    }
    */

    let pentaclesArray = [...ghost]
    let pentaclesWithoutWorms = pentaclesArray.filter((pentacle) =>{
        if (!pentacle.classList.contains('worm')){
            return pentacle
        }
    })

    let randomPentacle = pentaclesWithoutWorms[Math.floor(Math.random() * pentaclesWithoutWorms.length)]
    randomPentacle.classList.add('ghost')
    
    setTimeout(() => {
        if (randomPentacle.classList == 'ghost'){
            randomPentacle.classList.add('worm')
            wormSum += 1
            life.innerHTML = wormSum
            return randomPentacle
        }
        return wormSum
        
    }, 750)


    ghost.forEach(ghost => {
        if(ghost.classList.contains('worm')){
            return randomPentacle
        }
    })

    

    if(wormSum === 10){
        end.style.visibility = "visible"
        lastScore.innerHTML = score
    }
    

} 
 

replay.addEventListener('click', () => {
    end.style.visibility = 'hidden'
    clearInterval(timer)
    cleanBoard()
    timer = setInterval(randomPentacle, 1250)
    
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




