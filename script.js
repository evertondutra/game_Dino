const dino = document.querySelector('.dino');
const  background = document.querySelector('.background');
let isjumping = false;

function handleKeyUp(event) {
    if( event.keyCode === 32) {
        if (!isjumping){
            jump();
        }
    }
}

function jump() {
    let position = 0;
isjumping = true;

    let upInterval = setInterval (()=> {
        if (position >= 150) {
            clearInterval(upInterval);
            // Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isjumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            // Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}
//criando cactus
//criar javascript pra criar html novos
function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;


    cactus.classList.add( 'cactus');
    cactus.style.left = 1000 + 'px' ;
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
        
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);
