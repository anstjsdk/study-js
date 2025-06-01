function showTime() {
  const now = new Date(); // 현재 시간 가져오기
  const hours = now.getHours() - 14;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  // 시:분:초 형태로 화면에 표시
  document.getElementById("clock").textContent = `
  ${hours.toString().padStart(2, "0")}
  :${minutes.toString().padStart(2, "0")}
  :${seconds.toString().padStart(2, "0")}`;
}

// 2. 1초마다 showTime 함수 실행
setInterval(showTime, 1000);
