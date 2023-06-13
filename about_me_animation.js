gsap.registerPlugin(ScrollTrigger);

gsap.from("svg.toc-mark1",{scrollTrigger:{trigger: "div.about-me-narrative", start: "top 0%", end: "bottom 0%",  markers:false, toggleActions: "restart reverse restart reverse"},
        scale:0.5, ease: "power4.out"});


gsap.from("svg.toc-mark2",{scrollTrigger:{trigger: "div.education-timeline", markers:false, start: "top 0%", end: "bottom 0%",  toggleActions: "restart reverse restart reverse"},
        scale:0.5, ease: "power4.out"});

gsap.from("svg.toc-mark3",{scrollTrigger:{trigger: "div.career-timeline", markers:false, start: "top 0%", end: "bottom 0%", toggleActions: "restart reverse restart reverse"},
        scale:0.5, ease: "power4.out"});

gsap.from("svg.toc-mark4",{scrollTrigger:{trigger: "div.milestone-timeline", markers:false, start: "top 0%", end: "bottom 0%", toggleActions: "restart reverse restart reverse"},
        scale:0.5, ease: "power4.out"});

gsap.from("svg.toc-mark5",{scrollTrigger:{trigger: "div.others-timeline", markers:false, start: "top 0%", end: "bottom 0%", toggleActions: "restart reverse restart reverse"},
        scale:0.5, ease: "power4.out"});