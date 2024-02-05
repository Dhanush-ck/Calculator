function toggleButton(buttonId) {
    const button = document.getElementById(buttonId);
    // button.classList.toggle('active');
    if (button){
    button.addEventListener('click', function (event) {
        const isButtonActive = button.classList.contains('active');
        const nm = button.getAttribute('name');
        button.classList.toggle('active');
        localStorage.setItem('isButtonActive', String(!isButtonActive));
        localStorage.setItem('name',nm);
        
        });
    }
    }
    toggleButton('toggleButton');
    toggleButton('toggleButton1');
    toggleButton('toggleButton2');
// function toggleButton(buttonId) {
//         const button = document.getElementById(buttonId);
//         button.classList.toggle('active');
//         const isButtonActive = button.classList.contains('active');
//         const name = button.getAttribute('name');
//         localStorage.setItem('isButtonActive', isButtonActive);
//         localStorage.setItem('name', name);
//     }

    // document.getElementsByClassName('switch').addEventListener('click',buttonId);


function homePage() {
    window.location.href = 'D:/Codes/Prgrms/HTML/Calculator/index.html';
}