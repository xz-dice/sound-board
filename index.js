// function to play sound depending on what button is pressed
function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.code}"]`)
    let key = document.querySelector(`div[data-key="${e.code}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
}

function clickSound(soundfile) {
    var audio1 = new Audio(soundfile);
    audio1.play();
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

let keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})

window.addEventListener('keydown', playSound)

document.querySelectorAll('.sound').forEach((button) =>{
    button.addEventListener('click', (e) =>{
        clickSound(e.target.dataset.sound)
        e.target.classList.add('playing')
        setTimeout(()=>{
            e.target.classList.remove('playing')
        },2000)
    })
})