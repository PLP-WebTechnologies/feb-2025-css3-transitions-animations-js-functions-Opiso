// Load saved color on page load
window.onload = () => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      document.getElementById("colorPicker").value = savedColor;
    }
  };
  
  // Save color preference
  document.getElementById("saveColor").addEventListener("click", () => {
    const color = document.getElementById("colorPicker").value;
    localStorage.setItem("themeColor", color);
    document.body.style.backgroundColor = color;
  });
  
  // Trigger box animation
  function triggerBoxAnimation() {
    const box = document.getElementById("box");
    box.classList.add("animate");
  
    // Reset animation after it's done
    setTimeout(() => {
      box.classList.remove("animate");
    }, 1000);
  }
  