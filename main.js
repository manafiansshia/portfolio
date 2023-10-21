const hmaburger = document.querySelector(".js_hamburger");
const nav = document.querySelector(".js_hamburger_nav");
const navList = document.querySelector(".l_header_hamburger__list");
const navItems = document.querySelectorAll(".js_hamburger_nav__item");


hmaburger.addEventListener("click", ()=> {
    hmaburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");

    const delay = 100;

    navItems.forEach((navItem, index) => {
        setTimeout(() => {
            navItem.classList.toggle("is-active");
        }, index * delay);
        if(index === navItems.length - 1) {
            navList.classList.toggle("is-active");
        }
    });
});







let slider1 = new Swiper ('.slider1', {
    loop: true, 
    allowTouchMove: false,
    autoplay: { 
        delay: 3000,
        disableOnInteraction: false,
    },

    initialSlide: 0,
    speed:1000,
    effect: 'fade',

});

let spSlider = new Swiper ('.sp_slider', {
    loop: true, 
    allowTouchMove: false,
    autoplay: { 
        delay: 3000,
        disableOnInteraction: false,
    },

    initialSlide: 0,
    speed:1000,
    effect: 'fade',

});


let  slider2 = new Swiper('.slider2', {
    loop: true,
    loopedSlides: 4,
    slidesPerView: "auto",
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        616: { 
            slidesPerView: 3,
            spaceBetween: 24
        }
    },
    breakpoints: {
        864: { 
            slidesPerView: 4,
            spaceBetween: 100,
        }
    },
});



let animationExecuted = false;
let animationExecuted2 = false;
const html = document.querySelector(".h");
const uHtml = document.querySelector(".u_html");


if (!animationExecuted) {
    gsap.timeline()
    .from(".opening_logo-box", {
        duration: 1,
        autoAlpha: 0,
        x:-100,
    })
    .from(".opening_txt-box", {
        duration: 1,
        autoAlpha: 0,
        x:100,
    })
    .from(".opening_animation-ttl", {
        duration:1,
        autoAlpha:0,
        duration:1,
    })
    .to(".opening_animation", {
        autoAlpha:0,
        duration:1,
        onComplete: function () {
            html.classList.toggle("is-active");
        }
    });

    animationExecuted = true;
}

const worksTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".l_works2", 
        start: "top center", 
        end: "center top",
    }
});

worksTl.from(".works_ttl",{
    x:-100,
    autoAlpha:0,
    duration:1,
});

worksTl.from(".works_slide",{
    y:100,
    autoAlpha:0,
    duration:1, 
});




const whoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".l_who", 
        start: "top center", 
        end: "center top",
    }
});
whoTl.from(".who_ttl",{
    x:-100,
    autoAlpha:0,
    duration:1,
    ease: "power2.out",
});
whoTl.from(".l_who_contents__img-box",{
    x:-50,
    autoAlpha:0,
    duration:1,
    ease: "power2.out",
});
whoTl.from(".l_who_contents__txt-box",{
    x:50,
    autoAlpha:0,
    duration:1,
    delay:0,
    ease: "power2.out",
});



const whatTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".l_what",
        start: "top center",
        end: "center top",
    }
});

whatTl.from(".what_ttl", {
    x:-100,
    autoAlpha:0,
    duration:1,
    ease: "power2.out",
})
whatTl.from(".top_what_contents", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out",

    stagger: {
        from: "start",
        amount: 0.8 
    }
});

const priceTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".l_price",
        start: "top center",
        end: "center top",
    }
});


whatTl.from(".price_ttl", {
    x:-100,
    autoAlpha:0,
    duration:1,
    ease: "power2.out",
})
whatTl.from(".m_price_content", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    stagger: {
        from: "start",
        amount: 0.8 
    }
});









const paragraph = document.querySelector(".js_txt");
const textContent = paragraph.textContent;

const newTextContent = [...textContent].map((char) => `<span>${char}</span>`).join("");


paragraph.innerHTML = newTextContent;


if (!animationExecuted2) {
    gsap.timeline()
    .from(".js_txt span", {
        duration: 0.5,
        autoAlpha: 0,
        y: -30,
        stagger: 0.07,
    })
    .to(".under_opening_animation", {
        duration: 1.5,
        autoAlpha: 0,
        onComplete: function () {
            uHtml.classList.toggle("is-active");
        },
    });

    animationExecuted2 = true;
};













const calclation = document.getElementById("calc");

const item1price = 30000;
const item2price = 20000;
const item3price = 40000;

calclation.addEventListener("click", ()=> {

    const item1Num = parseFloat(document.getElementById("menu-count1").value);
    const item2Num = parseFloat(document.getElementById("menu-count2").value);
    const item3Num = parseFloat(document.getElementById("menu-count3").value);

    const topTotal = item1price * item1Num;
    const underTotal = item2price * item2Num;
    const cmsTotal = item3price * item3Num;

    const total = topTotal + underTotal + cmsTotal;


    document.getElementById("topTax").value = topTotal.toLocaleString();
    document.getElementById("underTax").value = underTotal.toLocaleString();
    document.getElementById("cmsTax").value = cmsTotal.toLocaleString();
    document.getElementById("allTax").value = total.toLocaleString();
});


