const img = document.getElementsByClassName("fade");
const btDot = document.getElementsByClassName("dot");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const showSlide = document.getElementsByClassName("show-slide");
const olwItem = document.getElementsByClassName("owl-item");
const olwItemSP = document.getElementsByClassName("owl-item-sp");
const slideSP = document.getElementsByClassName("slide-item");
const toTop = document.getElementById("top");
const btnL = document.getElementById("leftSP");
const btnR = document.getElementById("rightSP");
const wrapSp = document.getElementsByClassName("wrap-sp");
const mmm = document.getElementsByClassName("owl-outline");

const numberSlide = slideSP[0].children.length;

var index = 0;
var run;
var run2;
var dem = 0;
var numberTran;

btnLeft.addEventListener("click", () => {
  clearTimeout(run);
  runSlide(index > 1 ? (index += -2) : img.length - 1);
});

btnRight.addEventListener("click", () => {
  clearTimeout(run);
  runSlide(index < img.length ? (index += 0) : 0);
});

btnL.addEventListener("click", () => {
  clearTimeout(run2);
  runSlideSp(dem > 1 ? (dem += -2) : numberTran - 1);
});

btnR.addEventListener("click", () => {
  clearTimeout(run2);
  runSlideSp(dem < numberTran ? (dem += 0) : 0);
});

runSlide(index);
runSlideSp(dem);
setWidth();

window.onresize = function() {
  clearTimeout(run);
  showSlide[0].style.width = `${screen.availWidth * 6}px`;
  runSlide(index);
  setWidth();
};

window.onscroll = function() {
  scrollFunction();
};

function setWidth() {
  const si = mmm[0].clientWidth;
  var aka;
  for (let k = 0; k < wrapSp.length; k++) {
    const ctSP = wrapSp[k].children;
    const size = wrapSp[k].clientWidth;
    if (si >= 1200) {
      aka = size / 5 - 15;
    } else {
      if (si >= 992) {
        aka = size / 4 - 15;
      } else {
        if (si >= 768) {
          aka = size / 3 - 15;
        } else {
          if (si >= 480) {
            aka = size / 2 - 15;
          } else {
            aka = si - 35;
          }
        }
      }
    }
    for (let i = 0; i < ctSP.length; i++) {
      ctSP[i].style.width = `${aka}px`;
    }
  }
}

function getWidth(value, size) {
  var aka;
  var param;
  if (size >= 1200) {
    aka = 240;
    param = value - 5;
  } else {
    if (size >= 992) {
      aka = size / 4;
      param = value - 4;
    } else {
      if (size >= 768) {
        aka = size / 3;
        param = value - 3;
      } else {
        if (size >= 480) {
          aka = size / 2;
          param = value - 2;
        } else {
          aka = size;
          param = value - 1;
        }
      }
    }
  }
  return {
    aka,
    param
  };
}

function runSlideSp(soSlide) {
  var s = 400;
  var size = mmm[0].clientWidth;
  const values = getWidth(numberSlide, size);
  const { param, aka } = values;
  for (let i = 0; i < numberSlide; i++) {
    olwItemSP[i].style.width = `${aka}px`;
  }
  soSlide++;
  dem = soSlide;
  if (soSlide > param + 1) {
    soSlide = 1;
    s = 1000;
  }
  numberTran = param + 1;
  slideSP[0].style.width = `${aka * numberSlide}px`;
  slideSP[0].style.transition = `all ${s}ms ease 0s`;
  slideSP[0].style.transform = `translate(-${aka * (soSlide - 1)}px, 0px)`;
  run2 = setTimeout(runSlideSp.bind(null, soSlide), 3000);
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

toTop.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function runSlide(number) {
  var s = 400;
  var rong = window.innerWidth;
  showSlide[0].style.display = "flex";
  showSlide[0].style.width = `${rong * 6}px`;
  showSlide[0].style.transition = `all ${s * 2}ms ease 0s`;
  number++;
  index = number;
  if (number > img.length) {
    number = 1;
    s = 1000;
  }
  showSlide[0].style.transform = `translate(-${rong * (number - 1)}px, 0px)`;
  for (let i = 0; i < img.length; i++) {
    olwItem[i].style.width = `${rong}px`;
    btDot[i].classList.remove("pick");
    btDot[i].addEventListener("click", () => clickDot(i));
  }
  btDot[number - 1].classList.add("pick");
  run = setTimeout(runSlide.bind(null, number), 3000);
}

function clickDot(para) {
  clearTimeout(run);
  runSlide(para);
}
