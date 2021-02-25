// sticky menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


// mobile menu js
const mobilemenu = document.querySelector(".mobilemenu");
const hamburger = document
  .querySelector("#amarmenu")
  .addEventListener("click", () => {
    mobilemenu.classList.toggle("showmobilemenu");
  });

// animation
AOS.init({disable: 'mobile'});

var fileName = location.pathname.substring(
  location.pathname.lastIndexOf("/") + 1
);
// console.log(fileName)

if (fileName == "services.html") {
  // services filter
  const facebook__marketing = document.querySelector(".facebook__marketing");
  const twitter__marketing = document.querySelector(".twitter__marketing");
  const instagram__marketing = document.querySelector(".instagram__marketing");
  const linkedin__marketing = document.querySelector(".linkedin__marketing");
  const youtube__marketing = document.querySelector(".youtube__marketing");
  const google__marketing = document.querySelector(".google__marketing");
  const seo__marketing = document.querySelector(".seo__marketing");
  const email__marketing = document.querySelector(".email__marketing");

  const facebook = document.querySelector(".facebookMarketing");
  const twitter = document.querySelector(".twitterMarketing");
  const instagram = document.querySelector(".instagramMarketing");
  const linkedin = document.querySelector(".linkedinMarketing");
  const youtube = document.querySelector(".youtubeMarketing");
  const google = document.querySelector(".googleMarketing");
  const seo = document.querySelector(".seoMarketing");
  const email = document.querySelector(".emailMarketing");

  facebook__marketing.addEventListener("click", () => {


    // filter background

    // remove
    twitter__marketing.classList.remove("activeFilter");
    instagram__marketing.classList.remove("activeFilter");
    linkedin__marketing.classList.remove("activeFilter");
    youtube__marketing.classList.remove("activeFilter");
    google__marketing.classList.remove("activeFilter");
    seo__marketing.classList.remove("activeFilter");
    email__marketing.classList.remove("activeFilter");

    // adding class
    facebook__marketing.classList.add("activeFilter");

    // removing class
    facebook.classList.remove("servicesServiceHide");
    twitter.classList.remove("servicesServiceShow");
    instagram.classList.remove("servicesServiceShow");
    linkedin.classList.remove("servicesServiceShow");
    youtube.classList.remove("servicesServiceShow");
    google.classList.remove("servicesServiceShow");
    seo.classList.remove("servicesServiceShow");
    email.classList.remove("servicesServiceShow");

    // adding class
    facebook.classList.add("servicesServiceShow");
  });

  twitter__marketing.addEventListener("click", () => {


    // filter background

    // remove
    facebook__marketing.classList.remove("activeFilter");
    twitter__marketing.classList.remove("activeFilter");
    instagram__marketing.classList.remove("activeFilter");
    linkedin__marketing.classList.remove("activeFilter");
    youtube__marketing.classList.remove("activeFilter");
    google__marketing.classList.remove("activeFilter");
    seo__marketing.classList.remove("activeFilter");
    email__marketing.classList.remove("activeFilter");

    // adding class
    twitter__marketing.classList.add("activeFilter");

    // removing class
    facebook.classList.remove("servicesServiceShow");
    twitter.classList.remove("servicesServiceHide");
    instagram.classList.remove("servicesServiceShow");
    linkedin.classList.remove("servicesServiceShow");
    youtube.classList.remove("servicesServiceShow");
    google.classList.remove("servicesServiceShow");
    seo.classList.remove("servicesServiceShow");
    email.classList.remove("servicesServiceShow");

    // adding class
    facebook.classList.add("servicesServiceHide");
    twitter.classList.add("servicesServiceShow");
  });

  instagram__marketing.addEventListener("click", () => {


    // filter background

    // remove
    facebook__marketing.classList.remove("activeFilter");
    twitter__marketing.classList.remove("activeFilter");
    instagram__marketing.classList.remove("activeFilter");
    linkedin__marketing.classList.remove("activeFilter");
    youtube__marketing.classList.remove("activeFilter");
    google__marketing.classList.remove("activeFilter");
    seo__marketing.classList.remove("activeFilter");
    email__marketing.classList.remove("activeFilter");

    // adding class
    instagram__marketing.classList.add("activeFilter");

    // removing class
    facebook.classList.remove("servicesServiceShow");
    twitter.classList.remove("servicesServiceShow");
    instagram.classList.remove("servicesServiceHide");
    linkedin.classList.remove("servicesServiceShow");
    youtube.classList.remove("servicesServiceShow");
    google.classList.remove("servicesServiceShow");
    seo.classList.remove("servicesServiceShow");
    email.classList.remove("servicesServiceShow");

    // adding class
    facebook.classList.add("servicesServiceHide");
    twitter.classList.add("servicesServiceHide");
    instagram.classList.add("servicesServiceShow");
  });

  linkedin__marketing.addEventListener("click", () => {


    // filter background

    // remove
    facebook__marketing.classList.remove("activeFilter");
    twitter__marketing.classList.remove("activeFilter");
    instagram__marketing.classList.remove("activeFilter");
    linkedin__marketing.classList.remove("activeFilter");
    youtube__marketing.classList.remove("activeFilter");
    google__marketing.classList.remove("activeFilter");
    seo__marketing.classList.remove("activeFilter");
    email__marketing.classList.remove("activeFilter");

    // adding class
    linkedin__marketing.classList.add("activeFilter");

    // removing class
    facebook.classList.remove("servicesServiceShow");
    twitter.classList.remove("servicesServiceShow");
    instagram.classList.remove("servicesServiceShow");
    linkedin.classList.remove("servicesServiceHide");
    youtube.classList.remove("servicesServiceShow");
    google.classList.remove("servicesServiceShow");
    seo.classList.remove("servicesServiceShow");
    email.classList.remove("servicesServiceShow");

    // adding class
    facebook.classList.add("servicesServiceHide");
    twitter.classList.add("servicesServiceHide");
    instagram.classList.add("servicesServiceHide");
    linkedin.classList.add("servicesServiceShow");
  });

  youtube__marketing.addEventListener("click", () => {


    // filter background

    // remove
    facebook__marketing.classList.remove("activeFilter");
    twitter__marketing.classList.remove("activeFilter");
    instagram__marketing.classList.remove("activeFilter");
    linkedin__marketing.classList.remove("activeFilter");
    youtube__marketing.classList.remove("activeFilter");
    google__marketing.classList.remove("activeFilter");
    seo__marketing.classList.remove("activeFilter");
    email__marketing.classList.remove("activeFilter");

    // adding class
    youtube__marketing.classList.add("activeFilter");

    // removing class
    facebook.classList.remove("servicesServiceShow");
    twitter.classList.remove("servicesServiceShow");
    instagram.classList.remove("servicesServiceShow");
    linkedin.classList.remove("servicesServiceShow");
    youtube.classList.remove("servicesServiceHide");
    google.classList.remove("servicesServiceShow");
    seo.classList.remove("servicesServiceShow");
    email.classList.remove("servicesServiceShow");

    // adding class
    facebook.classList.add("servicesServiceHide");
    twitter.classList.add("servicesServiceHide");
    instagram.classList.add("servicesServiceHide");
    linkedin.classList.add("servicesServiceHide");
    youtube.classList.add("servicesServiceShow");
  });

  google__marketing.addEventListener("click", () => {



    // filter background

    // remove
    facebook__marketing.classList.remove("activeFilter");
    twitter__marketing.classList.remove("activeFilter");
    instagram__marketing.classList.remove("activeFilter");
    linkedin__marketing.classList.remove("activeFilter");
    youtube__marketing.classList.remove("activeFilter");
    google__marketing.classList.remove("activeFilter");
    seo__marketing.classList.remove("activeFilter");
    email__marketing.classList.remove("activeFilter");

    // adding class
    google__marketing.classList.add("activeFilter");

    // removing class
    facebook.classList.remove("servicesServiceShow");
    twitter.classList.remove("servicesServiceShow");
    instagram.classList.remove("servicesServiceShow");
    linkedin.classList.remove("servicesServiceShow");
    youtube.classList.remove("servicesServiceShow");
    google.classList.remove("servicesServiceHide");
    seo.classList.remove("servicesServiceShow");
    email.classList.remove("servicesServiceShow");

    // adding class
    facebook.classList.add("servicesServiceHide");
    twitter.classList.add("servicesServiceHide");
    instagram.classList.add("servicesServiceHide");
    linkedin.classList.add("servicesServiceHide");
    youtube.classList.add("servicesServiceHide");
    google.classList.add("servicesServiceShow");
  });

  seo__marketing.addEventListener("click", () => {


    // filter background

    // remove
    facebook__marketing.classList.remove("activeFilter");
    twitter__marketing.classList.remove("activeFilter");
    instagram__marketing.classList.remove("activeFilter");
    linkedin__marketing.classList.remove("activeFilter");
    youtube__marketing.classList.remove("activeFilter");
    google__marketing.classList.remove("activeFilter");
    seo__marketing.classList.remove("activeFilter");
    email__marketing.classList.remove("activeFilter");

    // adding class
    seo__marketing.classList.add("activeFilter");

    // removing class
    facebook.classList.remove("servicesServiceShow");
    twitter.classList.remove("servicesServiceShow");
    instagram.classList.remove("servicesServiceShow");
    linkedin.classList.remove("servicesServiceShow");
    youtube.classList.remove("servicesServiceShow");
    google.classList.remove("servicesServiceShow");
    email.classList.remove("servicesServiceShow");
    seo.classList.remove("servicesServiceHide");

    // adding class
    facebook.classList.add("servicesServiceHide");
    twitter.classList.add("servicesServiceHide");
    instagram.classList.add("servicesServiceHide");
    linkedin.classList.add("servicesServiceHide");
    youtube.classList.add("servicesServiceHide");
    google.classList.add("servicesServiceHide");
    seo.classList.add("servicesServiceShow");
  });

  email__marketing.addEventListener("click", () => {


    // filter background

    // remove
    facebook__marketing.classList.remove("activeFilter");
    twitter__marketing.classList.remove("activeFilter");
    instagram__marketing.classList.remove("activeFilter");
    linkedin__marketing.classList.remove("activeFilter");
    youtube__marketing.classList.remove("activeFilter");
    google__marketing.classList.remove("activeFilter");
    seo__marketing.classList.remove("activeFilter");
    email__marketing.classList.remove("activeFilter");

    // adding class
    email__marketing.classList.add("activeFilter");

    // removing class
    facebook.classList.remove("servicesServiceShow");
    twitter.classList.remove("servicesServiceShow");
    instagram.classList.remove("servicesServiceShow");
    linkedin.classList.remove("servicesServiceShow");
    youtube.classList.remove("servicesServiceShow");
    google.classList.remove("servicesServiceShow");
    seo.classList.remove("servicesServiceShow");
    email.classList.remove("servicesServiceHide");

    // adding class
    facebook.classList.add("servicesServiceHide");
    twitter.classList.add("servicesServiceHide");
    instagram.classList.add("servicesServiceHide");
    linkedin.classList.add("servicesServiceHide");
    youtube.classList.add("servicesServiceHide");
    google.classList.add("servicesServiceHide");
    seo.classList.add("servicesServiceHide");
    email.classList.add("servicesServiceShow");
  });


  // filter onscroll

  const services__header = document.querySelector('.services__header');
  const servicesPage__body = document.querySelector('.servicesPage__body');

  window.addEventListener('scroll', () => {

    // console.clear();

    const scrolled = window.scrollY;
    
    // console.log(scrolled)

    if(scrolled > 800){
      // console.log('hey')
      services__header.classList.add('stickFilterToLeft')
      servicesPage__body.classList.add('serviceHeaderSpaceOnScroll');

    } else {
      // console.log('kaj korchena')
      services__header.classList.remove('stickFilterToLeft')
      servicesPage__body.classList.remove('serviceHeaderSpaceOnScroll');
    }

  })



} else {
  //   console.log("eta service ja kaj korchen");
}

