
    function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // stops audio if no audio
    if(!audio) return; 
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
    
    // console.log(audio);
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    // skip it if not transformed
    this.classList.remove('playing');
}

const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);