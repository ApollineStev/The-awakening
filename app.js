let start = document.querySelector('#start')

let pentacle = document.querySelectorAll('.pentacle')
let ghost = document.querySelectorAll('.ghost')
let score = document.querySelector('.score')

let lastPentacle
let timeUp = false
let result = document.querySelector('.result')



start.addEventListener('click', () => {
    start.removeAttribute('id')
    moveGhost()
    whack(ghost)

})

function randomPentacle() {
    ghost.forEach(element => {
        element.classList.remove('ghost')
    });

    let randomPentacle = ghost[Math.floor(Math.random() * 11)]
    randomPentacle.classList.add('ghost')
    
}

function moveGhost() {
   let timer = null
   timer = setInterval(randomPentacle, 2000)
}

function whack(ghost){
    if(ghost){
        ghost.addEventListener('click', function() {
            this.classList.toogle('clikedOn')
            this.classList.remove('ghost')
            result += 10
            return result
        })

    }
}




