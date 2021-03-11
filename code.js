// Creation timer
// Variables
let buttonTimer = document.querySelector('#timer');
let counter     = 10;
let interval    = null;

// Function
function stop() {
    clearInterval(interval);
}

function account() {
    if(counter != 0) {
        let p = document.createElement('p');
        p.textContent = counter;
        document.body.append(p);
    } else {
        let p = document.createElement('p');
        p.textContent = 'Stop !';
        document.body.append(p);
        stop();
    }
    counter--;
}

function start() {
    interval   = setInterval(account, 1000);
}

//console.log("counter", account());


// Launch
buttonTimer.addEventListener('click', start);
