
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const minute = randomNumber(3, 6);
const second = randomNumber(0, 30);

let duration = (minute * 60) + second;

display = document.getElementById('timer');

btnRed = document.getElementById('redPoints');
btnBlue = document.getElementById('bluePoints');

let redPoints = 0;
let bluePoints = 0;

function incrementPointB() {
    bluePoints += 1;
    // console.log(bluePoints);
    btnBlue.innerHTML = bluePoints;
}
function incrementPointR() {
    redPoints += 1;
    // console.log(bluePoints);
    btnRed.innerHTML = redPoints;
}


function timer(duration, display) {
    let timer = duration;
    let minutes, seconds;
    const audio = new Audio('sound/explode.mp3'); // Carrega o som
    const audioRelogio = new Audio('sound/tictac.mp3'); // Carrega o som
    
    setInterval(() => {
        minutes = Math.floor((timer / 60));
        seconds = Math.floor(timer % 60);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.innerHTML = `${minutes}:${seconds}`;

        timer -= 1;
        audioRelogio.play(); 

        if (timer < 0) {
            audioRelogio.pause(); 

            display.innerHTML = '00:00'
            let resultRed = (redPoints * 5);
            let resultBlue = (bluePoints * 5);

            finalPointB = document.getElementById('finalPoitB');
            finalPointR = document.getElementById('finalPoitR');

            finalPointB.innerHTML = resultBlue;
            finalPointR.innerHTML = resultRed ;

            document.getElementById('bluePoints').disabled = true;
            document.getElementById('redPoints').disabled = true;

            document.getElementById('bluePoints').classList.add('transparent');
            document.getElementById('redPoints').classList.add('transparent');

            

            resto = timer % 2;

            if (resto == -1) {
                document.getElementById('timer').classList.add('redText');
            }
            else {
                document.getElementById('timer').classList.remove('redText');
            }

            document.getElementById('txtPoint').classList.remove('transparent');
            audio.play(); 
            
            document.getElementById('iconTimer').innerHTML = '💥';

            
            
        }
    }, 1000);
}

timer(duration, display);


// console.log(duration)