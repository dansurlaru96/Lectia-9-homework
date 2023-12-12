let nickname = 'ProMusic';
console.log(nickname);
nume = 'Daniel';
console.log(nume);

const flex=document.getElementsByClassName('cardContent');
console.log(flex);



for (let i=0; i<titleContent.length; i++) {
    console.log(titleContent[i].textContent);
    console.log(menubar[i]);
} 

for (let i=0; i<=4; i++) {
    console. log(i);
}

let descriere = document.querySelector('.textH3');
let carduri = document.querySelectorAll('.cardContent');
menu_items = ['Computer Apple Mac mini m2', 'Soundcard', 'Studio monitors', 'Condenser mic', 'Controller MIDI', 'DAW Controller']

let titluri = document.querySelectorAll('.textH3');
function incarcaMeniu() {
    for (let i=0; i<titluri.length; i++) {
        titluri[i].cardContent = menu_items[i];
    }
}

// Nu se primeste 