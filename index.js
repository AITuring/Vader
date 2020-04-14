const glide = new Glide(".glide");
const captionsEL = document.querySelector(".slide-caption");

gilde.on(["mount.after","run.after"],() => {
    const caption = captionsEL[gilde.index];
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
})
glide.mount();