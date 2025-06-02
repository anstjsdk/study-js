const audio = document.getElementById("myAudio");
const progressBar = document.getElementById("progressBar");

audio.addEventListener("loadedmetadata", function () {
  progressBar.max = audio.duration;
});

audio.addEventListener("timeupdate", function () {
  progressBar.value = audio.currentTime;
});

progressBar.addEventListener("input", function () {
  audio.currentTime = progressBar.value;
});
