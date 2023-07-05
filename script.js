let count = 0;
let intervalID = null;

function start() {
    if (!intervalID) {
        intervalID = setInterval(function () {
            count++;

            let minutes = Math.floor(count / 60);
            let seconds = count % 60;

            document.getElementById('display').innerText = pad(minutes) + ':' + pad(seconds);
      
        }, 1000);
    }
}

function stop() {
    if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;
    }
}

function reset() {
    stop();
    count = 0;

    document.getElementById('display').innerText = '00:00';
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}


document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);

