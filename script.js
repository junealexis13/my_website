// gsap.fromTo(".banner-image",{opacity:0, x:-300},{opacity:1, x:0, duration:0.5})

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({defaults: {duration:1, ease: "power3.out"}})
// banner image rotate


const paths = [
    'path.path1', 'path.path2', 'path.path3','path.path4','path.path5','path.path6','path.path7'
]

tl.from("section.section1", {
    y:1000, duration:0.1, ease: "power4.out"
});
for (const path of paths.reverse()) {
    if (path == "path.path7") {
        tl.from(
            path, {
                y:1000, duration:0.2, ease: "power4.out", delay: 0.5
            },'<'
        )
    } else {
        tl.from(
            path, {
                y:1000, duration:0.4, delay:0.05 ,ease: "back.out(1)"
            }
        )
    }
;
}

tl.fromTo(".banner-image",{opacity:0, x:-90, rotation: "-45deg", scale: 0.5},{opacity:1, x:0, rotation:"0deg", scale:1, ease: "elastic.out(1, 0.5)" })
tl.fromTo("div.banner-element2",{x:200, opacity:0},{x:0, opacity:1, delay: 0.3})


tl.from("span.banner-outro-1", {
       opacity:0, duration:1.5, x:500, ease: "power4.out"
    }
  )

// iterate paths

tl.from("h1.header-text-about",
   {scrollTrigger:"h1.header-text-about",
        x:-300, duration:0.5, ease: "elastic.out(0.75,1)"})

