function toggleButton(buttonId) {
    const button = document.getElementById(buttonId);
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


function homePage() {
    window.location.href = 'D:/Codes/Prgrms/HTML/Calculator/index.html';
}