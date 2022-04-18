let answer = document.querySelector('#api-response');
let option;
const triviaOption = document.querySelector('#trivia');
const mathOption = document.querySelector('#math');
const dateOption = document.querySelector('#date');
const yearOption = document.querySelector('#year');

function getAPIresponse() {
  let number = document.querySelector('.numero').value;
  if (number != '') {

    if (triviaOption.checked) option = '';
    if (mathOption.checked) option = 'math';
    if (dateOption.checked) option = 'date';
    if (yearOption.checked) option = 'year';

    const url = `http://numbersapi.com/${number}/${option}`;
    fetch(url)
      .then(response => response.text())
        .then(data => {
         answer.innerHTML = data
         answer.style.marginTop = '110px'
      });
  }
  else alert('Digite um número')
}