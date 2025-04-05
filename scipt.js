// اضافه کردن رویداد کلیک به لینک‌های ناوبری
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک

            // گرفتن آدرس صفحه مقصد
            const targetPage = this.getAttribute('href');

            // انتقال به صفحه مقصد
            window.location.href = targetPage;
        });
    });
});