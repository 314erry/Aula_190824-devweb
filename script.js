window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 550) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  