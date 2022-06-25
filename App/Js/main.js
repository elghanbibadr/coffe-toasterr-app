let navHamburger=document.querySelector('.nav__hamburger');
let navClose=document.querySelector('.nav__close');
let navList=document.querySelector('.nav__list');



class Nav{
    constructor(){
        navHamburger.addEventListener('click',this._ShowList);
        navClose.addEventListener('click',this._hideList);
    }
     _ShowList(){
        navList.classList.add('show');
        navClose.classList.remove('hidden');
        this.classList.add('hidden');
       }
       
       
        _hideList(){
        navList.classList.remove('show');
        navHamburger.classList.remove('hidden')
        this.classList.add('hidden');
       }
       
}

let myNavigation=new Nav();