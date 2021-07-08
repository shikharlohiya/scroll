//for click //

var tl = gsap.timeline({
  defaults: {
    duration: 0.5
  }
});

function display_fun(element , class1 , class2 , class3 , class4 ,class5,y3,y4,stroke ) {
  tl.from(class1, {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(class2, {
      y: 50,
      stagger: .2,
      opacity: 0,
    }, "-=1.8")
    .to(class3, {
      strokeDasharray:   stroke , 
      ease: "power3.out"
    }, '-=0.7')
  gsap.from(class4, {
    opacity: 0,
    duration: 1,
    y: y3
  });
  gsap.from(class5, {
    opacity: 0,
    duration: 1,
    y: y4  
  });
  var i;
  for(i=1;i<=7;i++){
    if(element!=i){
      $(`.container-${i}`).addClass("display-none");
      $(".svg-bg").removeClass(`svg-bg-${i}`);
    }else{
      $(`.container-${i}`).removeClass("display-none");
      $(".svg-bg").addClass(`svg-bg-${i}`);
    }
  }
 

}


//for scrollTrigger
var tl0 = gsap.timeline({
  scrollTrigger: {
    trigger: '.big-div',
    start: "center 105%",
    end: "center 80%",
    onLeave: () => display_fun('7' , '.col1-left-part-1', '.left-sub-head-2','#Opaque_Ring' ,'.c7-rp-img1' , '.c7-rp-img2','-200','200'),
    onEnterBack: () => display_fun('6', '.col1-left-part-0' , '.left-sub-head-1','#Opaque_Ring' ,'.c6-rp img' ,'.bottom-img','700','100','10 1000')
  }
});

var tl1 = gsap.timeline({
  scrollTrigger: {  
    trigger: '.big-div',
    start: "center 85%",
    end: "center 70%",
    toggleActions: "restart reset restart reset",
    onEnterBack: () => display_fun('7' , '.col1-left-part-1', '.left-sub-head-2','#Opaque_Ring' ,'.c7-rp-img1' , '.c7-rp-img2','-200','200'),
    onLeave: () => display_fun('1','.col1-left-part-2','.left-sub-head-3','#Opaque_Ring','.nasa-fitness-app-img2','.nasa-fitness-app-img1','-200','200')
  }
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    
    trigger: '.big-div',
    start: "center 70%",
    end: "center 56%",
    
    onEnterBack: () => display_fun('1','.col1-left-part-2','.left-sub-head-3','#Opaque_Ring','.nasa-fitness-app-img2','.nasa-fitness-app-img1','-200','200'),
    onLeave: () => display_fun('2','.col1-left-part-3','.left-sub-head-3','#Opaque_Ring','.img-1','.img-2','200','-500')
  }
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    
    trigger: '.big-div',
    start: "center 56%",
    end: "center 43%",
    onEnterBack: () => display_fun('2','.col1-left-part-3','.left-sub-head-3','#Opaque_Ring','.img-1','.img-2','200','-500'),
    onLeave: () => display_fun('3','.c3-rp-img-1','.c3-rp-img-2','.c3-rp-img-3','.c3-rp-img-4','.c3-rp-img-5','200','200')
  }
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    
    trigger: '.big-div',
    start: "center 43%",
    end: "center 30%",
    
    onEnterBack: () => display_fun('3','.c3-rp-img-1','.c3-rp-img-2','.c3-rp-img-3','.c3-rp-img-4','.c3-rp-img-5','200','200'),
    onLeave: () => display_fun('4','.col1-left-part-6','.left-sub-head-7','#Opaque_Ring','.bottom-img','.c4-rp-img','-200','700')
  }
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    
    trigger: '.big-div',
    start: "center 30%",
    end: "center 15%",
    onEnterBack: () => display_fun('4','.col1-left-part-6','.left-sub-head-7','#Opaque_Ring','.bottom-img','.c5-rp-img1','.c5-rp-img2','','700'),
    onLeave: () => display_fun('5', '.col1-left-part-2','.left-sub-head-3','#Opaque_Ring','.bottom-img','.c5-rp-img1','100','-200')
  }
});

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.big-div',
    start: "center 15%",
    end: "center -2%",
    onEnterBack: () => display_fun('5', '.col1-left-part-6','.left-sub-head-3','#Opaque_Ring','.bottom-img','.c5-rp-img1','100','-200'),
    onLeave: () => display_fun('6', '.col1-left-part-0' , '.nh-c2-1','#Opaque_Ring' ,'.c6-rp img' ,'.bottom-img','700','100','10 1000')
  }
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    768: {
      items: 1,
      nav: false
    },
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
})