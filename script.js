//implement NavBar menu highlight
const section = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function (e) {
  let current = '';

  section.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(function (li) {
    li.classList.remove('navigation__link-active');

    if (li.classList.contains(current)) {
      li.classList.add('navigation__link-active');
    }
  });
});

// Implement scrolling
document
  .querySelector('.navigation__list')
  .addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('navigation__link')) {
      id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
