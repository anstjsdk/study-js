const tracks = [
  {
    title: "Sample 1",
    src: "./music/chello.mp3",
  },
  {
    title: "Sample 2",
    src: "./music/everything.mp3",
  },
];

const audio = document.getElementById("audio");
const playlistEl = document.getElementById("playlist");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// 플레이리스트 DOM 생성
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

// 곡 재생 함수
function playTrack(idx) {
  currentIndex = idx;
  audio.src = tracks[idx].src;
  audio.play();
  renderPlaylist();
}

// 이전/다음 버튼
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentIndex);
};
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  playTrack(currentIndex);
};

// 곡이 끝나면 다음 곡 자동 재생
audio.addEventListener("ended", () => {
  nextBtn.onclick();
});

// 처음에 플레이리스트 렌더링 및 첫 곡 선택
renderPlaylist();
playTrack(currentIndex);
