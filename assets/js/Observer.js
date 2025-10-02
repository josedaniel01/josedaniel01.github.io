const projectboxes = document.querySelectorAll('.projects-card');
const titleprojects = document.querySelectorAll('.titles');
const descriptionAboutMe = document.querySelector('.description');
const contactForm = document.querySelector('.form-box');
const tecItems = document.querySelectorAll('.technol');


const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('visible', entry.isIntersecting);
		if(entry.isIntersecting) observer.unobserve(entry.target);

		if(entry.isIntersecting && entry.target.classList.contains('technol')){
			entry.target.addEventListener('transitionend', function handler(){
				entry.target.classList.remove('technol', entry.isIntersecting);
				entry.target.classList.add('technolHover');
			})
			
		}

	})
},
{
	threshold: 0.2,
	rootMargin: "-50px",
}
)

projectboxes.forEach(project => {
	observer.observe(project);
});

titleprojects.forEach(title =>{
	observer.observe(title);
});

tecItems.forEach(tec =>{
	observer.observe(tec);
});

observer.observe(descriptionAboutMe);
observer.observe(contactForm);



// Change navbar color on scroll
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const navbar = document.querySelector('.navbar');
  const navUl = document.querySelector('ul');
  const navli = this.document.querySelectorAll('li');

  if (scrollPosition > 100) { // Change color after scrolling 200px
    navbar.classList.add('backdrop-blur-3xl', 'rounded-4xl');
  }else if(scrollPosition < 100){
	navbar.classList.remove('backdrop-blur-3xl');
  }
  if(scrollPosition > 600){
	navUl.classList.remove('text-white');
	navUl.classList.add('text-zinc-600');
	navli.forEach(li => {
		li.classList.add('hover:text-white');
	});
  }
  else if(scrollPosition < 600){
	navUl.classList.remove('text-zinc-600');
	navUl.classList.add('text-white');
	navli.forEach(li => {
		li.classList.remove('hover:text-white')
	});
  }
});