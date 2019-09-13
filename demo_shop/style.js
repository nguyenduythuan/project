var index = 0;
var run;
const img = document.getElementsByClassName("fade");
const btDot = document.getElementsByClassName("dot");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const showSlide = document.getElementsByClassName("show-slide");
const olwItem = document.getElementsByClassName("owl-item");
const olwItemSP = document.getElementsByClassName("owl-item-sp");
const slideSP = document.getElementsByClassName("slide-item");

btnLeft.addEventListener("click", () => {
  clearTimeout(run);
  runSlide(index > 1 ? index += -2 : img.length-1);
});

btnRight.addEventListener("click", () => {
  clearTimeout(run);
  runSlide(index < img.length ? index += 0 : 0);
});

runSlide(index);

window.onresize = function() {
  clearTimeout(run);
  showSlide[0].style.width = `${(window.innerWidth)*6}px`;
  runSlide(index);
}

function runSlide(number) {
  var s = 400;
  showSlide[0].style.display = "flex";
  showSlide[0].style.width = `${(window.innerWidth)*6}px`;
  showSlide[0].style.transition = `all ${s*2}ms ease 0s`;
  // slideSP[0].style.display = "flex";
  slideSP[0].style.width = `${7200}px`;
  slideSP[0].style.transition = `all ${s}ms ease 0s`;
  number++;
  index = number;
  if (number > img.length) {
    number = 1;
    s = 1000;
  }
  showSlide[0].style.transform = `translate(-${((window.innerWidth)*(number-1))}px, 0px)`;
  slideSP[0].style.transform = `translate(-${(240*(number-1))}px, 0px)`;
  for (let i = 0; i < img.length; i++) {
    olwItem[i].style.width = `${(window.innerWidth)}px`;
    btDot[i].classList.remove("pick");
    btDot[i].addEventListener("click", () => clickDot(i));
  }
  for (let i = 0; i < olwItemSP.length; i++) {
    olwItemSP[i].style.width = "240px";
  }
  btDot[number-1].classList.add("pick");
  run = setTimeout(runSlide.bind(null, number), 3000);
}

function clickDot(para) {
  clearTimeout(run);
  runSlide(para);
}
