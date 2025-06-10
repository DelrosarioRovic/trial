// fetch header html 

fetch("../components/navigation.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
  })
  .catch(error => {
    console.error("Failed to load header", error);
     document.getElementById("header").innerHTML = `
      <header>
        <div class="header-container">
          <h2 class="home-title">LEGENDS</h2>
          <img src="./assets/icons/search.png" class="search-icon" alt="">
        </div>
        <nav class="navbar" id="navbar">
          <a href="#" class="nav-logo">Logo</a>
          <div class="nav-links" id="navLinks">
            <a href="#" class="icon-container">
              <img class="mobile-icon" src="./assets/icons/home.png" alt="">
              <span class="desktop-text">Home</span>
            </a>
            <a href="#" class="icon-container">
              <img class="mobile-icon" src="./assets/icons/search.png" alt="">
              <span class="desktop-text">Search</span>
            </a>
            <a href="#" class="icon-container">
              <img class="mobile-icon" src="./assets/icons/play-alt (1).png" alt="">
              <span class="desktop-text">Video</span>
            </a>
            <a class="icon-profile" href="#">
              <div>
                <img class="profile-img" src="./assets/images/16.png" alt="">
              </div>
              <span class="active-dot">
                <img src="./assets/icons/Vector.png" class="active-dot-logo" alt="">
              </span>
            </a>
          </div>
        </nav>
      </header>
    `;
  });

