// gsap.fromTo(".banner-image",{opacity:0, x:-300},{opacity:1, x:0, duration:0.5})

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({defaults: {duration:2, ease: "power3.out"}})
// banner image rotate
tl.fromTo(".banner-image",{opacity:0, x:-90, rotation: "-90deg"},{opacity:1, x:0, rotation:"0deg"})
tl.fromTo("div.banner-element2",{x:200, opacity:0},{x:0, opacity:1, delay: 0.3},"<")