if (window.matchMedia("(min-width: 992px)").matches) {
    gsap.from('.logo', { opacity: 0, duration: .3, delay: .5, y: 10 });
    gsap.from('.menu-burger', { opacity: 0, duration: .3, delay: .7, y: 10 });
    gsap.from('.vacancy__title', { opacity: 0, duration: .5, delay: .5, y: 100 });
    gsap.from('.v1', { opacity: 0, duration: .5, delay: 1, y: 100 });
    gsap.from('.v2', { opacity: 0, duration: .5, delay: 1.2, y: 100 });
    TweenMax.from('.salary1', .5,{scale:0, duration: .5, delay: 1.5,  yoyo:true });
    TweenMax.from('.btn1', .5,{scale:0, duration: .5, delay: 1.7,  yoyo:true });
    TweenMax.from('.svg1', .5,{scale:0, duration: .5, delay: 1.9,  yoyo:true });
    gsap.from('.v3', { opacity: 0, duration: .5, delay: .6, y: 100,  scrollTrigger: '.v4' });
    gsap.from('.v4', { opacity: 0, duration: .5, delay: .8, y: 100,  scrollTrigger: '.v4' });
    gsap.from('.t1', { opacity: 0, duration: .8, delay: 1, x: -100,  scrollTrigger: '.t2' });
    gsap.from('.t2', { opacity: 0, duration: .8, delay: 1.2, x: 100,  scrollTrigger: '.t2' });
    TweenMax.from('.salary2', .5,{scale:0, duration: .5, delay: .4,  yoyo:true,  scrollTrigger: '.svg2' });
    TweenMax.from('.btn2', .5,{scale:0, duration: .5, delay: .6,  yoyo:true,  scrollTrigger: '.svg2' });
    TweenMax.from('.svg2', .5,{scale:0, duration: .5, delay: .8,  yoyo:true,  scrollTrigger: '.svg2' });
    gsap.from('.v5', { opacity: 0, duration: .5, delay: .6, y: 100,  scrollTrigger: '.v6' });
    gsap.from('.v6', { opacity: 0, duration: .5, delay: .8, y: 100,  scrollTrigger: '.v6' });
    TweenMax.from('.salary3', .5,{scale:0, duration: .5, delay: .4,  yoyo:true,  scrollTrigger: '.svg3' });
    TweenMax.from('.btn3', .5,{scale:0, duration: .5, delay: .6,  yoyo:true,  scrollTrigger: '.svg3' });
    TweenMax.from('.svg3', .5,{scale:0, duration: .5, delay: .8,  yoyo:true,  scrollTrigger: '.svg3' });
    gsap.from('.v7', { opacity: 0, duration: .5, delay: .6, y: 100,  scrollTrigger: '.v8' });
    gsap.from('.v8', { opacity: 0, duration: .5, delay: .8, y: 100,  scrollTrigger: '.v8' });
    TweenMax.from('.salary4', .5,{scale:0, duration: .5, delay: .4,  yoyo:true,  scrollTrigger: '.svg4' });
    TweenMax.from('.btn4', .5,{scale:0, duration: .5, delay: .6,  yoyo:true,  scrollTrigger: '.svg4' });
    TweenMax.from('.svg4', .5,{scale:0, duration: .5, delay: .8,  yoyo:true,  scrollTrigger: '.svg4' });
    gsap.from('.footer1', { opacity: 0, duration: .5, delay: .5, y: 50, scrollTrigger: '.footer1' });
    gsap.from('.footer2', { opacity: 0, duration: .5, delay: .7, y: 50, scrollTrigger: '.footer1' });
    gsap.from('.footer3', { opacity: 0, duration: .5, delay: .9, y: 50, scrollTrigger: '.footer1' });
}