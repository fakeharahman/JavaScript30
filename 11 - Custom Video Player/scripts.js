// get the elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



// build functions
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    let icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {

    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {

    video[this.name] = this.value;

}

function handleProgress() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e) {
    if (mouseDown) {
        const st = e.offsetX / progress.offsetWidth * video.duration;
        video.currentTime = st;
        console.log(e);
    }
}

//event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRange));
ranges.forEach(range => range.addEventListener("mousemove", handleRange));
video.addEventListener("timeupdate", handleProgress);

let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", scrub);
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false);




