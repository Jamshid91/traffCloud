if (window.matchMedia("(min-width: 992px)").matches) {
    gsap.from('.who__title', { opacity: 0, duration: .3, delay: .6, y: 100, scrollTrigger: '.who__title' });
    gsap.from('.helped__title', { opacity: 0, duration: .3, delay: .8, y: 100, scrollTrigger: '.helped__title' });
    gsap.from('.brend1', { opacity: 0, duration: .3, delay: .4, y: 50, scrollTrigger: '.brend1' });
    gsap.from('.brend2', { opacity: 0, duration: .3, delay: .6, y: 50, scrollTrigger: '.brend1' });
    gsap.from('.brend3', { opacity: 0, duration: .3, delay: .8, y: 50, scrollTrigger: '.brend1' });
    gsap.from('.brend4', { opacity: 0, duration: .3, delay: 1, y: 50, scrollTrigger: '.brend1' });
    gsap.from('.who-left', { opacity: 0, duration: .8, delay: .5, x: -400, scrollTrigger: '.who-left' });
    gsap.from('.who-right', { opacity: 0, duration: .8, delay: .7, x: 400, scrollTrigger: '.who-left' });
    gsap.from('.some__title', { opacity: 0, duration: .3, delay: .5, y: 150, scrollTrigger: '.some__title' });
    gsap.from('.metrics__title', { opacity: 0, duration: .3, delay: .7, y: 150, scrollTrigger: '.some__title' });
    gsap.from('.metrics1', { opacity: 0, duration: .5, delay: .4, y: 100, scrollTrigger: '.metrics1' });
    gsap.from('.metrics2', { opacity: 0, duration: .5, delay: .6, y: 100, scrollTrigger: '.metrics1' });
    gsap.from('.metrics3', { opacity: 0, duration: .5, delay: .8, y: 100, scrollTrigger: '.metrics1' });
    gsap.from('.metrics4', { opacity: 0, duration: .5, delay: 1, y: 100, scrollTrigger: '.metrics1' });
    gsap.from('.approach__title', { opacity: 0, duration: .6, delay: .4, y: 150, scrollTrigger: '.approach__title' });
    gsap.from('.approach1', { opacity: 0, duration: .5, delay: .4, x: 50, scrollTrigger: '.approach1' });
    gsap.from('.approach2', { opacity: 0, duration: .5, delay: .6, x: 50, scrollTrigger: '.approach1' });
    gsap.from('.approach3', { opacity: 0, duration: .5, delay: .4, x: 50, scrollTrigger: '.approach3' });
    gsap.from('.approach4', { opacity: 0, duration: .5, delay: .6, x: 50, scrollTrigger: '.approach3' });
    gsap.from('.approach5', { opacity: 0, duration: .5, delay: .6, x: 50, scrollTrigger: '.approach5' });
    gsap.from('.features__title', { opacity: 0, duration: .3, delay: .5, y: 150, scrollTrigger: '.features__title' });
    gsap.from('.experience__title', { opacity: 0, duration: .3, delay: .7, y: 50, scrollTrigger: '.features__title' });
    gsap.from('.expertise1', { opacity: 0, duration: .8, delay: .6, x: -100, scrollTrigger: '.expertise__img' });
    gsap.from('.expertise2', { opacity: 0, duration: .8, delay: .8, x: -100, scrollTrigger: '.expertise__img' });
    gsap.from('.expertise3', { opacity: 0, duration: .8, delay: 1, x: -100, scrollTrigger: '.expertise__img' });
    gsap.from('.expertise4', { opacity: 0, duration: .8, delay: 1.2, x: -100, scrollTrigger: '.expertise__img' });
    gsap.from('.expertise__img', { opacity: 0, duration: .8, delay: .8, x: 250, scrollTrigger: '.expertise__img' });
    gsap.from('.customer__title', { opacity: 0, duration: .3, delay: .5, y: 50, scrollTrigger: '.customer__title' });
    gsap.from('.feedback__title', { opacity: 0, duration: .3, delay: .7, y: 150, scrollTrigger: '.customer__title' });
    TweenMax.from('.r1', .5,{scale:0, delay: .6,  yoyo:true, scrollTrigger: '.customer-carousel'});
    TweenMax.from('.r2', .5,{scale:0, delay: .8,  yoyo:true, scrollTrigger: '.customer-carousel'});
    TweenMax.from('.r3', .5,{scale:0, delay: 1,  yoyo:true, scrollTrigger: '.customer-carousel'});
    TweenMax.from('.r4', .5,{scale:0, delay: 1.2,  yoyo:true, scrollTrigger: '.customer-carousel'});
    TweenMax.from('.customer-carousel', .5,{scale:0,  yoyo:true, scrollTrigger: '.customer-carousel'});
    gsap.from('.steps__title', { opacity: 0, duration: .3, delay: .5, y: 150, scrollTrigger: '.leads__title' });
    gsap.from('.deliver__title', { opacity: 0, duration: .3, delay: .7, y: 50, scrollTrigger: '.leads__title' });
    gsap.from('.leads__title', { opacity: 0, duration: .3, delay: .9, y: 50, scrollTrigger: '.leads__title' });
    gsap.from('.steps-left', { opacity: 0, duration: .8, delay: .5, x: -400, scrollTrigger: '.steps-left' });
    gsap.from('.steps-right', { opacity: 0, duration: .8, delay: .7, x: 400, scrollTrigger: '.steps-left' });
    gsap.from('.footer1', { opacity: 0, duration: .5, delay: .5, y: 50, scrollTrigger: '.footer1' });
    gsap.from('.footer2', { opacity: 0, duration: .5, delay: .7, y: 50, scrollTrigger: '.footer1' });
    gsap.from('.footer3', { opacity: 0, duration: .5, delay: .9, y: 50, scrollTrigger: '.footer1' });

}