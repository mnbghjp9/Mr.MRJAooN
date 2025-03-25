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

// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
});
