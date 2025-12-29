// Scroll animation
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

// Certificates modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const imgs = document.querySelectorAll(".certificates img");
const span = document.getElementsByClassName("close")[0];

imgs.forEach(img => {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
