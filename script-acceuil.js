const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const btnRetour = document.querySelectorAll('.btn-retour');
const logo = document.querySelectorAll('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelectorAll('.l1');
const l2 = document.querySelectorAll('.l2');

window.addEventListener('load', () => {
    const TL = gsap.timeline({ paused: true });

    TL
        .staggerFrom(titreSpans, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
        .staggerFrom(btns, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3, '-=1')
        .staggerFrom(btnRetour, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3, '-=1')
        .from(l1, 1, { width: 0, ease: "power2.out" }, '-=2')
        .from(l2, 1, { width: 0, ease: "power2.out" }, '-=2')
        .from(logo, 1, { transform: "scale(0)", ease: "power2.out" }, '-=2')
        .staggerFrom(medias, 1, { right: -200, opacity: 0, ease: "power2.out" }, 0.3, '-=1');

    TL.play();
});



