let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.btn');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else
        {
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})

// Sidebar
// const menu = document.querySelector("#toggleBtn");

// menu.addEventListener('click',function(){
//     document.querySelector("#sidebar").classList.toggle("expand")
// })

function toggleButtonOnOtherPage() {
    const isButtonActive = localStorage.getItem('isButtonActive') === 'true';
    const name = localStorage.getItem('name');
    const buttonIds = ['toggleButton','toggleButton1','toggleButton2','toggleButton3','toggleButton4','toggleButton5','toggleButton6','toggleButton7'];

    console.log('isButtonActive:', isButtonActive);
    console.log('name:', name);

    buttonIds.forEach(buttonId=> {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', function () {
            if (isButtonActive) {
                button.classList.toggle(name);
                const isActive = button.classList.contains(name);
                localStorage.setItem('isButtonActive', isActive);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded',toggleButtonOnOtherPage);

function openPage() {
    window.location.href = 'D:/Codes/Prgrms/HTML/Calculator/index1.html';
}