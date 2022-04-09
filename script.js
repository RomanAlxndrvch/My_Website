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
