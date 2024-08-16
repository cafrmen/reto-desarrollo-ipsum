const password = document.getElementById('contraseña');
const confirmPassword = document.getElementById('contraseña-confirm');
const text = document.querySelector('.show');
const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        text.innerHTML = '* Las contraseñas no son iguales';
        password.value = '';
        confirmPassword.value = '';
    }
});