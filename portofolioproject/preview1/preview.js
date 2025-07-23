var typed = new Typed('#text',{
    strings:['developer','programmer','writer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})

const toggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('nav .right');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Stop observing so it doesn't keep firing
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Adjust this if needed
});

document.querySelectorAll('.hidden').forEach(el => {
  observer.observe(el);
});
