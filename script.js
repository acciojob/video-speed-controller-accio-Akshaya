// Select elements
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Toggle play/pause functionality
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update toggle button icon
function updateToggleButton() {
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
}

// Seek video on progress bar click
function seekVideo(event) {
    const newTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
}

// Adjust volume
function handleVolumeChange() {
    video.volume = volume.value;
}

// Adjust playback speed
function handleSpeedChange() {
    video.playbackRate = playbackSpeed.value;
}

// Rewind video
function rewindVideo() {
    video.currentTime = Math.max(0, video.currentTime - 10);
}

// Forward video
function forwardVideo() {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

// Event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', seekVideo);
volume.addEventListener('input', handleVolumeChange);
playbackSpeed.addEventListener('input', handleSpeedChange);
rewind.addEventListener('click', rewindVideo);
forward.addEventListener('click', forwardVideo);