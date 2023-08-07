const myForm = document.querySelector('#my-form');
const quanco = document.getElementById('quanC');
const quanin = document.getElementById('quanI');
const verbco = document.getElementById('verbC');
const verbin = document.getElementById('verbI');
const logco = document.getElementById('logC');
const login = document.getElementById('logI');
const msg = document.getElementById('msg');

const mark = document.getElementById('marks');
mark.style.visibility= 'hidden';

myForm.addEventListener('submit', onSubmit);


 

function addMarks(){
    mark.style.visibility ='visible';
    let quant= 3*quanco.value - quanin.value;
    let verbal = 3*verbco.value - verbin.value;
    let  logical= 3*logco.value - login.value;
    let total = quant+ verbal+ logical;
    let tablebody = document.getElementById('tablebody');
    let ans = `<tr>
    <td>${quant}</td>
    <td>${verbal}</td>
    <td>${logical}</td>
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





