const audio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
const musicCover = document.querySelector(".misic-cover-img");
const musicImg = document.querySelector(".controls");
const title = document.querySelector(".title");
const prevBtn = document.querySelector(".pre-btn");
const squareBtn = document.querySelector(".square");
const pauseBtn = document.querySelector(".pausee-btn");
const nextBtn = document.querySelector(".next-btn");

const tracks = [
  {
    title: "먼 훗날 우리",
    img: "./cover/in.jpg",
    src: "./music/in.mp3",
  },
  {
    title: "MOVIE",
    img: "./cover/movie.jpg",
    src: "./music/movie.mp3",
  },
  {
    title: "나와 내 이웃에게",
    img: "./cover/to.jpg",
    src: "./music/to.mp3",
  },
  {
    title: "봄눈",
    img: "./cover/spring.jpg",
    src: "./music/spring.mp3",
  },
  {
    title: "everything",
    img: "./cover/everything.jpg",
    src: "./music/everything.mp3",
  },
  {
    title: "천년지애",
    img: "./cover/1000.jpg",
    src: "./music/1000.mp3",
  },
  {
    title: "home-sweet-home",
    img: "./cover/home.jpg",
    src: "./music/home.mp3",
  },
];

let currentIndex = 0;

function playTrack(i) {
  currentIndex = i;
  musicCover.src = tracks[i].img;
  title.innerText = tracks[i].title;
  audio.src = tracks[i].src;
  audio.onload(); // 오디오 준비
  audio.play(); // 오디오 실행
  updatePlayState(true);
}

function updatePlayState(isPlaying) {
  if (isPlaying) {
    //true
    squareBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
  } else {
    squareBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
  }
}

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentIndex);
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1 + tracks.length) % tracks.length;
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
pauseBtn.addEventListener("click", tooglePlayPause);
squareBtn.addEventListener("click", tooglePlayPause);

function tooglePlayPause() {
  if (audio.paused) {
    audio.play();
    updatePlayState(true);
  } else {
    audio.pause();
    updatePlayState(false);
  }
}
