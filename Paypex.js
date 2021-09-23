// Modal forms

var modals = document.querySelectorAll('.header-modal-container');

window.onclick = function(event) {
    if (event.target.classList.contains('header-modal-container')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

// Topnav

function displayNav() {
    var x = document.getElementById("responsiveNav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