if (fileName == "video.html") {
  //   console.log("ami achi");

  // services filter
  const animation__video = document.querySelector(".animation__video");
  const tvc__video = document.querySelector(".tvc__video");
  const ovc__video = document.querySelector(".ovc__video");
  const liveaction__video = document.querySelector(".liveaction__video");
  const promo__video = document.querySelector(".promo__video");

  const videoPage__bodyAnimation = document.querySelector(
    ".videoPage__bodyAnimation"
  );
  const videoPage__bodyTVC = document.querySelector(".videoPage__bodyTVC");
  const videoPage__bodyOVC = document.querySelector(".videoPage__bodyOVC");
  const videoPage__bodyLiveAction = document.querySelector(
    ".videoPage__bodyLiveAction"
  );
  const videoPage__bodyPromoVideo = document.querySelector(
    ".videoPage__bodyPromoVideo"
  );

  animation__video.addEventListener("click", () => {


    
    // filter background

    // remove
    animation__video.classList.remove("activeFilter");
    tvc__video.classList.remove("activeFilter");
    ovc__video.classList.remove("activeFilter");
    liveaction__video.classList.remove("activeFilter");
    promo__video.classList.remove("activeFilter");

    // adding class
    animation__video.classList.add("activeFilter");

    // removing class
    videoPage__bodyAnimation.classList.remove("videoServiceHide");
    videoPage__bodyTVC.classList.remove("videoServiceShow");
    videoPage__bodyOVC.classList.remove("videoServiceShow");
    videoPage__bodyLiveAction.classList.remove("videoServiceShow");
    videoPage__bodyPromoVideo.classList.remove("videoServiceShow");

    // adding class
    videoPage__bodyAnimation.classList.add("videoServiceShow");
  });

  tvc__video.addEventListener("click", () => {


    
    // filter background

    // remove
    animation__video.classList.remove("activeFilter");
    tvc__video.classList.remove("activeFilter");
    ovc__video.classList.remove("activeFilter");
    liveaction__video.classList.remove("activeFilter");
    promo__video.classList.remove("activeFilter");

    // adding class
    tvc__video.classList.add("activeFilter");

    // removing class
    videoPage__bodyAnimation.classList.remove("videoServiceShow");
    videoPage__bodyTVC.classList.remove("videoServiceHide");
    videoPage__bodyOVC.classList.remove("videoServiceShow");
    videoPage__bodyLiveAction.classList.remove("videoServiceShow");
    videoPage__bodyPromoVideo.classList.remove("videoServiceShow");

    // adding class
    videoPage__bodyAnimation.classList.add("videoServiceHide");
    videoPage__bodyTVC.classList.add("videoServiceShow");
  });

  ovc__video.addEventListener("click", () => {


    
    // filter background

    // remove
    animation__video.classList.remove("activeFilter");
    tvc__video.classList.remove("activeFilter");
    ovc__video.classList.remove("activeFilter");
    liveaction__video.classList.remove("activeFilter");
    promo__video.classList.remove("activeFilter");

    // adding class
    ovc__video.classList.add("activeFilter");

    // removing class
    videoPage__bodyAnimation.classList.remove("videoServiceShow");
    videoPage__bodyTVC.classList.remove("videoServiceShow");
    videoPage__bodyOVC.classList.remove("videoServiceHide");
    videoPage__bodyLiveAction.classList.remove("videoServiceShow");
    videoPage__bodyPromoVideo.classList.remove("videoServiceShow");

    // adding class
    videoPage__bodyAnimation.classList.add("videoServiceHide");
    videoPage__bodyTVC.classList.add("videoServiceHide");
    videoPage__bodyOVC.classList.add("videoServiceShow");
  });

  liveaction__video.addEventListener("click", () => {


    
    // filter background

    // remove
    animation__video.classList.remove("activeFilter");
    tvc__video.classList.remove("activeFilter");
    ovc__video.classList.remove("activeFilter");
    liveaction__video.classList.remove("activeFilter");
    promo__video.classList.remove("activeFilter");

    // adding class
    liveaction__video.classList.add("activeFilter");

    // removing class
    videoPage__bodyAnimation.classList.remove("videoServiceShow");
    videoPage__bodyTVC.classList.remove("videoServiceShow");
    videoPage__bodyOVC.classList.remove("videoServiceShow");
    videoPage__bodyLiveAction.classList.remove("videoServiceHide");
    videoPage__bodyPromoVideo.classList.remove("videoServiceShow");

    // adding class
    videoPage__bodyAnimation.classList.add("videoServiceHide");
    videoPage__bodyTVC.classList.add("videoServiceHide");
    videoPage__bodyOVC.classList.add("videoServiceHide");
    videoPage__bodyLiveAction.classList.add("videoServiceShow");
  });

  promo__video.addEventListener("click", () => {


    
    // filter background

    // remove
    animation__video.classList.remove("activeFilter");
    tvc__video.classList.remove("activeFilter");
    ovc__video.classList.remove("activeFilter");
    liveaction__video.classList.remove("activeFilter");
    promo__video.classList.remove("activeFilter");

    // adding class
    promo__video.classList.add("activeFilter");

    // removing class
    videoPage__bodyAnimation.classList.remove("videoServiceShow");
    videoPage__bodyTVC.classList.remove("videoServiceShow");
    videoPage__bodyOVC.classList.remove("videoServiceShow");
    videoPage__bodyLiveAction.classList.remove("videoServiceShow");
    videoPage__bodyPromoVideo.classList.remove("videoServiceHide");

    // adding class
    videoPage__bodyAnimation.classList.add("videoServiceHide");
    videoPage__bodyTVC.classList.add("videoServiceHide");
    videoPage__bodyOVC.classList.add("videoServiceHide");
    videoPage__bodyLiveAction.classList.add("videoServiceHide");
    videoPage__bodyPromoVideo.classList.add("videoServiceShow");
  });


  

  // filter onscroll

  const videos__header = document.querySelector('.Videos__header');
  const videos__body = document.querySelector('.videoPage__body');

  window.addEventListener('scroll', () => {

    // console.clear();

    const scrolled = window.scrollY;
    
    // console.log(scrolled)

    if(scrolled > 700){
      // console.log('hey')
      videos__header.classList.add('stickFilterToLeft')
      videos__body.classList.add('videoHeaderSpaceOnScroll');

    } else {
      // console.log('kaj korchena')
      videos__header.classList.remove('stickFilterToLeft')
      videos__body.classList.remove('videoHeaderSpaceOnScroll');
    }

  })



} else {
  //   console.log("video kaj korchen");
}

