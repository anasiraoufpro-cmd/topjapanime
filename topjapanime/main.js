document.addEventListener("DOMContentLoaded", () => {
  
  /* ===============================
     SLIDER TENDANCE
  =============================== */
  
  const slider = document.querySelector(".trend-slider");
  const dots = document.querySelectorAll(".dot");
  
  if (!slider || dots.length === 0) {
    console.warn("Slider ou dots introuvables");
  } else {
    slider.addEventListener("scroll", () => {
      const sliderWidth = slider.offsetWidth;
      const index = Math.round(slider.scrollLeft / sliderWidth);
      
      dots.forEach(dot => dot.classList.remove("active"));
      
      if (dots[index]) {
        dots[index].classList.add("active");
      }
    });
    
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        slider.scrollTo({
          left: slider.offsetWidth * index,
          behavior: "smooth"
        });
      });
    });
  }
  
  /* ===============================
     THEME CLAIR / SOMBRE
  =============================== */
  
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  
  if (!toggleBtn) {
    console.warn("Bouton thème introuvable");
    return;
  }
  
  // Charger le thème sauvegardé
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
  
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    
    const isLight = body.classList.contains("light-theme");
    toggleBtn.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
  
});
