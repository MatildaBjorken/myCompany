var textWrapper = document.querySelector('.header-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.header-1 .letter',
        translateY: [200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 4800 + 50 * i
    });

    var textWrapper = document.querySelector('.header-2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.header-2 .letter',
        translateY: [200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 4800 + 50 * i
    });

    TweenMax.to(".wrapper", 2, {
        top: "-100%",
        ease: Expo.easeInOut,
        delay: 3.6
    });

    var tl = new TimelineMax();

    tl.from(".loader", 1.6, {
        scaleY: "0%",
        y: 80,
        ease: Expo.easeInOut,
        delay: 1,
        transformOrigin:"50% 100%"
    });

    tl.to(".loader", 1.6, {
      
        scaleY: "0%",
        ease: Expo.easeInOut,
        transformOrigin:"0% -100%"
    });

    TweenMax.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
    delay: 3.8,
    });

    var tl = new TweenMax.staggerFrom(".menu > div", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 4.2
    }, 0.1);

    var tl = new TweenMax.staggerFrom(".nav > .nav_point", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 4.2
    }, 0.1);

    var tl = new TweenMax.staggerFrom(".hero-container > div", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 4.2
    }, 0.1);

    var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  


(function () {
    'use strict';
      window.addEventListener("DOMContentLoaded", function() {
        const bodyNode = document.body || document.getElementsByTagName('body')[0];
        const pages = document.querySelectorAll(".page");
        const navPoint = document.querySelectorAll(".nav_point");
        let lastScrolled = 0;
        let pageIndex = 0;
        bodyNode.style.right = bodyNode.clientWidth - bodyNode.offsetWidth + "px";
        bodyNode.addEventListener("scroll", eventScroll);
        
        function showPage() {
          [].forEach.call(pages, function(el, i, p) {
        
            if (i == pageIndex){
              el.classList.add("active"); 
              bodyNode.removeEventListener("scroll", eventScroll);
              bodyNode.classList.add("hidden");
              setTimeout(function(){
                  bodyNode.addEventListener("scroll", eventScroll);
              }, 200);
              setTimeout(function(){
                  bodyNode.classList.remove("hidden");
              }, 150);
            } else {
              el.classList.remove("active");
            }
          });
          const active = document.querySelector('.active'); 
          active && active.scrollIntoView(true);
          window.addEventListener("resize", myFunction);
          function myFunction() {active && active.scrollIntoView(true);}
          
          [].forEach.call(navPoint, function(el, i, p) {
            el.onclick = function (e) {
              if(p[0].contains(e.target) && pageIndex != 0){
                pageIndex = 0;
                showPage();
              }
              if(p[1].contains(e.target) && pageIndex != 1){
                pageIndex = 1;
                showPage();
              }
              if(p[2].contains(e.target) && pageIndex != 2){
                pageIndex = 2;
                showPage();
              }
              if(p[3].contains(e.target) && pageIndex != 3){
                pageIndex = 3;
                showPage();
              }
              let scrolled = bodyNode.pageYOffset || bodyNode.scrollTop;
              lastScrolled = scrolled;
              colorNav();
            };
            
            colorNav(); 
            function colorNav() {
              p[i].classList.remove("active_point");
              if (pageIndex == 0) {
                p[0].classList.add("active_point");
              }
              if (pageIndex == 1) {
                p[1].classList.add("active_point");
              } 
              if (pageIndex == 2) {
                p[2].classList.add("active_point");
              } 
              if (pageIndex == 3) {
                p[3].classList.add("active_point");
              }
            }
          });
        }
        
        showPage();
        function eventScroll() {
          let scrolled = bodyNode.pageYOffset || bodyNode.scrollTop;
          if (scrolled < lastScrolled) {
            --pageIndex;
          } else {
            ++pageIndex;
          };
          pageIndex < 0 && (pageIndex = 0);
          pageIndex > pages.length - 1 && (pageIndex = pages.length - 1);
          showPage();
          setTimeout(function(){
              let scrolled = bodyNode.pageYOffset || bodyNode.scrollTop;
              lastScrolled = scrolled;
          }, 250);  
        }
      });
    })();
    
    var index = 0;
    var slides = document.querySelectorAll(".slides");
    var dot = document.querySelectorAll(".dot");
    
    function changeSlide(){
    
      if(index<0){
        index = slides.length-1;
      }
      
      if(index>slides.length-1){
        index = 0;
      }
      
      for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
        dot[i].classList.remove("active1");
      }
      
      slides[index].style.display= "block";
      dot[index].classList.add("active1");
      
      index++;
      
      setTimeout(changeSlide,4000);
      
    }
    
    changeSlide();

    