const secondQuestion = document.getElementById('second-question');
const thirdQuestionOp1 = document.getElementById('third-question-op1');
const thirdQuestionOp2 = document.getElementById('third-question-op2');
const arrow2 = document.getElementById('arrow2');
const form2 = document.getElementById("form2");
const leftArrow = document.getElementById('left-arrow');


let radios1 = form2.querySelectorAll('input[name=gadatanili]');
let radios2 = form2.querySelectorAll('input[name="antibodies"]');
let date = form2.querySelectorAll('input[type=date]');
let number = form2.querySelectorAll('input[type=number]');

// local storage
let data = [];
let data1 = [];
let data2 = [];

function addData () {
for (let i=0; i<radios1.length; i++){
   let k = radios1[i].id;    
   if (document.getElementById(k).checked){
       data1 = [];
       data1.push(document.getElementById(k).value);
    }
}   
  
for (let i=0; i<radios2.length; i++){
   let k = radios2[i].id;    
   if (document.getElementById(k).checked){
       data2 = [];
       data2.push(document.getElementById(k).value);
    }
}
      data.push(data1);
      data.push(data2);
      localStorage.setItem('dataList2', JSON.stringify(data) );
}

document.addEventListener('DOMContentLoaded', ()=>{
         document.getElementById('arrow2').addEventListener('click', addData);
     });



function check(){
    if(document.getElementById('yes-radio1').checked){
        secondQuestion.setAttribute("style","z-index:2;");
    } 
       else {
            secondQuestion.setAttribute("style","z-index:0;");
            thirdQuestionOp1.setAttribute("style","z-index:0");
            thirdQuestionOp2.setAttribute("style","z-index:0");
            if (document.querySelector('input[type=radio][name=antibodies]:checked')!== null){
                let radio = document.querySelector('input[type=radio][name=antibodies]:checked');
                radio.checked = false;
            }
        }     
}

function check2(){
   if(document.getElementById('yes-radio2').checked){
        thirdQuestionOp1.setAttribute("style","z-index:2;");
        thirdQuestionOp2.setAttribute("style","z-index:0");
    } 
    else if(document.getElementById('no-radio2').checked)
    {
        thirdQuestionOp1.setAttribute("style","z-index:0");
        thirdQuestionOp2.setAttribute("style","z-index:2");
    }      
}

arrow2.addEventListener('click', () =>{
    if (document.getElementById('no-radio1').checked == true || document.getElementById('now-radio1').checked == true){
        location.href = "/Third-page/third.html";
    } else 
        if (document.getElementById('yes-radio1').checked == true){
          if (document.getElementById('yes-radio2').checked == true){
             if (document.getElementById('antib-date').value.length > 0 && document.getElementById('antib-num').value>=0){
                location.href = "/Third-page/third.html";
             }
          }
          if (document.getElementById('no-radio2').checked == true){
            if (document.getElementById('ill-date').value.length > 0){
                location.href = "/Third-page/third.html";
            }
        } 
    }
});

leftArrow.addEventListener('click', () => {
        location.href = "/First-page/first.html";
});



