gsap.registerPlugin(ScrollTrigger);

gsap.from("svg.toc-mark1",{scrollTrigger:{trigger: "div.about-me-narrative", start: "top 0%", end: "bottom 10%",  markers:false, toggleActions: "restart reverse restart reverse"},
        scale:0.5, duration: 0.2,  ease: "power3.out"});


gsap.from("svg.toc-mark2",{scrollTrigger:{trigger: "div.education-timeline", markers:false, start: "top 20%", end: "bottom 10%",  toggleActions: "restart reverse restart reverse"},
        scale:0.5, duration: 0.2, ease: "power3.out"});

gsap.from("svg.toc-mark3",{scrollTrigger:{trigger: "div.career-timeline", markers:false, start: "top 20%", end: "bottom 10%", toggleActions: "restart reverse restart reverse"},
        scale:0.5, duration: 0.2, ease: "power3.out"});

gsap.from("svg.toc-mark4",{scrollTrigger:{trigger: "div.milestone-timeline", markers:false, start: "top 20%", end: "bottom 10%", toggleActions: "restart reverse restart reverse"},
        scale:0.5, duration: 0.2, ease: "power3.out"});

gsap.from("svg.toc-mark5",{scrollTrigger:{trigger: "div.others-timeline", markers:false, start: "top 50%", end: "bottom 0%", toggleActions: "restart reverse restart reverse"},
        scale:0.5, duration: 0.2, ease: "power3.out"});

gsap.from("svg.goto-home",{scrollTrigger:{trigger: "div.others-timeline", markers:false, start: "top 50%", end: "bottom 0%", toggleActions: "restart reverse restart reverse"},
        scale:0.5, duration: 0.2, ease: "power3.out"});