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
    duration : 2,
    delay : 1.5,
})

gsap.from(".menu", {
    y : -40,
    opacity: 0,
    duration : 2,
    delay : 2,
})

gsap.from(".social-icons", {
    y : -40,
    opacity: 0,
    duration : 2,
    delay : 2.5,
})

gsap.from(".left-part", {
    x : -100,
    opacity: 0,
    duration : 3,
    delay : 1.5,
})

gsap.from(".right-part", {
    x : 500,
    opacity: 0,
    duration : 3,
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
     duration: 1.5,

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
      duration: 1.5,
  
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