/*=========================================================
            HAPPY BIRTHDAY CHAMPION
            SCRIPT.JS VERSION 2.0
            PART 1
=========================================================*/

"use strict";

/*=========================================================
                    DOM ELEMENTS
=========================================================*/

const loader = document.getElementById("loader");
const enterScreen = document.getElementById("enterScreen");
const enterBtn = document.getElementById("enterBtn");

const intro = document.getElementById("intro");
const website = document.getElementById("website");
const hero = document.getElementById("hero");

const music = document.getElementById("birthdayMusic");

const replayBtn = document.getElementById("replayBtn");


/*=========================================================
                    CONFIG
=========================================================*/

const CONFIG = {

    loaderTime:3000,

    loaderFade:700,

    introDuration:8000,

    musicVolume:0.50

};


/*=========================================================
                INITIAL STATE
=========================================================*/

function initializeWebsite(){

    if(website)
        website.style.display="none";

    if(intro)
        intro.style.display="none";

    if(enterScreen)
        enterScreen.style.display="none";

    if(music){

        music.volume=CONFIG.musicVolume;

        music.pause();

        music.currentTime=0;

    }

}

initializeWebsite();


/*=========================================================
                PAGE LOADED
=========================================================*/

window.addEventListener("load",()=>{

    showLoader();

});


/*=========================================================
                LOADER
=========================================================*/

function showLoader(){

    if(!loader) return;

    setTimeout(()=>{

        loader.classList.add("loader-hide");

        setTimeout(()=>{

            loader.style.display="none";

            showEnterScreen();

        },CONFIG.loaderFade);

    },CONFIG.loaderTime);

}


/*=========================================================
                ENTER SCREEN
=========================================================*/

function showEnterScreen(){

    if(!enterScreen) return;

    enterScreen.style.display="flex";

    enterScreen.style.opacity="0";

    requestAnimationFrame(()=>{

        enterScreen.style.transition="opacity .8s ease";

        enterScreen.style.opacity="1";

    });

}


/*=========================================================
                ENTER BUTTON
=========================================================*/

if(enterBtn){

enterBtn.addEventListener("click",startCelebration);

}


/*=========================================================
                START CELEBRATION
=========================================================*/

function startCelebration(){

    if(enterScreen){

        enterScreen.style.opacity="0";

        setTimeout(()=>{

            enterScreen.style.display="none";

            showIntro();

        },800);

    }

}


/*=========================================================
                    INTRO
=========================================================*/

function showIntro(){

    if(!intro) return;

    intro.style.display="flex";

    intro.style.opacity="0";

    requestAnimationFrame(()=>{

        intro.style.transition="opacity 1s ease";

        intro.style.opacity="1";

    });

    startMusic();

    setTimeout(()=>{

        hideIntro();

    },CONFIG.introDuration);

}


/*=========================================================
                HIDE INTRO
=========================================================*/

function hideIntro(){

    if(!intro) return;

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.style.display="none";

        showWebsite();

    },1000);

}


/*=========================================================
                SHOW WEBSITE
=========================================================*/

function showWebsite(){

    if(!website) return;

    website.style.display="block";

    if(hero){

        hero.scrollIntoView({

            behavior:"smooth"

        });

    }

}


/*=========================================================
                MUSIC
=========================================================*/

function startMusic(){

    if(!music) return;

    music.play().catch(()=>{

        console.log("Music playback blocked by browser.");

    });

}

function stopMusic(){

    if(!music) return;

    music.pause();

}


/*=========================================================
                REPLAY
=========================================================*/

if(replayBtn){

replayBtn.addEventListener("click",()=>{

    stopMusic();

    if(music){

        music.currentTime=0;

    }

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

    website.style.display="none";

    showIntro();

});

}


/*=========================================================
                HELPER FUNCTIONS
=========================================================*/

function fadeIn(element,time=600){

    if(!element) return;

    element.style.opacity="0";

    element.style.display="block";

    requestAnimationFrame(()=>{

        element.style.transition=`opacity ${time}ms ease`;

        element.style.opacity="1";

    });

}

