const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const periods = Array.from(document.querySelectorAll('.period'))

const subCard = Array.from(document.querySelectorAll(".sub__card"));

const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

daily.addEventListener("click", function () {
  periods.map(period => period.classList.remove('period--special'))
  daily.classList.add('period--special')

  data.map((v, i) => {
    if (v.title === subCard[i].children[1].children[0].textContent) {
        subCard[i].children[1].children[0].textContent = v.title;
        subCard[i].children[1].children[1].textContent = `${
          v.timeframes.daily.current
        }${v.timeframes.daily.current === 1 ? "hr" : "hrs"}`;
        subCard[i].children[2].children[1].textContent = `Previous - ${
          v.timeframes.daily.previous
        }${v.timeframes.daily.previous === 1 ? "hr" : "hrs"}`;
      }
  });
});

weekly.addEventListener("click", function () {
  periods.map(period => period.classList.remove('period--special'))
  weekly.classList.add('period--special')

  data.map((v, i) => {
    if (v.title === subCard[i].children[1].children[0].textContent) {
      subCard[i].children[1].children[0].textContent = v.title;
      subCard[i].children[1].children[1].textContent = `${
        v.timeframes.weekly.current
      }${v.timeframes.weekly.current === 1 ? "hr" : "hrs"}`;
      subCard[i].children[2].children[1].textContent = `Previous - ${
        v.timeframes.weekly.previous
      }${v.timeframes.weekly.previous === 1 ? "hr" : "hrs"}`;
    }
  });
});

monthly.addEventListener("click", function () {
  periods.map(period => period.classList.remove('period--special'))
  monthly.classList.add('period--special')

  data.map((v, i) => {
    if (v.title === subCard[i].children[1].children[0].textContent) {
      subCard[i].children[1].children[0].textContent = v.title;
      subCard[i].children[1].children[1].textContent = `${
        v.timeframes.monthly.current
      }${v.timeframes.monthly.current === 1 ? "hr" : "hrs"}`;
      subCard[i].children[2].children[1].textContent = `Previous - ${
        v.timeframes.monthly.previous
      }${v.timeframes.monthly.previous === 1 ? "hr" : "hrs"}`;
    }
  });
});




weekly.classList.add('period--special')