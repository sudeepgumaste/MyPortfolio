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
    // console.log(entry.target, entry.isIntersecting);
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      document.getElementById(`${entry.target.id}-link`).classList.add('visible')
    }
    else{
      document.getElementById(`${entry.target.id}-link`).classList.remove('visible')
      // entry.target.classList.remove('visible');
    }
  });
}, {
  // rootMargin: "0px 0px -500px 0px ",
  threshold: 0.5
})

sections.forEach(section=>{
  observer.observe(section)
})
