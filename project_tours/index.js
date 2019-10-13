const btnPlay = document.getElementById('playSlide');
const btnTop = document.getElementById('top');
const myVideo = document.getElementById('videoBaner');
const video = document.getElementsByClassName('slide-video');
const listA = document.getElementsByClassName('infor-link');
const lisSection = document.getElementsByClassName('infor-content');
const sliderWrapper = document.getElementsByClassName('slide-video');
const slVideo = document.getElementsByTagName('video');
const toCheck = document.getElementsByClassName('tow-check');
const divLeft = document.getElementsByClassName('content-year');

new WOW().init();

btnPlay.addEventListener('click', () => {
    btnPlay.style.opacity = '0';
    myVideo.play();
    slVideo[0].loop = true;
})

document.addEventListener('wheel', () => {
    myVideo.pause();
    btnPlay.style.opacity = '1';
})

// for (let i = 0; i < divLeft.length; i++) {
//   divLeft[i].addEventListener('mouseover', () => {
//     divLeft[i].classList.add("slideInDown");
//   })
//   divLeft[i].addEventListener('mouseout', () => {
//     divLeft[i].classList.remove("slideInDown");
//   })
// }



for(let i = 0; i < listA.length; i++){
    listA[i].addEventListener('click', () => {
        const string = listA[i].hash;
        const sec = document.getElementById(`${string.slice(1)}`);
        for (let i = 0; i < listA.length; i++) {
            if(listA[i].className.search("action") || lisSection[i].className.search("show")){
                listA[i].classList.remove("action");
                lisSection[i].classList.remove("show");
            }
        }
        listA[i].classList.add("action");
        sec.classList.add("show");
    })
}

btnTop.addEventListener('click', TopscrollTo);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      btnTop.style.display = "block";
    }
    sliderWrapper[0].style.transform = "translateY(60px)";
  } else {
    sliderWrapper[0].style.transform = "translateY(0px)";
    btnTop.style.display = "none";
  }
}

function TopscrollTo() {
  if(window.scrollY!=0) {
    setTimeout(function() {
      window.scrollTo(0,window.scrollY-10);
      TopscrollTo();
    }, 5);
  }
}

