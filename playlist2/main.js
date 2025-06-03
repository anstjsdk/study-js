const audio = document.getElementById("my-audio");
const progressBar = document.getElementById("progressBar");
const musicCover = document.querySelector(".music-cover-img");
const title = document.querySelector(".title");
const pauseBtn = document.querySelector(".pause-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const kittyBtn = document.querySelector(".kitty-btn");

const tracks = [
  {
    title: "everything",
    img: "./assets/cover/everything.jpg",
    src: "./music/everything.mp3",
  },
  {
    title: "천년지애",
    img: "./assets/cover/1000.jpg",
    src: "./music/1000.mp3",
  },
  {
    title: "home-sweet-home",
    img: "./assets/cover/home_sweet_home.jpg",
    src: "./music/home.mp3",
  },
];

let currentIndex = 0;

function playTrack(i) {
  currentIndex = i;
  musicCover.src = tracks[i].img;
  title.innerText = tracks[i].title;
  audio.src = tracks[i].src;
  audio.load();
  audio.play();
  updatePlayState(true);
}

function updatePlayState(isPlaying) {
  if (isPlaying) {
    kittyBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
  } else {
    kittyBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
  }
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
  nextBtn.click();
});

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !event.target.matches("input, textarea")) {
    event.preventDefault();
    togglePlayPause();
  }
});

pauseBtn.addEventListener("click", togglePlayPause);
kittyBtn.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    updatePlayState(true);
  } else {
    audio.pause();
    updatePlayState(false);
  }
}
