//! COOKIES + DARKMODE !//
document.addEventListener('DOMContentLoaded', function() {
  const btnToggle = document.querySelector('.circle-button');
  const body = document.body;
  const icon = btnToggle.querySelector('.icon');
  const loader = document.querySelector('.loader');

  // Récupérer le thème des cookies lors du chargement de la page
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  const themeCookie = cookies.find(cookie => cookie.startsWith('theme='));
  if (themeCookie) {
    const theme = themeCookie.split('=')[1];
    if (theme === 'dark') {
      body.classList.add('dark');
      setDarkMode();
    } else {
      body.classList.add('light');
      setLightMode();
    }
  } else {
    // Appliquer un thème par défaut s'il n'y a pas de cookie défini
    body.classList.add('default-theme'); // Remplacez 'default-theme' par votre thème par défaut
  }

  btnToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      setLightMode();
      document.cookie = 'theme=light; max-age=2592000; SameSite=Lax';
    } else {
      setDarkMode();
      document.cookie = 'theme=dark; max-age=2592000; SameSite=Lax';
    }
  });

  function setDarkMode() {
    icon.style.display = 'block';
    body.classList.remove('light');
    body.classList.add('dark');
    btnToggle.style.backgroundColor = '#fff'; // Couleur de fond du bouton (lune)
    icon.src = 'images/moon.png'; // Utilisez un chemin relatif
    icon.alt = "Lune";
    if (body.classList.contains('dark')) {
      loader.classList.add('dark-background');
    }
  }

  function setLightMode() {
    icon.style.display = 'block';
    body.classList.remove('dark');
    body.classList.add('light');
    btnToggle.style.backgroundColor = '#c175ff'; // Couleur de fond du bouton (soleil)
    icon.src = 'images/sun.png'; // Utilisez un chemin relatif
    icon.alt = "Soleil";
    loader.classList.remove('dark-background');
  }
});


//! HEADER FIXED !//

var header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    if (window.scrollY > header.offsetTop + header.clientHeight) {
        header.classList.add('header-fixed');
        header.style.top = '0'; // Réinitialise la propriété "top" pour la transition
    } else {
        header.classList.remove('header-fixed');
        header.style.top = '-100px'; // Déplace le menu vers le haut de l'écran pour la transition
    }
});


//! MENU !//

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section");
  const menuItems = document.querySelectorAll(".menu-word");
  let previousActiveSection = null;

  function makeActive() {
    let activeSection = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const link = document.querySelector(`.menu-word a[href="#${section.id}"]`);
      const menuItem = link.parentNode;

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // Le haut de la section arrive en bas de l'écran
        activeSection = section;
        menuItems.forEach(item => item.classList.remove("active"));
        menuItem.classList.add("active");
      }
    });

    if (activeSection === null) {
      // Si aucune section n'est survolée, ajoutez .active à "Accueil"
      const link = document.querySelector(`.menu-word a[href="#homeSection"]`);
      const menuItem = link.parentNode;
      menuItem.classList.add("active");
    }

    if (activeSection !== previousActiveSection) {
      if (previousActiveSection) {
        previousActiveSection.classList.remove("active");
      }
      previousActiveSection = activeSection;
    }
  }

  window.addEventListener("scroll", makeActive);
  makeActive();
});




//! LOADER !//

document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');

    // Ajoutez une classe 'fondu-out' après un certain délai (en millisecondes)
    setTimeout(function () {
        loader.classList.add('fondu-out');

        // Attendez que l'animation de fondu soit terminée (par exemple, 1 seconde) avant de masquer le loader
        setTimeout(function () {
            loader.style.display = 'none';
        }, 1100); // Temps en millisecondes (1 seconde dans cet exemple)
    }, 1500); // Temps en millisecondes (1,5 secondes dans cet exemple)
});


//! ANIMATIONS !//

const title = document.querySelectorAll('.title');
const menu = document.querySelectorAll('.menu');
const socialIcons = document.querySelectorAll('.social-icons');
const leftPart = document.querySelectorAll('.left-part');
const rightPart = document.querySelectorAll('.right-part');

window.addEventListener('DOMContentLoaded', () => {

gsap.from(".title", {
    y : -40,
    opacity: 0,
    duration : .5,
    delay : 2,
})

gsap.from(".menu", {
    y : -40,
    opacity: 0,
    duration : .5,
    delay : 2,
})

gsap.from(".social-icons", {
    y : -40,
    opacity: 0,
    duration : .5,
    delay : 2,
})

gsap.from(".left-part", {
    x : -200,
    opacity: 0,
    duration : 1.5,
    delay : 1.5,
})

gsap.from(".right-part", {
    x : 500,
    opacity: 0,
    duration : 2,
    delay : 1,
})
})

gsap.config({
    autoSleep: 60,
    force3D: false,
    nullTargetWarn: false,
    trialWarn: false,
    units: {left: "%", top: "%", rotation: "rad"}
  });

  //! SCROLL ANIMATIONS !//
  // QUALITIES //
  let qualities = gsap.timeline({
    scrollTrigger: {
        trigger: '.qualities',
        start: '20% 80%',
        end: 'bottom center',
        scrub: true,

    }
  })

  qualities.fromTo('.qualities', { scale: 0.0005 }, { scale: 1 });

  // PROJECTS //
  let workTitle = gsap.timeline({
    scrollTrigger: {
        trigger: '.work-title',
        start: '20% 80%',
        end: '20% -80%',
        scrub: false,
        toggleActions: 'play reverse play reverse'
    }
  })

  workTitle.from('.work-title', {
     y: 100,
     opacity: 0,
     duration: 1,

    });

  let projectPic = gsap.timeline({
    scrollTrigger: {
        trigger: '.un',
        start: '20% 80%',
        end: '20% -80%',
        scrub: false,
        toggleActions: 'play reverse play reverse'
    }
  })
  
  projectPic.from('.un', {
      y: 100,
      opacity: 0,
      duration: 1,
  
    });



  //smooth scroll
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
