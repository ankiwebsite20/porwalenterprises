/* Hero Slideshow */
let heroIndex = 0;
showHeroSlides();

function showHeroSlides(){
  let slides = document.getElementsByClassName("hero-slide");
  let dots = document.getElementsByClassName("dot");
  for(let i=0;i<slides.length;i++) slides[i].style.display="none";
  heroIndex++;
  if(heroIndex>slides.length) heroIndex=1;
  for(let i=0;i<dots.length;i++) dots[i].className=dots[i].className.replace(" active","");
  slides[heroIndex-1].style.display="block";
  dots[heroIndex-1].className += " active";
  setTimeout(showHeroSlides,5000);
}

function heroPlusSlides(n){
  heroIndex += n-1;
  showHeroSlides();
}

function heroCurrentSlide(n){
  heroIndex = n-1;
  showHeroSlides();
}

/* Stats Counter Animation */
const counters = document.querySelectorAll('.counter');
const statsSection = document.getElementById('stats');

function animateCounters(){
  counters.forEach(counter=>{
    const updateCount = ()=>{
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target/200;
      if(count<target){
        counter.innerText=Math.ceil(count+increment);
        setTimeout(updateCount,20);
      } else {
        counter.innerText=target;
      }
    }
    updateCount();
  });
}

function isInViewport(element){
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >=0;
}

window.addEventListener('scroll', function handler(){
  if(isInViewport(statsSection)){
    animateCounters();
    window.removeEventListener('scroll', handler);
  }
});
