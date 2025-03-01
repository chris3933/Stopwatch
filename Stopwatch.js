// Time variables used to keep track of time in stopwatch function
let hundredSeconds = 0;
let seconds = 0;
let minutes = 0;

// Declare the time as a string so we can format it accordingly
let hundredStr = '0';
let minutesStr = '0';
let secondsStr = '0';

let timer = false; // Used to start and stop the stopwatch counter
let lapSet = false; // Used to check if a new lap needs to be added to the lapList

// Get start and stop buttons and add event listeners to toggle the stop watch on and off
let startButton = document.getElementById("start");
startButton.addEventListener("click", function(){
    timer = true;
});

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function(){
    timer = false;
})

let timerText = document.getElementById("timer"); // Get the timer element to change its textContent
let lapList = document.getElementById("laps"); // Get the lap list element to add items to it later

// Get the reset button and use listener to reset the number variables to 0, the timer text and set timer to false
// if the lapList isn't empty while it has a firstChild remove the current firstChild
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
    hundredSeconds = 0;
    seconds = 0;
    minutes = 0;
    timer = false;
    lapSet = false;
    timerText.textContent = '00:00:00';


    while(lapList.firstChild){
        lapList.removeChild(lapList.firstChild);
    }
})

// Get the lap button and use listener to toggle the lapSet check to true
let lapButton = document.getElementById("lap");
lapButton.addEventListener("click", function(){
    lapSet = true;
})

// Set an interval to call the stopWatch function every 10 milliseconds
let intervalId = setInterval(stopWatch, 10);

// Function for counting the time passed while watch is running
function stopWatch(){
    if(timer){

        if(lapSet){
            lapSet = false;

            let newItem = document.createElement("li");
            newItem.textContent = `${minutesStr}:${secondsStr}:${hundredStr}`;
            newItem.classList.add('list');
            lapList.appendChild(newItem);
        }

        hundredSeconds++;

        if(hundredSeconds == 100){
            seconds++;
            hundredSeconds = 0;
        }

        if(seconds == 60){
            minutes++;
            seconds = 0;
        }

        if(minutes == 60){
            minutes = 0;
        }

        hundredStr = hundredSeconds < 10 ? '0' + hundredSeconds : hundredSeconds;
        secondsStr = seconds < 10 ? '0' + seconds : seconds;
        minutesStr = minutes < 10 ? '0' + minutes : minutes;

        timerText.textContent = `${minutesStr}:${secondsStr}:${hundredStr}`;
    }
}
