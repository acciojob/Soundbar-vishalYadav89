const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsDiv = document.getElementById("buttons");

// store audio elements
let audios = {};

sounds.forEach(sound => {

    // ✅ create audio ELEMENT (not just object)
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.id = sound;

    document.body.appendChild(audio); // 🔥 IMPORTANT

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

// stop function
function stopAllSounds() {
    for (let key in audios) {
        audios[key].pause();
        audios[key].currentTime = 0;
    }
}