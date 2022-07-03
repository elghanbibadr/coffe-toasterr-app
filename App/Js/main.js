import './nav.js';
import './faq.js';
import './scroll.js';
// this is general fucntion for adding specifique classes to the targeted element and can be shared between all the modules
export function UpdateClassesOnElement(element,className,isAdd){
    if (isAdd) element.classList.add(`${className}`);
    else element.classList.remove(`${className}`);

}


export function toggleClassesOnElement(element,classeName){
element.classList.toggle(`${classeName}`);
}