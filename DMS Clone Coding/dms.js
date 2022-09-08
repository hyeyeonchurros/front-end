const dateTitle = document.querySelector(".date");
const prev = document.querySelector(".button.prev");
const next = document.querySelector(".button.next");

function getDay() {
  const today = new Date();
  const years = today.getFullYear();
  const months = today.getMonth() + 1;
  const dates = today.getDate();
  // const thisDay = `${years}-${months < 10 ? "0" + months : months}-${dates}`;
  // console.log(thisDay);
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const days = week[today.getDay()];
  dateTitle.innerText = `${years}년 ${months}월 ${dates}일 ${days}`;
}

getDay();

prev.addEventListener("click", function () {
  alert("이전버튼");
});

next.addEventListener("click", function () {
  alert("다음버튼");
});

function meal() {
  const mealCard = document.getElementsByClassName("meal_card");
  for (let i = 0; i < mealCard.length; i++) {
    mealCard[i].innerHTML = "";
  }
  fetch("https://api.dsm-dms.com/meal/2022-06-08")
    .then((response) => response.json())
    .then((json) => {
      const bob = json["2022-06-08"];
      const key = Object.keys(json["2022-06-08"]);
      for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < bob[key[i]].length; j++) {
          const text = document.createElement("p");
          text.classList.add("mealname");
          text.innerHTML = bob[key[i]][j];
          mealCard[i].appendChild(text);
        }
      }
    })
    .catch((error) => alert(error));
}

meal();

let hover = document.getElementsByClassName("meal_card");

test.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "red";
  },
  false
);
