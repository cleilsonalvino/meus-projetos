const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')



const jump = ()=>{
    mario.classList.add('jump') // adiciona a class jump

    setTimeout(()=>{
        mario.classList.remove('jump') //remove a class jump
    },500)
}

const loop = setInterval(()=>{
    const tuboPosition = tubo.offsetLeft; // pega o valor do deslocamento da esquerda do tubo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //pega o valor da posicao do mario e o replace com o  + transforma o valor de string para numero
    
    if(tuboPosition <= 50 && tuboPosition > 0 && marioPosition < 50 ) {
        tubo.style.animation = 'none'
        tubo.style.left = `${tuboPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'imagens/game-over.png'
        mario.style.width = '35px'
        mario.style.marginLeft = '15px'

        game()

    }
}, 10)

function game() {
        const gameover = document.querySelector('#game-over')
        gameover.play()
}

function pular() {
    jump()
    const pulo = document.querySelector('#pulo')
    pulo.play()
}