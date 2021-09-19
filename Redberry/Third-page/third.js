const firstQuestionOp1 = document.getElementById('first-question-p3-op1');
const firstQuestionOp2 = document.getElementById('first-question-p3-op2');
const protokoli = document.getElementById('protokoli');
const suggestionLink = document.getElementById('suggestion-link');
const suggestion2Dose = document.getElementById('suggestion-2-dose');
const firstQuestion = document.getElementById('first-question-p3');

const leftArrow3 = document.getElementById('left-arrow3');
const arrow3 = document.getElementById('arrow3');

//local storage

let radios = form3.querySelectorAll('input[type=radio]');
let data = [];

function addData () {
      for (let i=0; i<radios.length; i++){
          if (document.getElementById(radios[i].id).checked){
              data.push(document.getElementById(radios[i].id).value);
          }
      }
      localStorage.setItem('dataList3', JSON.stringify(data) );
}

document.addEventListener('DOMContentLoaded', ()=>{
         document.getElementById('arrow2').addEventListener('click', addData);
     });

//validations

function check(){
if (document.getElementById('yes-radio-p3').checked){
    firstQuestionOp1.setAttribute("style","z-index:2;");
    firstQuestionOp2.setAttribute("style","z-index:0;");
    protokoli.setAttribute("style","z-index:0;");
    suggestionLink.setAttribute("style","z-index:0;");
    suggestion2Dose.setAttribute("style","z-index:0;");
} else if (document.getElementById('no-radio-p3').checked) {
    firstQuestionOp1.setAttribute("style","z-index:0;");
    firstQuestionOp2.setAttribute("style","z-index:2;");
    protokoli.setAttribute("style","z-index:0;");
    suggestionLink.setAttribute("style","z-index:0;");
    suggestion2Dose.setAttribute("style","z-index:0;");
}
}

function checkagain(){
    if (document.getElementById('yes-radio-p3').checked){     
       if (document.getElementById('first-reg').checked){
            suggestion2Dose.setAttribute("style","z-index:2;");
       }  else {
            protokoli.setAttribute("style","z-index:0;");
            suggestionLink.setAttribute("style","z-index:0;");
            suggestion2Dose.setAttribute("style","z-index:0;");
       }
    } 
    else if (document.getElementById('no-radio-p3').checked) {

         if (document.getElementById('no-plan').checked){
            protokoli.setAttribute("style","z-index:0;");
            suggestionLink.setAttribute("style","z-index:2;");
            suggestion2Dose.setAttribute("style","z-index:0;");
         } else if (document.getElementById('plan').checked){
            protokoli.setAttribute("style","z-index:2;");
            suggestionLink.setAttribute("style","z-index:0;");
            suggestion2Dose.setAttribute("style","z-index:0;");
         }  else {
            protokoli.setAttribute("style","z-index:0;");
            suggestionLink.setAttribute("style","z-index:0;");
            suggestion2Dose.setAttribute("style","z-index:0;");
         }
    }  
}


leftArrow3.addEventListener('click', () => {
    location.href = '/Second-page/second.html';
});

arrow3.addEventListener('click', ()=> {
    if ((document.getElementById('yes-radio-p3').checked || document.getElementById('no-radio-p3').checked) && ((document.getElementById('both').checked || document.getElementById('first+reg').checked || document.getElementById('first-reg').checked) || (document.getElementById('date').checked || document.getElementById('plan').checked || document.getElementById('no-plan').checked))){ 
       location.href = "/Fourth-page/fourth.html" 
    }
});
