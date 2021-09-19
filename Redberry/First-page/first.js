// Validations start here!
// Input fields
const firstName = document.getElementById('name');
const surName = document.getElementById('surname');
const email = document.getElementById('email');
const arrow = document.getElementById('arrow');
const form = document.getElementById('form');
// Validation color
const red = '#F44336';


//valid or invalid case
function setInvalid(field, message) {
  field.className = 'invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
  field.nextElementSibling.style.fontSize = "19px";
}

function setValid(field) {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = '';
}

//validate name by length and by alphabet
function validateName(){
  if (!meetLength(firstName,3,255)) return;
  if (!checkIfOnlyLetters(firstName)) return;
  return true;
}
//validate surname length and by alphabet
function validateSurname(){
  if (!meetLength(surName,3,255)) return;
  if (!checkIfOnlyLetters(surName)) return;
  return true;
}
//validate email

function validateEmail() {
  if (checkIfEmpty(email)) return;
  if (!containsCharacters(email,1)) return;
  return true;
}

//validation of length
function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length < maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    setInvalid(
      field,
      `${field.name} უნდა შედგებოდეს ${minLength} ასოსაგან მაინც`
    );
    return false;
  } else {
    setInvalid(
      field,
      `${field.name} არ უნდა იყოს ${maxLength} ასოზე გრძელი`
    );
    return false;
  }
}

//check if only letters

function checkIfOnlyLetters(field) {
  if (/^[a-zA-Zა-ჰ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`);
    return false;
  }
}

//checking if empty

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    setInvalid(field, `${field.name} არ უნდა იყოს ცარიელი`);
    return true;
  } else {
    setValid(field);
    return false;
  }
}

function isEmpty(value) {
  if (value === '') return true;
  return false;
}

//checking email 
function containsCharacters(field, code) {
  let regEx;
  switch (code) {
    case 1:regEx = /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@redberry.ge$/gi
        return matchWithRegEx(regEx, field, 'გთხოვთ დარეგისტრირდეთ რედბერის მეილით(your mail @redberry.ge)');
    default:
      return false;
  }
}

function matchWithRegEx(regEx, field, message) {
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, message);
    return false;
  }
}

//Saving data to local storage
let data = [];
        const addData = ()=>{ 
            let obj = {
                name: firstName.value,
                surname: surName.value,
                mail: email.value
            }
            data.push(obj);
          
            localStorage.setItem('dataList', JSON.stringify(data) );
        }

        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('arrow').addEventListener('click', addData);
        });

//Moving to next page if data is validated
arrow.addEventListener('click', () => {
  // Prevent default behaviour
  //event.preventDefault();
  if (
    validateName() &&
    validateEmail() && validateSurname()
  ) {
    location.href = '/Second-page/second.html';
  }
   else{
    alert("გთხოვთ, დააკმაყოფილოთ ყველა მოთხოვნა");
   }
});

