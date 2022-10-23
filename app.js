let models = [
  {
    name: "Bmw 418",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi",
  },
  {
    name: "honda",
    image: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/honda",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/mazda",
  },
  {
    name: "Volvo s60",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo",
  },
  {
    name: "Skoda Suberb",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda",
  },
];

let index = 1;

var interVal;

let settings = {
  duration: "2000",
  random: true,
};

let slatyCount = models.length;

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlider(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlider(index);
  });

document.querySelectorAll(".ta").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interVal);
  });
});

document.querySelectorAll(".ta").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function showSlider(i) {
  index = i;

  if (i < 0) {
    index = slatyCount.length - 1;
  }
  if (i >= slatyCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

function init(settings) {
  var previous;
  interVal = setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slatyCount);
      } while (index == previous);
      previous = index;
    } else {
      if (slatyCount == +1) {
        index = -1;
      }
      index++;
    }
    showSlider(index);
  }, settings.duration);
}
