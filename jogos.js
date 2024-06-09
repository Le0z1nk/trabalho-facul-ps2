const items = document.querySelectorAll('.appear');

const active = function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
      entry.unobserve(entry.target)
    }
  });
}
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
  io2.observe(items[i]);
}