function fadeOut(element,time=600){

    if(!element) return;

    element.style.opacity="0";

    setTimeout(()=>{

        element.style.display="none";

    },time);

}


/*=========================================================
                    END OF PART 1
=========================================================*/

/*=========================================================
            HAPPY BIRTHDAY CHAMPION
            SCRIPT.JS VERSION 2.0
            PART 2
=========================================================*/


/*=========================================================
                SCROLL REVEAL SYSTEM
=========================================================*/

const revealElements = document.querySelectorAll(

    ".fade-up, .scale-in, .rotate-in"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

},

{

    threshold:0.15,

    rootMargin:"0px 0px -80px 0px"

}

);

revealElements.forEach(element=>{

    revealObserver.observe(element);

});


/*=========================================================
                SECTION ANIMATION
=========================================================*/

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate(

            [

                {

                    opacity:0,

                    transform:"translateY(70px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0)"

                }

            ],

            {

                duration:900,

                easing:"ease-out",

                fill:"forwards"

            });

            sectionObserver.unobserve(entry.target);

        }

    });

},

{

    threshold:0.12

}

);

sections.forEach(section=>{

    sectionObserver.observe(section);

});


/*=========================================================
                PARALLAX EFFECT
=========================================================*/

const parallaxLayers = document.querySelectorAll(

".hero-background, .football-bg, .chess-bg, .cricket-bg, .gallery-bg, .hall-bg, .wish-bg, .night-sky"

);

window.addEventListener("scroll",()=>{

    const scroll = window.scrollY;

    parallaxLayers.forEach(layer=>{

        layer.style.transform=`translateY(${scroll*0.08}px)`;

    });

});


/*=========================================================
                HERO SCROLL INDICATOR
=========================================================*/

const scrollIndicator = document.querySelector(".hero-scroll");

window.addEventListener("scroll",()=>{

    if(!scrollIndicator) return;

    if(window.scrollY>150){

        scrollIndicator.style.opacity="0";

    }

    else{

        scrollIndicator.style.opacity="1";

    }

});


/*=========================================================
                ACTIVE SECTION DETECTOR
=========================================================*/

let activeSection = "";

const activeObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            activeSection = entry.target.id;

        }

    });

},

{

    threshold:0.55

}

);

sections.forEach(section=>{

    activeObserver.observe(section);

});


/*=========================================================
                SMOOTH IMAGE FLOAT
=========================================================*/

const floatingImages = document.querySelectorAll(

".hero-content img, .intro-photo img, .football-photo img, .chess-photo img, .cricket-photo img"

);

floatingImages.forEach((image,index)=>{

    image.animate(

    [

        {

            transform:"translateY(0px)"

        },

        {

            transform:"translateY(-12px)"

        },

        {

            transform:"translateY(0px)"

        }

    ],

    {

        duration:4500+(index*250),

        iterations:Infinity,

        easing:"ease-in-out"

    });

});


/*=========================================================
                SCROLL TO TOP VISIBILITY
=========================================================*/

window.addEventListener("scroll",()=>{

    if(!replayBtn) return;

    if(window.scrollY>600){

        replayBtn.style.opacity="1";

    }

    else{

        replayBtn.style.opacity=".85";

    }

});


/*=========================================================
                PAGE FOCUS
=========================================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        stopMusic();

    }

    else{

        if(music && !music.paused){

            music.play().catch(()=>{});

        }

    }

});


/*=========================================================
                    END OF PART 2
=========================================================*/

/*=========================================================
            HAPPY BIRTHDAY CHAMPION
            SCRIPT.JS VERSION 2.0
            PART 3
=========================================================*/


/*=========================================================
                CAKE ELEMENTS
=========================================================*/

const blowButton = document.getElementById("blowCandles");

const flames = document.querySelectorAll(".flame");

const wishMessage = document.querySelector(".cake-message");


let candlesBlown = false;


/*=========================================================
                BLOW CANDLES
=========================================================*/

