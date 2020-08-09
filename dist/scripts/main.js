const content = document.querySelector('.content');
const loadingOverlay = document.querySelector('.loading-overlay');
const navLinks = document.querySelector('.nav__links');
const navToggle = document.getElementById('nav-toggle');
const sections = document.querySelectorAll('section');
const navContact = document.querySelector('#nav-contact');
const nav = document.querySelector('.nav');

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
    if(entry.isIntersecting){
      if(entry.target.id !== "home" ){
        navContact.style.opacity = "1";
        navContact.style.pointerEvents = "unset";
        nav.classList.add('bg-toggle')
      }
      else{
        navContact.style.opacity = "0";
        navContact.style.pointerEvents = "none";
        nav.classList.remove('bg-toggle')
      }
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


const experienceGrid = document.querySelector('.experience__grid');

const experienceDetails = document.createElement('div');
experienceDetails.classList.add('experience__details');
experienceDetails.innerHTML = `
<div class="experience__title">
    Full Stack Web developer @ <span>Transil Inc.</span>
</div>
<div class="experience__duration">
    Jun 2019 - Jun 2020
</div>
<ul>
    <li>
        Wrote UI Kit with react which consisted of highly reusable components which helped my teammates to pick up the pace
    </li>
    <li>
        Wrote several animated components while making sure that they maintain 60 fps
    </li>
    <li>
        Setup a CI/CD pipeline on AWS using elastic beanstalk and github actions which sped up the integration and deployment.
    </li>
    <li>
        Designed the project directory structure and introduced coding standards like SOLID design principles and BEM conventions that improved the maintainability of the code and increased the ease of integration
    </li>
    <li>
        <span>Tools and Technologies : </span> Node.js, Express.js, Redis, React.js, Redux, (S)CSS, MongoDB, GraphQL, AWS
    </li>
</ul>
`
experienceGrid.appendChild(experienceDetails);