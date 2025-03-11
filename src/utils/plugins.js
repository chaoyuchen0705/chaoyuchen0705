export const initPlugins = () => {
  // 确保 jQuery 已加载
  if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded')
    return
  }

  // Swiper 初始化
  if (typeof Swiper !== 'undefined') {
    new Swiper('.js-testimonials', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }

  // Magnific Popup 初始化
  if ($.fn.magnificPopup) {
    $('.js-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
    })
  }

  // Form validation 初始化
  if ($.fn.validate) {
    $('#contact-form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
          minlength: 10,
        },
      },
      messages: {
        name: {
          required: '请输入您的姓名',
          minlength: '姓名至少需要2个字符',
        },
        email: {
          required: '请输入您的邮箱',
          email: '请输入有效的邮箱地址',
        },
        message: {
          required: '请输入您的留言',
          minlength: '留言至少需要10个字符',
        },
      },
    })
  }
}
