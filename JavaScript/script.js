const mario = document.querySelector('.mario')


const pular=()=>{
mario.classList.add('pular')

setTimeout( ()=>{
    mario.classList.remove('pular')
}, 500)

}


document.addEventListener('keydown', pular)