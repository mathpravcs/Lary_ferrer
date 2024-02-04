var audio = document.getElementById('myAudio');

function toggleAudio() {
  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}