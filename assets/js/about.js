// Scroll Progress Bar with debouncing
let isScrolling = false;
window.onscroll = function () {
  if (!isScrolling) {
    window.requestAnimationFrame(function () {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
      isScrolling = false;
    });
    isScrolling = true;
  }
};

// Mouse Circle Animation
document.addEventListener("DOMContentLoaded", function () {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
    circle.style.willChange = 'transform, left, top'; // Optimize performance
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.pageX;
    coords.y = e.pageY - window.scrollY; // Adjust for vertical scroll position
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = `${x - 12}px`;
      circle.style.top = `${y - 12}px`;
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

      const nextCircle = circles[index + 1] || circles[0];
      circle.x = x;
      circle.y = y;

      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
});

// Show/Hide Password
document.addEventListener('DOMContentLoaded', () => {
  const togglePasswordButtons = document.querySelectorAll('.toggle-password-btn');
  
  togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
      const passwordInput = button.previousElementSibling;
      if (passwordInput && passwordInput.type === 'password') {
        passwordInput.type = 'text';
        button.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
      } else if (passwordInput) {
        passwordInput.type = 'password';
        button.innerHTML = `<i class="fa-solid fa-eye"></i>`;
      }
    });
  });
});

// Modal Logic
var loginModal = document.getElementById('myModal');
var registerModal = document.getElementById('registerModal');

var loginBtn = document.getElementById('loginBtn');
var registerLink = document.getElementById('registerLink');
var loginLink = document.getElementById('loginLink');
var closeBtns = document.getElementsByClassName('close');

// Open Modals
loginBtn.onclick = function () {
  loginModal.style.display = 'block';
}

registerLink.onclick = function (event) {
  event.preventDefault();
  loginModal.style.display = 'none';
  registerModal.style.display = 'block';
}

loginLink.onclick = function (event) {
  event.preventDefault();
  registerModal.style.display = 'none';
  loginModal.style.display = 'block';
}

// Close Modals
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function () {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
  }
}

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
  if (event.target == registerModal) {
    registerModal.style.display = 'none';
  }
}

// Close Modal with 'Escape' key
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
  }
});