if(blowButton){

    blowButton.addEventListener("click",blowCandles);

}


function blowCandles(){

    if(candlesBlown) return;

    candlesBlown = true;

    flames.forEach((flame,index)=>{

        setTimeout(()=>{

            flame.style.transition="all .5s ease";

            flame.style.opacity="0";

            flame.style.transform="translateX(-50%) scale(0)";

        },index*150);

    });

    blowButton.innerHTML="🎉 HAPPY BIRTHDAY!";

    blowButton.disabled=true;

    blowButton.style.cursor="default";

    celebrateBirthday();

}


/*=========================================================
                MAIN CELEBRATION
=========================================================*/

function celebrateBirthday(){

    launchConfetti();

    launchFireworks();

    if(wishMessage){

        wishMessage.animate(

        [

            {

                transform:"scale(.8)",

                opacity:0

            },

            {

                transform:"scale(1.08)",

                opacity:1

            },

            {

                transform:"scale(1)",

                opacity:1

            }

        ],

        {

            duration:1000,

            fill:"forwards",

            easing:"ease"

        });

    }

}


/*=========================================================
                CONFETTI
=========================================================*/

function launchConfetti(){

    const container=document.getElementById("confetti");

    if(!container) return;

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-30px";

        piece.style.background=getCelebrationColor();

        piece.style.animationDuration=

        (3+Math.random()*3)+"s";

        piece.style.transform=

        `rotate(${Math.random()*360}deg)`;

        container.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },7000);

    }

}


/*=========================================================
                FIREWORKS
=========================================================*/

function launchFireworks(){

    const area=document.getElementById("fireworks");

    if(!area) return;

    createFirework();

    setTimeout(createFirework,500);

    setTimeout(createFirework,1000);

    setTimeout(createFirework,1500);

    setTimeout(createFirework,2200);

}


function createFirework(){

    const area=document.getElementById("fireworks");

    if(!area) return;

    const x=Math.random()*window.innerWidth;

    const y=80+Math.random()*350;

    for(let i=0;i<35;i++){

        const spark=document.createElement("div");

        spark.className="firework";

        spark.style.left=x+"px";

        spark.style.top=y+"px";

        spark.style.background=getCelebrationColor();

        const angle=Math.random()*Math.PI*2;

        const distance=80+Math.random()*100;

        spark.animate(

        [

            {

                transform:"translate(0,0) scale(1)",

                opacity:1

            },

            {

                transform:

                `translate(${Math.cos(angle)*distance}px,

                ${Math.sin(angle)*distance}px)

                scale(0)`,

                opacity:0

            }

        ],

        {

            duration:1000,

            easing:"ease-out"

        });

        area.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },1000);

    }

}


/*=========================================================
                COLORS
=========================================================*/

function getCelebrationColor(){

    const colors=[

        "#FFD700",

        "#FF4D6D",

        "#4BE28A",

        "#53B8FF",

        "#FF9800",

        "#FFFFFF",

        "#B76EFF",

        "#00E5FF"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}


/*=========================================================
                AUTO FINALE FIREWORKS
=========================================================*/

const finaleSection=document.getElementById("finale");

if(finaleSection){

    const finaleObserver=new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                launchFireworks();

            }

        });

    },

    {

        threshold:.6

    }

    );

    finaleObserver.observe(finaleSection);

}


/*=========================================================
                END OF PART 3
=========================================================*/

/*=========================================================
            HAPPY BIRTHDAY CHAMPION
            SCRIPT.JS VERSION 2.0
            PART 4
=========================================================*/


/*=========================================================
                GALLERY LIGHTBOX
=========================================================*/

const galleryImages = document.querySelectorAll(".gallery-card img");

let currentImageIndex = 0;

let lightbox = null;
let lightboxImage = null;
let prevButton = null;
let nextButton = null;
let closeButton = null;


/*=========================================================
                CREATE LIGHTBOX
=========================================================*/

