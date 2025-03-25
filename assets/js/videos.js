// تصفية الفيديوهات
const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // إزالة الفلتر النشط
        filterButtons.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        videoCards.forEach(card => {
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

// تشغيل الفيديو عند النقر
const videoThumbnails = document.querySelectorAll('.video-thumbnail');

videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // هنا يمكنك إضافة منطق تشغيل الفيديو
        // مثلاً: فتح نافذة منبثقة أو تحويل المستخدم إلى صفحة الفيديو
        alert('سيتم تشغيل الفيديو قريباً...');
    });
});
