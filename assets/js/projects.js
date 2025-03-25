// تهيئة المكتبات
AOS.init({
    duration: 1000,
    once: true
});

// تصفية المشاريع
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // إزالة الفلتر النشط
        filterButtons.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// تحميل المشاريع ديناميكياً
const projects = [
    {
        title: "برنامج إدارة المهام",
        description: "تطبيق سطح مكتب لإدارة المهام والمشاريع بواجهة مستخدم حديثة",
        image: "assets/images/projects/project1.jpg",
        category: "desktop",
        tech: ["Python", "PyQt", "SQLite"],
        demo: "#",
        code: "#"
    },
    {
        title: "نظام التعرف على الوجوه",
        description: "نظام ذكي للتعرف على الوجوه باستخدام تقنيات الذكاء الاصطناعي",
        image: "assets/images/projects/project2.jpg",
        category: "ai",
        tech: ["Python", "TensorFlow", "OpenCV"],
        demo: "#",
        code: "#"
    },
    {
        title: "منصة تعليمية",
        description: "منصة تعليمية متكاملة للتعلم عن بعد مع نظام إدارة المحتوى",
        image: "assets/images/projects/project3.jpg",
        category: "web",
        tech: ["React", "Node.js", "MongoDB"],
        demo: "#",
        code: "#"
    }
];