// for homepage counter
if (fileName == "") {
  // play video popup
  const play = document.querySelector(".play");
  const playShow = document.querySelector(".play__video");

  play.addEventListener("click", () => {
    playShow.classList.add("showPlay");
  });

  playShow.addEventListener("click", (event) => {
    event.target.classList.remove("showPlay");
  });

  // counters
  const counters = document.querySelectorAll(".countercount");
  const speed = 200;

  counters.forEach((counter) => {
    const updatecount = () => {
      const target = +counter.getAttribute("data-target");

      const count = +counter.innerText;
      // console.log(count)

      const inc = target / speed;

      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updatecount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updatecount();
  });
} else {
  //   console.log("counter kaj korchena");
}

if (fileName == "portfolio.html") {
  // for portfolio filter
  var containerEl = document.querySelector(".featured__body");
  var mixer = mixitup(containerEl);
}

// cartslide js
const bag = document.querySelector(".bag");
const cartslide = document.querySelector(".cartslide");
const closecartslide = document.querySelector(".closecartslide");

bag.addEventListener("click", () => {
  cartslide.classList.add("showCartSlide");
});

closecartslide.addEventListener("click", () => {
  cartslide.classList.remove("showCartSlide");
});

if (fileName == "development.html") {
  // development filter
  const developwebsite = document.querySelector(".development__website");
  const appDevlopment = document.querySelector(".development__app");
  const softwareDev = document.querySelector(".development__software");

  const websiteDevelopment = document.querySelector(".websiteDevelopment");
  const appDevelopment = document.querySelector(".appDevelopment");
  const softwareDevelopment = document.querySelector(".softwareDevelopment");

  developwebsite.addEventListener("click", () => {

    // filter background

    // remove
    developwebsite.classList.remove("activeFilter");
    appDevlopment.classList.remove("activeFilter");
    softwareDev.classList.remove("activeFilter");

    // adding class
    developwebsite.classList.add("activeFilter");

    // removing class
    websiteDevelopment.classList.remove("developmentHide");
    appDevelopment.classList.remove("developmentShow");
    softwareDevelopment.classList.remove("developmentShow");

    // adding class
    websiteDevelopment.classList.add("developmentShow");
  });

  appDevlopment.addEventListener("click", () => {


    // filter background

    // remove
    developwebsite.classList.remove("activeFilter");
    appDevlopment.classList.remove("activeFilter");
    softwareDev.classList.remove("activeFilter");

    // adding class
    appDevlopment.classList.add("activeFilter");

    // removing class
    websiteDevelopment.classList.remove("developmentShow");
    appDevelopment.classList.remove("developmentHide");
    softwareDevelopment.classList.remove("developmentShow");

    // adding class
    websiteDevelopment.classList.add("developmentHide");
    appDevelopment.classList.add("developmentShow");
  });

  softwareDev.addEventListener("click", () => {


    // filter background

    // remove
    developwebsite.classList.remove("activeFilter");
    appDevlopment.classList.remove("activeFilter");
    softwareDev.classList.remove("activeFilter");

    // adding class
    softwareDev.classList.add("activeFilter");

    // removing class
    websiteDevelopment.classList.remove("developmentShow");
    appDevelopment.classList.remove("developmentShow");
    softwareDevelopment.classList.remove("developmentHide");

    // adding class
    websiteDevelopment.classList.add("developmentHide");
    appDevelopment.classList.add("developmentHide");
    softwareDevelopment.classList.add("developmentShow");
  });

    

  // filter onscroll

  const developmentHeader = document.querySelector('.development__header');
  const developmentBody = document.querySelector('.development__body');

  window.addEventListener('scroll', () => {

    // console.clear();

    const scrolled = window.scrollY;
    
    // console.log(scrolled)

    if(scrolled > 700){
      // console.log('hey')
      developmentHeader.classList.add('stickFilterToLeft')
      developmentBody.classList.add('videoHeaderSpaceOnScroll');

    } else {
      // console.log('kaj korchena')
      developmentHeader.classList.remove('stickFilterToLeft')
      developmentBody.classList.remove('videoHeaderSpaceOnScroll');
    }

  })


} else {
  // console.log("development kaj korchen");
}


// graphic page
if (fileName == "graphic.html") {
  // graphic filter
  const brandingdesign = document.querySelector(".brandingdesign");
  const markettingdesign = document.querySelector(".markettingdesign");
  const publicationdesign = document.querySelector(".publicationdesign");
  const websitegraphic = document.querySelector(".websitegraphic");

  const brandingdesignSection = document.querySelector(".brandingdesignSection");
  const markettingdesignSection = document.querySelector(".markettingdesignSection");
  const publicationdesginSection = document.querySelector(".publicationdesginSection");
  const websitegraphicSection = document.querySelector(".websitegraphicSection");

  brandingdesign.addEventListener("click", () => {


    // filter background

    // remove
    brandingdesign.classList.remove("activeFilter");
    markettingdesign.classList.remove("activeFilter");
    publicationdesign.classList.remove("activeFilter");
    websitegraphic.classList.remove("activeFilter");

    // adding class
    brandingdesign.classList.add("activeFilter");

    // removing class
    brandingdesignSection.classList.remove("developmentHide");
    markettingdesignSection.classList.remove("developmentShow");
    publicationdesginSection.classList.remove("developmentShow");
    websitegraphicSection.classList.remove("developmentShow");

    // adding class
    brandingdesignSection.classList.add("developmentShow");
  });

  markettingdesign.addEventListener("click", () => {


    // filter background

    // remove
    brandingdesign.classList.remove("activeFilter");
    markettingdesign.classList.remove("activeFilter");
    publicationdesign.classList.remove("activeFilter");
    websitegraphic.classList.remove("activeFilter");

    // adding class
    markettingdesign.classList.add("activeFilter");

    // removing class
    brandingdesignSection.classList.remove("developmentShow");
    markettingdesignSection.classList.remove("developmentHide");
    publicationdesginSection.classList.remove("developmentShow");
    websitegraphicSection.classList.remove("developmentShow");

    // adding class
    brandingdesignSection.classList.add("developmentHide");
    markettingdesignSection.classList.add("developmentShow");
  });

  publicationdesign.addEventListener("click", () => {


    // filter background

    // remove
    brandingdesign.classList.remove("activeFilter");
    markettingdesign.classList.remove("activeFilter");
    publicationdesign.classList.remove("activeFilter");
    websitegraphic.classList.remove("activeFilter");

    // adding class
    publicationdesign.classList.add("activeFilter");

    // removing class
    brandingdesignSection.classList.remove("developmentShow");
    markettingdesignSection.classList.remove("developmentShow");
    publicationdesginSection.classList.remove("developmentHide");
    websitegraphicSection.classList.remove("developmentHide");

    // adding class
    brandingdesignSection.classList.add("developmentHide");
    markettingdesignSection.classList.add("developmentHide");
    publicationdesginSection.classList.add("developmentShow");
  });


  websitegraphic.addEventListener("click", () => {


    // filter background

    // remove
    brandingdesign.classList.remove("activeFilter");
    markettingdesign.classList.remove("activeFilter");
    publicationdesign.classList.remove("activeFilter");
    websitegraphic.classList.remove("activeFilter");

    // adding class
    publicationdesign.classList.add("activeFilter");

    // removing class
    brandingdesignSection.classList.remove("developmentShow");
    markettingdesignSection.classList.remove("developmentShow");
    publicationdesginSection.classList.remove("developmentShow");
    websitegraphicSection.classList.remove("developmentHide");

    // adding class
    brandingdesignSection.classList.add("developmentHide");
    markettingdesignSection.classList.add("developmentHide");
    publicationdesginSection.classList.add("developmentHide");
    websitegraphicSection.classList.add("developmentShow");
  });

  // filter onscroll

  const graphicHeader = document.querySelector('.graphic__header');
  const graphicBody = document.querySelector('.graphic__body');

  window.addEventListener('scroll', () => {

    // console.clear();

    const scrolled = window.scrollY;
    
    // console.log(scrolled)

    if(scrolled > 700){
      // console.log('hey')
      graphicHeader.classList.add('stickFilterToLeft')
      graphicBody.classList.add('videoHeaderSpaceOnScroll');

    } else {
      // console.log('kaj korchena')
      graphicHeader.classList.remove('stickFilterToLeft')
      graphicBody.classList.remove('videoHeaderSpaceOnScroll');
    }

  })


} else {
  // console.log("graphic kaj korchen");
}


// onclick scroll feature
const filtermenuitem = Array.from(document.querySelectorAll('.onClickScrollJS'));
console.log(filtermenuitem)

let item;

for (item of filtermenuitem){
  item.addEventListener('click', () => {
    if(fileName == "services.html"){
      scrollTo(0, 810)  
    } else if(fileName == "video.html"){
      scrollTo(0, 750)  
    } else if(fileName == "development.html"){
      scrollTo(0, 800)  
    } else if(fileName == "graphic.html"){
      scrollTo(0, 800)  
    }
  })
}