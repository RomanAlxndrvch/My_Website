const section = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

//implement NavBar menu highlight

const pageObs = function (entries) {
  const [entry] = entries;

  const current = entry.target.getAttribute('id');

  if (entry.isIntersecting) {
    navLi.forEach(function (li) {
      li.classList.remove('navigation__link-active');

      if (li.classList.contains(current)) {
        li.classList.add('navigation__link-active');
      }
    });
  }
};

const pageObserver = new IntersectionObserver(pageObs, {
  root: null,
  threshold: 0.8,
});

section.forEach((sec) => pageObserver.observe(sec));

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
