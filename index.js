const glide = new Glide(".glide");
const captionsEL = document.querySelectorAll(".slide-caption");

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
})