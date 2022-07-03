import { UpdateClassesOnElement ,toggleClassesOnElement } from "./main.js";

let accordionQuestion=document.querySelectorAll('.accordion__question');
let collapsible;
let answers=document.querySelectorAll('.accordion__question__answers');

accordionQuestion.forEach(question=>question.addEventListener('click',(e)=>showAnswer(e)) )
answers.forEach(answer=>answer.addEventListener('click',()=>{
    answers.forEach(answers=>UpdateClassesOnElement(answers,'bg-green',false));
    coloriseTargetAnswer(answer);
}))


function showAnswer(e){
    let targetQuestion=e.target.parentElement.parentElement;
 collapsible=targetQuestion.lastElementChild;
    if  (!e.target.classList.contains('arrow'))return;
    
        toggleClassesOnElement(e.target,'rotate')
        toggleClassesOnElement(collapsible,'hidden')
       checkTheCurrentEelement();
}


function checkTheCurrentEelement(){
    accordionQuestion.forEach(question=>{
        if (!collapsible){
            UpdateClassesOnElement(question.lastElementChild,'hidden',true)
        } 
    }
    )}


    function coloriseTargetAnswer(element){
     toggleClassesOnElement(element,'bg-green');
    }