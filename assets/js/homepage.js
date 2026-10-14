(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  var revealItems = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  if (reduceMotion || coarsePointer) return;

  var parallaxItems = document.querySelectorAll('[data-parallax]');
  var frame;
  window.addEventListener('pointermove', function (event) {
    var x = event.clientX / window.innerWidth - 0.5;
    var y = event.clientY / window.innerHeight - 0.5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(function () {
      parallaxItems.forEach(function (item) {
        var depth = Number(item.getAttribute('data-parallax'));
        item.style.transform = 'translate3d(' + (x * depth) + 'px,' + (y * depth) + 'px,0)';
      });
    });
  }, { passive: true });

  document.querySelectorAll('.magnetic').forEach(function (item) {
    item.addEventListener('pointermove', function (event) {
      var rect = item.getBoundingClientRect();
      var x = (event.clientX - rect.left - rect.width / 2) * 0.16;
      var y = (event.clientY - rect.top - rect.height / 2) * 0.16;
      item.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
    });
    item.addEventListener('pointerleave', function () { item.style.transform = ''; });
  });

  document.querySelectorAll('.tilt-card').forEach(function (item) {
    item.addEventListener('pointermove', function (event) {
      var rect = item.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;
      item.style.setProperty('--rotate-x', (-y * 3) + 'deg');
      item.style.setProperty('--rotate-y', (x * 3) + 'deg');
    });
    item.addEventListener('pointerleave', function () {
      item.style.setProperty('--rotate-x', '0deg');
      item.style.setProperty('--rotate-y', '0deg');
    });
  });
}());
