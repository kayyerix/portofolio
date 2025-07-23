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
