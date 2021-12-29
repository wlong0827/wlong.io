particlesJS("hero_particles", {
  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.75,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
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
});

$(init);

function init() {
  'use strict';

  // initial underlining
  function flashUnderlines(timeout) {
    $(".link").addClass("flash");
    setTimeout(function () {
      $(".flash").removeClass("flash");
    }, window.isLessThanIE10 ? 0 : timeout);
  }

  flashUnderlines(3000);

  // help text in case the user can't figure out the links
  function fadeText(timeout) {
    //$(".help-text").text(text);
    $(".help-text").fadeTo("slow", 1);
    setTimeout(function () {
      $(".help-text").fadeTo("slow", 0);
    }, window.isLessThanIE10 ? 0 : timeout);
  }

  var clicks = 0;
  var helped = 0;
  $("#hero_particles").click(function () {
    if((++clicks) == 5 && helped <= 2) {
      fadeText(2000);
      flashUnderlines(2000);
      helped++;
      clicks = 0;
    }
  });
  setTimeout(function () {
    if(helped <= 2) {
      fadeText(2000);
      flashUnderlines(2000);
    }
  }, 15000);

  // fix font size for mobile
  $('.hero_txt').css('fontSize', function(i, fs){
    if(parseInt(fs, 10) < 30 ) return this.style.fontSize = "30px";
  });
  $('.hero-sub').css('fontSize', function(i, fs){
    if(parseInt(fs, 10) < 25 ) return this.style.fontSize = "25px";
  });
  $('.text-header > *').css('fontSize', function(i, fs){
    if(parseInt(fs, 10) < 25 ) return this.style.fontSize = "20px";
  });
  $('.help-text').css('fontSize', function(i, fs){
    if(parseInt(fs, 10) < 15 ) return this.style.fontSize = "15px";
  });
}