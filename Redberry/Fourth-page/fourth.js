
const form = document.getElementById('form4');
const submit = document.getElementById('submit');
const leftArr = document.getElementById('left-arrow4');

form.addEventListener('submit', (e) => {
   let radios = [];
   let radios2 = [];
   let ans;

    radios = form.querySelectorAll('input[name=online]');
    radios2 = form.querySelectorAll('input[name=ofisi]');

    for(let i=0; i<radios.length; i++){
       let k = radios[i].id;
       if (document.getElementById(k).checked){
           for (let j=0; j<radios2.length; j++){
               let p = radios2[j].id;
               if (document.getElementById(p).checked){
                   e.preventDefault();
                   location.href ="/Thank-you/thank.html"
                   ans = true;
               }
           } 
       }
    }

    if (ans!==true){
        e.preventDefault();
    }
});

leftArr.addEventListener('click',()=> location.href="/Third-page/third.html");
 
