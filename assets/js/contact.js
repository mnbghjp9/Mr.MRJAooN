// معالجة نموذج الاتصال
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // جمع بيانات النموذج
    const formData = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        subject: contactForm.querySelector('input[type="text"]:nth-of-type(2)').value,
        message: contactForm.querySelector('textarea').value
    };

    // هنا يمكنك إضافة منطق إرسال البيانات إلى الخادم
    // مثال: استخدام fetch API
    console.log('Form data:', formData);
    
    // إظهار رسالة نجاح (يمكن تخصيصها حسب الحاجة)
    const lang = document.documentElement.getAttribute('lang');
    alert(lang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
    
    // إعادة تعيين النموذج
    contactForm.reset();
});
