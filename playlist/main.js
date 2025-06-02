const tracks = [
  { title: "첼로 노래", src: "./music/chello.mp3" },
  { title: "everything", src: "./music/everything.mp3" },
];

const audio = document.getElementById("audio");
const playlistEl = document.getElementById("playlist");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function renderPlaylist() {
  playlistEl.innerHTML = "";
  tracks.forEach((track, idx) => {
    const li = document.createElement("li");
    li.textContent = track.title;
    if (idx === currentIndex) li.classList.add("active");
    li.addEventListener("click", () => playTrack(idx));
    playlistEl.appendChild(li);
  });
}

function playTrack(idx) {
  currentIndex = idx;
  audio.src = tracks[idx].src;
  audio.play();
  renderPlaylist();
}

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentIndex);
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  playTrack(currentIndex);
};

audio.addEventListener("ended", () => {
  nextBtn.onclick();
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    togglePause();
  }
});

function togglePause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

renderPlaylist();
playTrack(currentIndex);
