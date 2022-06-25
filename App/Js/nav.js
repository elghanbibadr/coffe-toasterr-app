import { UpdateClassesOnElement } from './main.js';




let navClose=document.querySelector('.nav__close');
let navList=document.querySelector('.nav__list');
let navHamburger=document.querySelector('.nav__hamburger');



class Nav{
    constructor(){
        navHamburger.addEventListener('click',this._ShowList);
        navClose.addEventListener('click',this._hideList);
    }
     _ShowList(){
        UpdateClassesOnElement(navList,'show',true);
        UpdateClassesOnElement(navClose,'hidden',false)
        UpdateClassesOnElement(this,'hidden',true);
       }
       
       
        _hideList(){
            UpdateClassesOnElement(navList,'show',false);
            UpdateClassesOnElement(navHamburger,'hidden',false)
            UpdateClassesOnElement(this,'hidden',true);
            
       }
       
}

let myNavigation=new Nav(); 