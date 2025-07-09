document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('#stats h3');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const step = target / 100;

    const update = () => {
      if (count < target) {
        count += step;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
});
