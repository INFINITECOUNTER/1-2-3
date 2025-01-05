let count = 4; // Start counting from 4 after the initial sequence
let interval;

const counterElement = document.getElementById('counter');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');

// Show the initial "1, 2, 3..." only once
counterElement.textContent = "1, 2, 3...";

startButton.addEventListener('click', () => {
    // Start counting up from 4, appending to the initial sequence
    interval = setInterval(() => {
        counterElement.textContent += `, ${count++}`;
    }, 500); // Adjust speed as needed (500ms here)

    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
    // Show an alert when Reset is clicked
    alert("The numbers can never go back, FOWARD!!");
});
