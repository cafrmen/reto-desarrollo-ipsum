const email = document.getElementById('correo');
const password = document.getElementById('contra');
const button = document.getElementById('existe');

let localStorageArray = [];

document.addEventListener('DOMContentLoaded', () => {
    displayLocalStorageData();
});

const displayLocalStorageData = () => {
    localStorageArray = JSON.parse(localStorage.getItem('user'));

    button.addEventListener('click', (e) => {
        console.log(localStorageArray);

        for(let i = 0; i < localStorageArray.length; i++) {
            if (localStorageArray[i].email != email.value && localStorageArray[i].password != password.value) {
                e.preventDefault();
                alert('No existe un usuario con esos datos :(');
            } else {
                alert('¡Bienvenido nuevamente!');
            }
        }
    });

    // console.log(localStorageArray);
}



