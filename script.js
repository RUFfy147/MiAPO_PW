document.addEventListener('DOMContentLoaded', function () {
  // инициализация 1 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-1', {
    loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true,
  });
  // инициализация 2 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-2', {
    loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true,
  });
});
