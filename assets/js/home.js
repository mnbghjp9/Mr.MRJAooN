// إضافة المشاريع الأخيرة ديناميكياً
const latestProjects = [
    {
        title: "برنامج إدارة المهام",
        description: "تطبيق سطح المكتب لإدارة المهام والمشاريع",
        image: "assets/images/projects/task-manager.jpg",
        link: "projects/task-manager.html"
    },
    {
        title: "تطبيق المحادثة الذكي",
        description: "تطبيق موبايل للمحادثة باستخدام الذكاء الاصطناعي",
        image: "assets/images/projects/chat-app.jpg",
        link: "projects/chat-app.html"
    },
    {
        title: "نظام إدارة المدارس",
        description: "منصة ويب متكاملة لإدارة المدارس",
        image: "assets/images/projects/school-system.jpg",
        link: "projects/school-system.html"
    }
];

// عرض المشاريع في الصفحة
function displayProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    latestProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'content-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', index * 100);

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn">عرض المشروع</a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// تهيئة particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// تبديل اللغة
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    
    if (currentLang === 'ar') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
    }
}

// تشغيل/إيقاف الموسيقى
const musicBtn = document.getElementById('music-toggle');
const music = document.getElementById('background-music');
let isMusicPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        music.pause();
        musicBtn.classList.remove('active');
    } else {
        music.play();
        musicBtn.classList.add('active');
    }
    isMusicPlaying = !isMusicPlaying;
});

// إنشاء النيازك الكبيرة
function createMeteors() {
    const meteorsContainer = document.querySelector('.meteors');
    const createMeteor = () => {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.left = Math.random() * window.innerWidth + 'px';
        meteor.style.top = Math.random() * window.innerHeight + 'px';
        meteorsContainer.appendChild(meteor);
        setTimeout(() => {
            meteor.remove();
        }, 3000);
    };
    setInterval(createMeteor, 2000);
}

// إنشاء النيازك الصغيرة
function createSmallMeteors() {
    const smallMeteorsContainer = document.querySelector('.small-meteors');
    const createSmallMeteor = () => {
        const meteor = document.createElement('div');
        meteor.className = 'small-meteor';
        meteor.style.left = Math.random() * window.innerWidth + 'px';
        meteor.style.top = '0';
        smallMeteorsContainer.appendChild(meteor);
        setTimeout(() => {
            meteor.remove();
        }, 3000);
    };
    setInterval(createSmallMeteor, 300); // تكرار أكثر للنيازك الصغيرة
}

// تهيئة AOS
AOS.init({
    duration: 1000,
    once: true
});

// إدارة شخصية مرجان
function handleMarjanCharacter() {
    const marjanCharacter = document.querySelector('.marjan-character');
    
    // إظهار مرجان
    setTimeout(() => {
        marjanCharacter.style.display = 'block';
        
        // إخفاء مرجان بعد 5 دقائق
        setTimeout(() => {
            marjanCharacter.style.opacity = '0';
            marjanCharacter.style.transform = 'translateY(50px)';
            setTimeout(() => {
                marjanCharacter.style.display = 'none';
            }, 1000);
        }, 5 * 60 * 1000); // 5 دقائق
    }, 1000);
}

// تحديث نصوص حقوق الملكية عند تغيير اللغة
function updateCopyrightText() {
    const currentLang = getCurrentLanguage();
    const arTexts = document.querySelectorAll('.copyright-bar .ar');
    const enTexts = document.querySelectorAll('.copyright-bar .en');
    
    if (currentLang === 'en') {
        arTexts.forEach(text => text.style.display = 'none');
        enTexts.forEach(text => text.style.display = 'inline');
    } else {
        arTexts.forEach(text => text.style.display = 'inline');
        enTexts.forEach(text => text.style.display = 'none');
    }
}

// تشغيل التأثيرات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    createMeteors();
    createSmallMeteors();
    
    // تحديث نصوص حقوق الملكية عند تغيير اللغة
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        setTimeout(updateCopyrightText, 100);
    });
    
    // تشغيل شخصية مرجان
    handleMarjanCharacter();
    
    // تحديث النصوص عند تحميل الصفحة
    updateCopyrightText();
});
