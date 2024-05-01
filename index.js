const clockTitle = document.querySelector('.js-clock');

// const calcDDay = () => {
//   const currentDay = new Date();
//   const christmasEve = new Date('2024-12-24');
//   const timeRemaining = christmasEve - currentDay;

//   const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
//   const hours = String(
//     Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
//   ).padStart(2, '0');
//   const minutes = String(
//     Math.floor((timeRemaining / (1000 * 60)) % 60)
//   ).padStart(2, '0');
//   const seconds = String(Math.floor((timeRemaining / 1000) % 60)).padStart(
//     2,
//     '0'
//   );

//   clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
// };

// calcDDay();
// setInterval(calcDDay, 1000);

// 리팩토링
// 시간 차이 계산
const calcTime = (currentDay, targetDate) => {
  const timeRemaining = targetDate - currentDay;

  const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
  const hours = String(
    Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
  ).padStart(2, '0');
  const minutes = String(
    Math.floor((timeRemaining / (1000 * 60)) % 60)
  ).padStart(2, '0');
  const seconds = String(Math.floor((timeRemaining / 1000) % 60)).padStart(
    2,
    '0'
  );
  return { days, hours, minutes, seconds };
};

// 디데이 출력
const updateClock = (targetDate) => {
  const currentDay = new Date();
  const timeUntil = calcTime(currentDay, targetDate);
  // console.log(timeUntil);
  clockTitle.innerHTML = `${timeUntil.days}d ${timeUntil.hours}h ${timeUntil.minutes}m ${timeUntil.seconds}s`;
};

const christmasEve = new Date('2024-12-24');
updateClock(christmasEve);

const timer = setInterval(() => {
  updateClock(christmasEve);
}, 1000);
// clearInterval(timer); // 타이머를 중지하려면 이 줄의 주석을 해제하세요.
