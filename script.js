gsap.registerPlugin(ScrollTrigger);

// Wiping animation
const tl = gsap.timeline({defaults: {duration:1, ease: "power3.out"}})

// getting the viewport dimensions
var viewportWidth = window.innerWidth || document.documentElement.clientWidth
var viewportHeight = window.innerHeight || document.documentElement.clientHeight

// Adding event listener to clicks to change the page
document.getElementById("link-research").addEventListener("click", function() {window.location.href = "./page1.html"});
document.getElementById("link-home").addEventListener("click", function() {window.location.href = "./index.html"});
    
// Circular Progress Total
const circleProgress = 250
let pythonExp = circleProgress*0.92
let edaExp = circleProgress*0.70
let gisExp = circleProgress*0.9
let mdSimExp = circleProgress*0.80

tl.fromTo(".banner-image",{opacity:0, x:-90, rotation: "-45deg", scale: 0.5},{opacity:1, x:0, rotation:"0deg", scale:1, ease: "elastic.out(1, 0.5)" })
tl.fromTo("div.banner-element2",{x:200, opacity:0},{x:0, opacity:1, delay: 0.3})

gsap.from("section.section1",{opacity:0, ease:"power3.out", duration:0.5, delay: 0.5,})
gsap.from("path.path_mountain",{ opacity:0.5 ,y:viewportHeight ,ease:"power4.out",stagger:0.2, yoyo: true,delay: 1})

tl.from("span.banner-outro-1", {
    opacity:0, duration:1.5, x:500, ease: "power4.out"
 }
)

// TIMELINE ANIMATIONS

gsap.from("div.img_link",
   {scrollTrigger:
    {trigger: "div.trigger-box",start: "top 15%", end:"bottom 60%", markers: false, scrub:2, toggleActions: "restart pause pause reverse"},
        scale:0, x:500, x:-viewportWidth, duration:1.5, stagger:0.3, ease: "power3.out"});


gsap.from("div.text-hyperlink",
    {scrollTrigger:
        {trigger: "div.trigger-box",start: "top 5%", end:"bottom 60%", markers: false, scrub:2, toggleActions: "restart pause pause reverse"},
            scale:0, x:500, x:-viewportWidth, duration:1.5, stagger:1.5, ease: "power4.out"});

gsap.from("div.text-section1",
{scrollTrigger:
    {trigger: "div.trigger-box",start: "top 5%", end:"bottom 60%", markers: false, scrub:2, toggleActions: "restart pause pause reverse"},
        scale:0, x:500, x:-viewportWidth, duration:1.5, stagger:1.5, ease: "power4.out"});

gsap.from("hr.divider",
{scrollTrigger:
    {trigger: "div.trigger-box",start: "top 5%", end:"bottom 60%", markers: false, scrub:5, toggleActions: "restart pause pause reverse"},
        opacity:0, x:500, x:viewportWidth, duration:1.5, stagger:1.5, ease: "power4.out"});


gsap.from("div.section1",
{scrollTrigger:
    {trigger: "div.trigger-box-2",start: "top 50%", end:"bottom 90%", markers: false,scrub:3, toggleActions: "restart pause pause reverse"},
        opacity:0, x:viewportWidth, duration:1.5, stagger:1, ease: "power4.out"});

gsap.from("div.section1-a-mid-cont",
{scrollTrigger:
    {trigger: "div.trigger-box-2",start: "top 50%", end:"bottom 90%", markers: false,scrub:2, toggleActions: "restart pause pause reverse"},
         opacity:0, duration:1.5, stagger:1, ease: "power4.out"});

gsap.from("div.stack",
{scrollTrigger:
    {trigger: "div.trigger-box-2",start: "top 50%", end:"bottom 90%", markers: false,scrub: 2, toggleActions: "restart pause pause reverse"},
        scale:0, opacity:0, y:viewportHeight/6, duration:1.5, stagger:1, delay:4, ease: "power4.out"});


// Animating Skill levels via Circular Progress Bar

gsap.from("div.skill-ratings",{scrollTrigger:{trigger: "div.trigger-box-2",start: "top 50%", end:"bottom 75%", markers: false, scrub: 5, toggleActions: "restart pause pause reverse"},
        x:-viewportWidth , opacity:0, duration:1.5, stagger:1, ease: "power4.out"});

gsap.to("circle.progress1",{scrollTrigger:{trigger: "div.trigger-box-2",start: "top 50%", end:"bottom 75%", markers: false, scrub: 8, toggleActions: "restart pause pause reverse"},
        strokeDasharray: `${pythonExp} 1000` , duration:1.5, delay:1, ease: "power4.out"});

gsap.to("circle.progress2",{scrollTrigger:{trigger: "div.trigger-box-2",start: "top 50%", end:"bottom 75%", markers: false, scrub: 8, toggleActions: "restart pause pause reverse"},
        strokeDasharray: `${edaExp} 1000` , duration:1.5, delay:1, ease: "power4.out"});

gsap.to("circle.progress3",{scrollTrigger:{trigger: "div.trigger-box-2",start: "top 50%", end:"bottom 75%", markers: false, scrub: 8, toggleActions: "restart pause pause reverse"},
        strokeDasharray: `${gisExp} 1000` , duration:1.5, delay:1, ease: "power4.out"});

gsap.to("circle.progress4",{scrollTrigger:{trigger: "div.trigger-box-2",start: "top 50%", end:"bottom 75%", markers: false, scrub: 8, toggleActions: "restart pause pause reverse"},
        strokeDasharray: `${mdSimExp} 1000` , duration:1.5, delay:3, ease: "power4.out"});


// Footer Animation

gsap.from(".footer-layout-left, .footer-layout-right, .footer-layout-others",{scrollTrigger:{trigger: "div.trigger-box-3",start: "top 50%",end:"bottom 75%", markers: false, scrub: 5, toggleActions: "restart pause pause reverse"},
        y:viewportHeight/2 , opacity:0, duration:1.5, stagger:0.5, ease: "power4.out"});