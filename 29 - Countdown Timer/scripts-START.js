let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(secs) {
    clearInterval(countdown)

    const now = Date.now(); // will give time in milliseconds
    const then = now + secs * 1000;
    displayEndTime(then);
    displayTime(secs)
    countdown = setInterval(() => {
        const timeLeft = Math.round((then - Date.now()) / 1000);
        if (timeLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(timeLeft)

    }, 1000)

    // console.log(now)
}
// timer(400);

function displayTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secsRemainder = seconds % 60;
    // console.log(seconds)
    timerDisplay.textContent = mins + ":" + (secsRemainder < 10 ? "0" : "") + secsRemainder;


}

function displayEndTime(then) {
    const end = new Date(then); //this will convert the millseconds to the date and time 
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTimeDisplay.textContent = `Be back by ${hours}:${minutes< 10 ? "0" : ""}${minutes}`

}

function startTimer() {
    timer(this.dataset.time);
}
buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) { //if something has a name, you can directly select it by document.name
    e.preventDefault();
    const mins = this.minutes.value;
    const secs = mins * 60;
    this.reset();
    timer(secs);
})