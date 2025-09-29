const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');
const icon = mobileBtn.querySelector('.fa-solid');
const headerElement = document.querySelector('header');
const home = document.querySelector('#cta');
const packages = document.querySelector('#packages');
const testimonials = document.querySelector('#testimonials');
const footer = document.querySelector('footer');
const sectionObserve = [home, packages, testimonials, footer];
const todosOsCards = document.querySelectorAll('.card');

// EVENTO DE CLIQUE ESCONDE MENU

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-x');
});
// FIM EVENTO DE CLIQUE ESCONDE MENU

// EVENTO DE BOX SHADOW NAVBAR

window.addEventListener('scroll', () => {
  if (window.scrollY <= 0) {
    headerElement.style.boxShadow = 'none';
  } else {
    headerElement.style.boxShadow = '0px 3px 20px -15px rgb(0, 0, 0)';
  }
});

// FIM EVENTO DE BOX SHADOW NAVBAR

// EVENTO DE FADEIN NAS SECTIONS

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');
    } else {
      entry.target.classList.remove('fadeIn');
    }
  });
};

const observerOptions = {
  threshold: 0.15,
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

sectionObserve.forEach(section => {
  if (section) {
    observer.observe(section);
  }
});
// fim EVENTO DE FADEIN NAS SECTIONS

//EVENTO DE CLIQUE

todosOsCards.forEach(card => {
  const carousel = card.querySelector('.carousel');
  const btnAnterior = document.createElement('button');
  const btnProximo = document.createElement('button');

  btnAnterior.className = 'btn-carousel btn-left';
  btnProximo.className = 'btn-carousel btn-right';
  btnAnterior.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  btnProximo.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

  card.appendChild(btnAnterior);
  card.appendChild(btnProximo);

  btnProximo.addEventListener('click', () => {
    carousel.scrollLeft += 350;
  });

  btnAnterior.addEventListener('click', () => {
    carousel.scrollLeft -= 350;
  });
});
