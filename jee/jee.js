const myForm = document.querySelector('#my-form');
const phyco = document.getElementById('phyC');
const phyin = document.getElementById('phyI');
const chemco = document.getElementById('chemC');
const chemin = document.getElementById('chemI');
const mathco = document.getElementById('mathC');
const mathin = document.getElementById('mathI');
const msg = document.getElementById('msg');

const mark = document.getElementById('marks');
mark.style.visibility= 'hidden';

myForm.addEventListener('submit', onSubmit);


 

function addMarks(){
    mark.style.visibility ='visible';
    let phy = 4*phyco.value - phyin.value;
    let chem = 4*chemco.value - chemin.value;
    let math = 4*mathco.value - mathco.value;
    let total = phy+ chem+ math;
    let tablebody = document.getElementById('tablebody');
    let ans = `<tr>
    <td>${phy}</td>
    <td>${chem}</td>
    <td>${math}</td>
    <td>${total}</td>
    </tr> `;
    tablebody.innerHTML = ans;
}


function onSubmit(e){
    const inputf = document.querySelectorAll('.inputField');
    e.preventDefault();
    let check = false;
    for(let input of inputf){
       if(input.value == ''){
           check= true;
       }
    }
    if(check){
       msg.classList.add('error');
       msg.innerHTML ='Please enter all fields';
       setTimeout(()=> msg.remove(), 3000);
    }
    else{
       addMarks();
    }
}





