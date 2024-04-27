let intervalID;

function updateTime() {
    let time = document.querySelector('.time');
    let currentValue = parseInt(time.textContent);
    time.textContent = currentValue + 1;
}

const startTime = () => {
    intervalID = setInterval(updateTime, 1000);
}

const pauseTime = () => {
    //enter pause solution here
}

const resumeTime = () => {
    //enter resume solution here
}

const resetTime = () => {
    clearInterval(intervalID);
    let time = document.querySelector('.time');
    time.textContent = '0'; 
}
