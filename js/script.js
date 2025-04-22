  // Toggle menu visibility on small screens
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });


  // copyright details

  let author = "Itemearau ThankGod";
  let autorsAlias = "Tamara";
  let year = new Date().getFullYear();

document.getElementById("copyright").textContent = `© ${year} ${author} | All rights reserved.`;