let unlocked = false;

// Browser audio unlock
document.addEventListener(
  "click",
  function () {
    unlocked = true;
    console.log("Audio unlocked");
  },
  { once: true },
);

function playPiano(note) {
  if (!unlocked) return;

  let audio = new Audio(`sounds/${note}.mp3`);
  audio.currentTime = 0;
  audio.play();

  let keyEl = document.querySelector(`.key[data-key="${note}"]`);
  if (keyEl) {
    keyEl.classList.add("active");
    setTimeout(() => keyEl.classList.remove("active"), 120);
  }
}

// Keyboard control
document.addEventListener("keydown", function (e) {
  let keyMap = {
    a: "C",
    w: "Cs",
    s: "D",
    e: "Ds",
    d: "E",
    f: "F",
    t: "Fs",
    g: "G",
    y: "Gs",
    h: "A",
    u: "As",
    j: "B",

    k: "C2",
    o: "Cs2",
    l: "D2",
    p: "Ds2",
    ";": "E2",
  };

  let note = keyMap[e.key.toLowerCase()];
  if (note) playPiano(note);
});
