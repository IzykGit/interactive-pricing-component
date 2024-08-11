const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;

  const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${value}%, #d3d3d3 ${value}%)`;
} 



const indicator = document.getElementById("indicator");

indicator.addEventListener("click", function() {
    indicator.classList.toggle("monthly")
})

