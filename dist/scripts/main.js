const content = document.querySelector('.content');
const loadingOverlay = document.querySelector('.loading-overlay');
const navLinks = document.querySelector('.nav__links');
const navToggle = document.getElementById('nav-toggle');
const sections = document.querySelectorAll('section')

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
    navToggle.classList.toggle('toggled');
  })
}

const observer = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    // console.log(entry);
    if(entry.isIntersecting || entry.intersectionRatio){
      entry.target.classList.add('visible');
      document.getElementById(`${entry.target.id}-link`).classList.add('visible')
    }
    else{
      document.getElementById(`${entry.target.id}-link`).classList.remove('visible')
      // entry.target.classList.remove('visible');
    }
  });
}, {
  rootMargin: "-50% 0px -50% 0px ",
  // threshold: 0.25
})

sections.forEach(section=>{
  observer.observe(section)
})
