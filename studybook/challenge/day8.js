/**
 * [✔] 디데이 나타낼 태그 변수 저장
 * [✔] 오늘 날짜 변수 저장
 * [✔] 기준 날짜 변수 저장
 * [✔] 기준 날짜 - 오늘 날짜
 * [] (기준 날짜 - 오늘 날짜)를 시:분:초로 나누고 math.floor 적용
 * [] 1초마다 함수 호출
 */

const dDay = document.getElementById("d-day");

function calculateDDay() {
    const christmas = new Date("2023-12-25:00:00:00+0900");
    const today = new Date();

    const remainingDay = christmas - today; // ms 단위로 출력

    const day = String(Math.floor(remainingDay / (24 * 60 * 60 * 1000))).padStart(2, "0");
    const hour = String(Math.floor((remainingDay / (60 * 60 * 1000)) % 24)).padStart(2, "0");
    const minute = String(Math.floor((remainingDay / (60 * 1000)) % 60)).padStart(2, "0");
    const second = String(Math.floor((remainingDay / 1000) % 60)).padStart(2, "0");

    dDay.innerText = `${day}일 ${hour}시간 ${minute}분 ${second}초 남았습니다!`;
}

calculateDDay();
setInterval(calculateDDay, 1000);