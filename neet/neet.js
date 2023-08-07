const myForm = document.querySelector('#my-form');
const phyco = document.getElementById('phyC');
const phyin = document.getElementById('phyI');
const chemco = document.getElementById('chemC');
const chemin = document.getElementById('chemI');
const zooco = document.getElementById('zooC');
const zooin = document.getElementById('zooI');
const botco = document.getElementById('botC');
const botin = document.getElementById('botI');
const msg = document.getElementById('msg');

const mark = document.getElementById('marks');
mark.style.visibility= 'hidden';



myForm.addEventListener('submit', onSubmit);


function addMarks(){
    mark.style.visibility= 'visible';
    let phy = 4*phyco.value - phyin.value;
    let chem = 4*chemco.value - chemin.value;
    let zoo = 4*zooco.value - zooin.value;
    let bot = 4*botco.value - botin.value;
    let total = phy+ chem+ zoo + bot;
    let tablebody = document.getElementById('tablebody');
    let ans = `<tr>
    <td>${phy}</td>
    <td>${chem}</td>
    <td>${zoo}</td>
    <td>${bot}</td>
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