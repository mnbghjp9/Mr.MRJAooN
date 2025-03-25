// تهيئة المكتبات
AOS.init({
    duration: 1000,
    once: true
});

// تهيئة خلفية الجزيئات
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: true,
            animation: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            animation: { enable: true, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// إدارة الموسيقى
const musicBtn = document.getElementById('music-toggle');
const music = document.getElementById('background-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        musicBtn.classList.remove('playing');
    } else {
        music.play();
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});
