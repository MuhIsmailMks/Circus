// menu btn 
const menuBtn = document.querySelector('.menu-btn')
const accessibilty = document.querySelector('.accessibilty')
menuBtn.addEventListener('click',() => { 
    menuBtn.classList.toggle('active')
    accessibilty.classList.toggle('active')
});

// aos
AOS.init({ 
    once: true
});

// navbar scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
  
    if (window.scrollY > 100) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });
  
//   pop up
const audioElement = document.getElementById('background-music');
  const popUp = document.querySelector('.pop-up')
  document.querySelector('.enter').addEventListener('click', () => {
    popUp.classList.add('hidden')
    audioElement.play();
})


  

// copy address
const copy = document.querySelectorAll(".coming");

copy.forEach(copybtn => {
    let textSpan = copybtn.querySelector('span');
    let intervalId;
    
    copybtn.addEventListener("click", function() { 
        let addressText = document.querySelector(".coming-value").getAttribute('data-set');
        textSpan.innerHTML = 'copied';

        if (intervalId) {  
            clearInterval(intervalId);
        }

        intervalId = setInterval(() => {
            textSpan.innerHTML = '0x000...COMINGSOON'; 
            clearInterval(intervalId);  
        }, 1000);

        navigator.clipboard.writeText(addressText);
    });
});

 
// copywriting
let elements = document.querySelectorAll('.writingAnimated');

elements.forEach(element => {
    let typed = new Typed(element, {
        strings: [element.dataset.typedStrings],
        typeSpeed: 50,
        smartBackspace: false,
        loop: true
    });
});






// blink animation
particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 5,
      "random": true,
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);
 