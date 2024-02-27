let video = document.getElementById('video'),
    playBtn = document.getElementById("play"),
    stopBtn = document.getElementById("stop"),
    muteBtn = document.getElementById("mute"),
    durationText = document.getElementById("durationText");

playBtn.addEventListener('click',  () => video.play());
stopBtn.addEventListener('click',  () => video.pause());
muteBtn.addEventListener('click',  () => {
    if (video.muted) {
        video.muted = false;
        muteBtn.textContent = "mute"
    } else {
        video.muted = true;
        muteBtn.textContent = "unmute"
    }
});

let timeline = document.getElementById("timeline");

video.addEventListener("timeupdate", () => {
    let current = (video.currentTime / video.duration) * 100;
    timeline.value = current;
    durationText.textContent = `${(video.currentTime / 60).toFixed(2)}:${(video.duration / 60).toFixed(1)}`;
})

let vol = document.getElementById("volume");

vol.addEventListener("change", () => video.volume = vol.value);


let speed = document.getElementById("speed");

speed.addEventListener("change", () => video.playbackRate = speed.value);

let rewind = document.getElementById("rewind"),
    forward = document.getElementById("forward"),
    fastRewind = document.getElementById("fastRewind"),
    fastForward = document.getElementById("fastForward");

rewind.addEventListener("click", () => video.currentTime -= 5);
forward.addEventListener("click", () => video.currentTime += 5);
fastRewind.addEventListener("click", () => video.currentTime -= 15);
fastForward.addEventListener("click", () => video.currentTime += 15);


let fullScreenBtn = document.getElementById("fullScreen");

fullScreenBtn.addEventListener('click', () => video.requestFullscreen());
