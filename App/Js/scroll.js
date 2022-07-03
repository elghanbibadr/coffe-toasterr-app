let links=document.querySelectorAll('.accordion__link-item');


links.forEach(link=>link.addEventListener('click',function(){
  document.querySelector(`[data-scroll='${this.textContent}']`).scrollIntoView({behavior:'smooth'})
}))