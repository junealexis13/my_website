// gsap.fromTo(".banner-image",{opacity:0, x:-300},{opacity:1, x:0, duration:0.5})

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({defaults: {duration:1, ease: "power3.out"}})
// banner image rotate
// ANIMATING THE PATHS

gsap.from("section.section1",{y:500, ease:"power3.out", duration:0.5})
gsap.from("path.path7",{y:500, ease:"back.out(3, 0.4)",delay:0.2, duration:0.5})
gsap.from("path.path6",{y:500, ease:"back.out(3, 0.4)",delay:0.3, duration:0.5})
gsap.from("path.path5",{y:500, ease:"back.out(3, 0.4)",delay:0.4, duration:0.5})
gsap.from("path.path4",{y:500, ease:"back.out(3, 0.4)",delay:0.5, duration:0.5})
gsap.from("path.path3",{y:500, ease:"back.out(3, 0.4)",delay:0.6, duration:0.5})
gsap.from("path.path2",{y:500, ease:"back.out(3, 0.4)",delay:0.7, duration:0.5})
gsap.from("path.path1",{y:500, ease:"back.out(3, 0.4)",delay:0.8, duration:0.5})

tl.fromTo(".banner-image",{opacity:0, x:-90, rotation: "-45deg", scale: 0.5},{opacity:1, x:0, rotation:"0deg", scale:1, ease: "elastic.out(1, 0.5)" })
tl.fromTo("div.banner-element2",{x:200, opacity:0},{x:0, opacity:1, delay: 0.3})

tl.from("span.banner-outro-1", {
    opacity:0, duration:1.5, x:500, ease: "power4.out"
 }
)


// iterate paths

// tl.from("h1.header-text-about",
//    {scrollTrigger:"h1.header-text-about",
//         x:-300, duration:0.5, ease: "elastic.out(0.75,1)"})

