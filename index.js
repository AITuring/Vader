const glide = new Glide(".glide");
const captionsEL = document.querySelectorAll(".slide-caption");
const headerEl = document.querySelector("header");
const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll",()=> {
    let height = headerEl.getBoundingClientRect().height;
    if(window.pageYOffset - height > 800){
        if(!headerEl.classList.contains("sticky")){
            headerEl.classList.add("sticky");
        }
    }
    else{
        headerEl.classList.remove("sticky");
    }

    if(window.pageYOffset > 2000){
        scrollToTop.style.display = "block";
    }else{
        scrollToTop.style.display = "none";
    }
})

glide.on(["mount.after","run.after"],() => {
    const caption = captionsEL[glide.index];
    anime({
        targets: caption.children,
        opacity:[0 ,1],
        duration:400,
        easing:"linear",
        // 在300ms后出第一项，然后每隔400ms出现其他
        delay:anime.stagger(400,{start:300}),
        // 每一项在y轴移动距离，第一个是40到0，第二个是25,0，第三个是10,0
        translateY:[anime.stagger(40,10),0]
    });
});

glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity=0;
    })
})
glide.mount();




const isotope = new Isotope(".cases",{
    layoutMode:"fitRows",
    itemSelector:".case-item"
});

const filterBtns = document.querySelector(".filter-btns");

filterBtns.addEventListener("click",e => {
    let {target} = e;
    const filterOption = target.getAttribute("data-filter");
    if (filterOption) {
        document.querySelectorAll(".filter-btn.active").forEach(btn => btn.classList.remove("active"));
        target.classList.add("active");

        isotope.arrange({filter:filterOption});
    }
});

const staggeringOption = {
    delay:300,
    distance:"50px",
    duration:500,
    easing:"ease-in-out",
    origin:"bottom"
};
ScrollReveal().reveal(".feature",{...staggeringOption,interval:350});
ScrollReveal().reveal(".service-item",{...staggeringOption,interval:350});
ScrollReveal().reveal(".cmap",{...staggeringOption,interval:350});

const dataSectionEl = document.querySelector(".data-section");

ScrollReveal().reveal(".data-section",{
    beforeReveal:()=>{
        anime({
            targets:".data-piece .num",
            innerHTML: el => {
                return [0,el.innerHTML];
            },
            duration:2000,
            round:1,
            easing:"easeInExpo"
        });
        dataSectionEl.style.backgroundPosition = `center calc(50% - ${dataSectionEl.getBoundingClientRect().bottom / 5}px)`;
    }
});


window.addEventListener("scroll",() => {
    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    const top = dataSectionEl.getBoundingClientRect().top;

    if(bottom >=0 && top <=window.innerHeight){
        dataSectionEl.style.backgroundPosition = `center calc(50% - ${bottom / 5}px)`;
    }
});

const scroll = new SmoothScroll('nav a[href*="#"],.scrollToTop a[href*="#"]',{
    header: "header",
    offset:80
});

const exploreBtnEls = document.querySelectorAll(".explore-btn");

exploreBtnEls.forEach(exploreBtnEl => {
    exploreBtnEl.addEventListener("click",() => {
        scroll.animateScroll(document.querySelector("#about-us"));
    });
});
