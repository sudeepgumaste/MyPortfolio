const content = document.querySelector('.content');
const loadingOverlay = document.querySelector('.loading-overlay');
const navLinks = document.querySelector('.nav__links');
const navToggle = document.getElementById('nav-toggle');

setTimeout(() => {
  content.classList.add('appear');
  loadingOverlay.classList.add('dissappear');
}, 2000);

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('toggled');
  navToggle.classList.toggle('toggled');

});

for(let i =0; i<navLinks.children.length;i++){
  navLinks.children[i].addEventListener('click', ()=>{
    navLinks.classList.toggle('toggled');
  })
}
