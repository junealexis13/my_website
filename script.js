gsap.registerPlugin(ScrollTrigger);

// Wiping animation
const tl = gsap.timeline({defaults: {duration:1, ease: "power3.out"}})

// getting the viewport dimensions
var viewportWidth = window.innerWidth || document.documentElement.clientWidth
var viewportHeight = window.innerHeight || document.documentElement.clientHeight

// Adding event listener to clicks to change the page
document.getElementById("link-research").addEventListener("click", function() {window.location.href = "./page1.html"});
document.getElementById("link-home").addEventListener("click", function() {window.location.href = "./index.html"});
    

tl.fromTo(".banner-image",{opacity:0, x:-90, rotation: "-45deg", scale: 0.5},{opacity:1, x:0, rotation:"0deg", scale:1, ease: "elastic.out(1, 0.5)" })
tl.fromTo("div.banner-element2",{x:200, opacity:0},{x:0, opacity:1, delay: 0.3})

gsap.from("section.section1",{y:500, ease:"power3.out", duration:0.5, delay: 0.5,})
gsap.from("path.path_mountain",{y:500, ease:"back.out(1,0.2)",stagger:0.05, delay: 1})

tl.from("span.banner-outro-1", {
    opacity:0, duration:1.5, x:500, ease: "power4.out"
 }
)

// TIMELINE ANIMATIONS

gsap.from(document.getElementById("text-banner1"),
   {scrollTrigger:
    {trigger: document.getElementById("text-banner1"),start: "top 60%", toggleActions: "restart pause reverse pause"},
        scale:0, duration:2, ease: "elastic.out(0.75,0.75)"})

