const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsDiv = document.getElementById("buttons");

// store audio objects
let audios = {};

sounds.forEach(sound => {

    // create audio
    const audio = new Audio(`sounds/${sound}.mp3`);
    audios[sound] = audio;

    // create button
    const btn = document.createElement("button");
    btn.innerText = sound;
    btn.classList.add("btn");

    btn.addEventListener("click", () => {
        stopAllSounds();
        audio.play();
    });

    buttonsDiv.appendChild(btn);
});

// STOP BUTTON
const stopBtn = document.createElement("button");
stopBtn.innerText = "stop";
stopBtn.classList.add("btn", "stop");

stopBtn.addEventListener("click", stopAllSounds);

buttonsDiv.appendChild(stopBtn);

// function to stop all sounds
function stopAllSounds() {
    for (let key in audios) {
        audios[key].pause();
        audios[key].currentTime = 0;
    }
}