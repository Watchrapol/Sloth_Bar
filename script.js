const sw = new Swiper('.mySwiper', {
    loop: true,
    centeredSlides: true,        // การ์ดกลางอยู่ตรงกลาง
    slidesPerView: 'auto',       // ใช้ความกว้างจาก CSS ของ .swiper-slide
    spaceBetween: 24,            // ระยะห่างการ์ด
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,                 // หมุนข้าง ๆ (0 = ไม่หมุน)
        stretch: 0,                // ยืดเข้าออก
        depth: 120,                // ระยะลึก (perspective)
        modifier: 1,
        slideShadows: false
    },
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
});
