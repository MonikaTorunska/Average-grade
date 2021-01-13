const $subjects = document.querySelector('.subjects');
const $button = document.querySelector('.count');
const $output = document.querySelector('.output');

const subjects = [
  {name: 'Język polski:'},
  {name: 'Matematyka:'},
  {name: 'Język angielski:'},
  {name: 'Fizyka'},
];

subjects.forEach(subject => {
 const element = document.createElement('div');
 element.classList.add('subject');
 const para = document.createElement('p');
 para.innerText = subject.name;
 const score = document.createElement('input');
 score.type = 'number';
 element.appendChild(para);
 element.appendChild(score);
 $subjects.appendChild(element);
});

$button.addEventListener('click', function(){
  const marks = Array.from(document.querySelectorAll('input')).filter(input => {
    return input.value !== '';
  });
  let total = 0;
  for(let i = 0; i < marks.length; i++){
    total += parseFloat(marks[i].value);
  }
  if(marks.length > 0) {
    const avarage = (total/marks.length).toFixed(2);
    displayResult(avarage);
  } else {
    displayError('Wpisz ocenę');
  } 
})

function displayResult(result) {
  $output.textContent = `Średnia ocen: ${result}`;
}
function displayError(error) {
  $output.textContent = error;
}


