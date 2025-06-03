const audio = document.getElementById("my-audio");
const progressBar = document.getElementById("progressBar");
const musicCover = document.querySelector(".music-cover-img");
const title = document.querySelector(".title");
const pauseBtn = document.querySelector(".pause-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

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
  audio.play();
}

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentIndex);
  pauseBtn.src = "./assets/pause.svg";
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  playTrack(currentIndex);
  pauseBtn.src = "./assets/pause.svg";
};

audio.addEventListener("ended", () => {
  nextBtn.onclick();
});

audio.addEventListener("loadedmetadata", function () {
  progressBar.max = audio.duration;
});

audio.addEventListener("timeupdate", function () {
  progressBar.value = audio.currentTime;
});

progressBar.addEventListener("input", function () {
  audio.currentTime = progressBar.value;
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    replay();
  }
});

pauseBtn.addEventListener("click", replay);

function replay() {
  if (audio.paused) {
    audio.play();
    pauseBtn.src = "./assets/pause.svg";
  } else {
    audio.pause();
    pauseBtn.src = "./assets/play.svg";
  }
}