function createLightbox(){

    lightbox = document.createElement("div");

    lightbox.id = "lightbox";

    lightbox.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.92);
        display:none;
        justify-content:center;
        align-items:center;
        z-index:999999;
        animation:fadeIn .4s ease;
    `;

    lightboxImage = document.createElement("img");

    lightboxImage.style.cssText = `
        max-width:90%;
        max-height:90%;
        border-radius:20px;
        border:5px solid gold;
        box-shadow:0 0 40px rgba(255,215,0,.4);
        transition:.4s;
    `;

    closeButton = document.createElement("button");

    closeButton.innerHTML = "✕";

    closeButton.style.cssText = `
        position:absolute;
        top:25px;
        right:30px;
        width:55px;
        height:55px;
        border:none;
        border-radius:50%;
        background:gold;
        color:black;
        font-size:24px;
        cursor:pointer;
        font-weight:bold;
    `;

    prevButton = document.createElement("button");

    prevButton.innerHTML = "❮";

    prevButton.style.cssText = `
        position:absolute;
        left:25px;
        top:50%;
        transform:translateY(-50%);
        width:60px;
        height:60px;
        border:none;
        border-radius:50%;
        font-size:30px;
        cursor:pointer;
        background:white;
    `;

    nextButton = document.createElement("button");

    nextButton.innerHTML = "❯";

    nextButton.style.cssText = `
        position:absolute;
        right:25px;
        top:50%;
        transform:translateY(-50%);
        width:60px;
        height:60px;
        border:none;
        border-radius:50%;
        font-size:30px;
        cursor:pointer;
        background:white;
    `;

    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(closeButton);
    lightbox.appendChild(prevButton);
    lightbox.appendChild(nextButton);

    document.body.appendChild(lightbox);

}

createLightbox();


/*=========================================================
                OPEN IMAGE
=========================================================*/

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentImageIndex=index;

        showImage();

    });

});


/*=========================================================
                SHOW IMAGE
=========================================================*/

function showImage(){

    lightbox.style.display="flex";

    lightboxImage.src=

    galleryImages[currentImageIndex].src;

}


/*=========================================================
                CLOSE
=========================================================*/

function closeLightbox(){

    lightbox.style.display="none";

}

closeButton.addEventListener("click",closeLightbox);


/*=========================================================
                CLICK OUTSIDE
=========================================================*/

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});


/*=========================================================
                NEXT
=========================================================*/

function nextImage(){

    currentImageIndex++;

    if(currentImageIndex>=galleryImages.length){

        currentImageIndex=0;

    }

    showImage();

}

nextButton.addEventListener("click",nextImage);


/*=========================================================
                PREVIOUS
=========================================================*/

function previousImage(){

    currentImageIndex--;

    if(currentImageIndex<0){

        currentImageIndex=

        galleryImages.length-1;

    }

    showImage();

}

prevButton.addEventListener("click",previousImage);


/*=========================================================
                KEYBOARD
=========================================================*/

document.addEventListener("keydown",(event)=>{

    if(lightbox.style.display!=="flex") return;

    switch(event.key){

        case "Escape":

            closeLightbox();

            break;

        case "ArrowRight":

            nextImage();

            break;

        case "ArrowLeft":

            previousImage();

            break;

    }

});


/*=========================================================
                END OF PART 4
=========================================================*/

/*=========================================================
            HAPPY BIRTHDAY CHAMPION
            SCRIPT.JS VERSION 2.0
            PART 5 (FINAL)
=========================================================*/


/*=========================================================
                FLOATING BALLOONS
=========================================================*/

const balloons = document.querySelectorAll(".balloon");

balloons.forEach((balloon,index)=>{

    const duration = 5000 + (index * 600);

    balloon.animate(

    [

        {

            transform:"translateY(0px) translateX(0px)"

        },

        {

            transform:"translateY(-25px) translateX(18px)"

        },

        {

            transform:"translateY(0px) translateX(0px)"

        }

    ],

    {

        duration:duration,

        iterations:Infinity,

        easing:"ease-in-out"
    }

    );

});


/*=========================================================
                TWINKLING STARS
=========================================================*/

const stars = document.querySelectorAll(".star");

stars.forEach((star,index)=>{

    star.animate(

    [

        {

            opacity:.3,

            transform:"scale(.8)"

        },

        {

            opacity:1,

            transform:"scale(1.2)"

        },

        {

            opacity:.3,

            transform:"scale(.8)"

        }

    ],

    {

        duration:1800+(index*120),

        iterations:Infinity

    });

});


/*=========================================================
                BUTTON RIPPLE EFFECT
=========================================================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",(event)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.left=

(event.clientX-rect.left-size/2)+"px";

ripple.style.top=

(event.clientY-rect.top-size/2)+"px";

ripple.style.background="rgba(255,255,255,.45)";

ripple.style.borderRadius="50%";

ripple.style.pointerEvents="none";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

button.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(3)";

ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},650);

});

});


/*=========================================================
                IMAGE PRELOADER
=========================================================*/

function preloadImages(){

document.querySelectorAll("img").forEach(img=>{

const preload=new Image();

preload.src=img.src;

});

}

window.addEventListener("load",preloadImages);


/*=========================================================
                MUSIC LOOP SAFETY
=========================================================*/

if(music){

music.addEventListener("ended",()=>{

music.currentTime=0;

music.play().catch(()=>{});

});

}


/*=========================================================
                REPLAY IMPROVEMENT
=========================================================*/

function replayCelebration(){

window.scrollTo({

top:0,

behavior:"smooth"

});

if(music){

music.currentTime=0;

music.play().catch(()=>{});

}

if(website){

website.style.display="none";

}

showIntro();

}

if(replayBtn){

replayBtn.removeEventListener("click",replayCelebration);

replayBtn.addEventListener("click",replayCelebration);

}


/*=========================================================
                WINDOW RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

if(lightbox && lightbox.style.display==="flex"){

showImage();

}

});


/*=========================================================
                PERFORMANCE
=========================================================*/

window.addEventListener("pageshow",()=>{

document.querySelectorAll("img").forEach(image=>{

image.loading="lazy";

image.decoding="async";

});

});


/*=========================================================
                CONSOLE BANNER
=========================================================*/

console.clear();

console.log(

"%c🎉 HAPPY BIRTHDAY CHAMPION 🎉",

"font-size:24px;color:#FFD700;font-weight:bold;"

);

console.log(

"%cMade with ❤️ for an 11-Year-Old Champion!",

"font-size:16px;color:#53B8FF;"

);

console.table({

Website:"Champion Birthday",

Version:"2.0",

Status:"Production Ready"

});


/*=========================================================
                END
=========================================================*/

console.log(

"%cSCRIPT.JS VERSION 2.0 LOADED SUCCESSFULLY",

"color:#4BE28A;font-size:18px;font-weight:bold;"

);

/*=========================================================
            FOOTBALL MINI GAME
=========================================================*/

const kickBallBtn = document.getElementById("kickBallBtn");
const footballBall = document.getElementById("footballBall");
const scoreText = document.getElementById("scoreText");
const goalText = document.getElementById("goalText");

let goalScored = false;

if(kickBallBtn){

kickBallBtn.addEventListener("click",()=>{

    if(goalScored) return;

    goalScored = true;

    kickBallBtn.disabled = true;

    kickBallBtn.innerHTML = "⚽ SHOOTING...";

    footballBall.classList.add("shoot");

    setTimeout(()=>{

        scoreText.textContent = "1 - 0";

    },1800);

    setTimeout(()=>{

        goalText.classList.add("goal-show");

        document.body.classList.add("flash");

    },2000);

    setTimeout(()=>{

        launchConfetti();

        launchFireworks();

    },2100);

    setTimeout(()=>{

        goalText.classList.remove("goal-show");

        document.body.classList.remove("flash");

        kickBallBtn.innerHTML="🏆 GOAL!";

    },4500);

    setTimeout(()=>{

        document.getElementById("chess").scrollIntoView({

            behavior:"smooth"

        });

    },5000);

});

}