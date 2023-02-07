// ==========================================   DARK MODE ============================
let icon = document.getElementById('moon');

icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'assets/img/sun.png';
  } else {
    icon.src = 'assets/img/moon.png';
  }
};

// ==========================================   DARK MODE ============================

// ==========================================   NAV ============================
const toggler = document.querySelector('.nav--toggler');
const menu = document.querySelector('.content__nav');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});

// ==========================================   NAV ============================
