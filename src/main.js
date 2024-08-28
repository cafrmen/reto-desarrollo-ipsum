const names = document.getElementById('nombre');
const lastName = document.getElementById('apellido');
const email = document.getElementById('email');
const phone = document.getElementById('telefono');
const country = document.getElementById('pais');
const food = document.getElementById('comida');
const artist = document.getElementById('artista');
const place = document.getElementById('lugar');
const color = document.getElementById('color');
const password = document.getElementById('contrasena');
const confirmPassword = document.getElementById('contrasena-confirm');
const button = document.getElementById('button');

// Local Storage variables
let localName = names.value;
let localLastName = lastName.value;
let localEmail = email.value;
let localPhone = phone.value;
let localCountry = country.value;
let localFood = food.value;
let localArtist = artist.value;
let localPlace = place.value;
let localColor = color.value;
let localStorageArray = [];

const validateName = () => {
    const regex = /[A-z]{2,}/g;
    const negativeRegex = /[^A-z]/g;

    if (regex.test(names.value) && !negativeRegex.test(names.value)) {
        names.classList.remove('invalid');
        names.classList.add('valid');
        theButton();
    } else {
        alert('Por favor solo letras y mínimo 2 caracteres');
        names.classList.remove('valid');
        names.classList.add('invalid');
        names.value = '';
    }
}

const validateLastName = () => {
    const regex = /[A-z]{2,}/g;
    const negativeRegex = /[^A-z]/g;

    if (regex.test(lastName.value) && !negativeRegex.test(lastName.value)) {
        lastName.classList.remove('invalid');
        lastName.classList.add('valid');
        theButton();
    } else {
        alert('Por favor solo letras y mínimo 2 caracteres');
        lastName.classList.remove('valid');
        lastName.classList.add('invalid');
        lastName.value = '';
    }
}

const validateEmail = () => {
    const regexOne = /@/;
    const regexTwo = /\./;

    if (regexOne.test(email.value) && regexTwo.test(email.value)) {
        email.classList.remove('invalid');
        email.classList.add('valid');
        theButton();
    } else {
        alert('Por favor escribe un correo válido...') = '* Please provide a valid email!'; 
        email.classList.remove('valid');
        email.classList.add('invalid');
        email.value = '';
    }
}

const validatePhone = () => {
    const regex = /^\+?[0-9]{9,14}$/;

    if (regex.test(phone.value)) {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
        theButton();
    } else {
        alert('Proporciona un número de teléfono válido sin espacios ni guiones');
        phone.classList.remove('valid');
        phone.classList.add('invalid');
        phone.value = '';
    }
}

const validateCountry = () => {
    const regex = /[A-z]{4,}/g;
    const negativeRegex = /[^A-z]/g;

    if (regex.test(country.value) && !negativeRegex.test(country.value)) {
        country.classList.remove('invalid');
        country.classList.add('valid');
        theButton();
    } else {
        alert('Los paises con nombres mas cortos tienen 4 aracteres y son solo letras...');
        country.classList.remove('valid');
        country.classList.add('invalid');
        country.value = '';
    }
}

const validateFood = () => {
    const regex = /[A-z]{2,}/g;
    const negativeRegex = /[^A-z]/g;

    if (regex.test(food.value) && !negativeRegex.test(food.value)) {
        food.classList.remove('invalid');
        food.classList.add('valid');
        theButton();
    } else {
        alert('Por favor comenta un platillo real --- solo letras :)');
        food.classList.remove('valid');
        food.classList.add('invalid');
        food.value = '';
    }
}

const validateArtist = () => {
    if (artist.value.length > 1) {
        artist.classList.remove('invalid');
        artist.classList.add('valid');
        theButton();
    } else {
        alert('Por favor comenta un artista con mínimo 2 caracteres');
        artist.classList.remove('valid');
        artist.classList.add('invalid');
        artist.value = '';
    }
}

const validatePlace = () => {
    const regex = /[A-z]{2,}/g;
    const negativeRegex = /[^A-z]/g;

    if (regex.test(place.value) && !negativeRegex.test(place.value)) {
        place.classList.remove('invalid');
        place.classList.add('valid');
        theButton();
    } else {
        alert('Los lugares son solo letras y tienen mínimo 2 letras...');
        place.classList.remove('valid');
        place.classList.add('invalid');
        place.value = '';
    }
}

const validateColor = () => {
    const regex = /[A-z]{3,}/g;
    const negativeRegex = /[^A-z]/g;

    if (regex.test(color.value) && !negativeRegex.test(color.value)) {
        color.classList.remove('invalid');
        color.classList.add('valid');
        theButton();
    } else {
        alert('El color con nombre mas corto es el "oro" y tiene mínimo 3 letras...');
        color.classList.remove('valid');
        color.classList.add('invalid');
        color.value = '';
    }
}

const checkBothPasswords = () => {
    if (password.value === confirmPassword.value) {
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        theButton();
    } else {
        alert('Las contraseñas no son iguales :(');
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        password.value = '';
        confirmPassword.value = '';
        password.classList.remove('valid');
        password.classList.add('invalid');
    }
}

const validatePassword = () => {
    const capitalRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    const numRegex = /[0-9]/;
    const characterRegex = /[\+|\*|\!|\?|\.|\_|\:|\%!\&|\$|\(|\)|\=|\{|\}|\[|\]|\´|\`|\'|\"|\@|\^|\#|\||\ç|\Ç|\;|\<|\>]/g;

    if ((password.value.length > 6) &&
        capitalRegex.test(password.value) &&
        lowerRegex.test(password.value) &&
        numRegex.test(password.value) &&
        characterRegex.test(password.value)) {
        password.classList.remove('invalid');
        password.classList.add('valid');
    } else {
        alert('Mínimo 7 caracteres incluyendo una Mayúscula, una minúscula, un número y un caracter especial :)');
        password.classList.remove('valid');
        password.classList.add('invalid');
        password.value = '';
    }
}

const validateConfirmationPassword = () => {
    const capitalRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    const numRegex = /[0-9]/;
    const characterRegex = /[\+|\*|\!|\?|\.|\_|\:|\%!\&|\$|\(|\)|\=|\{|\}|\[|\]|\´|\`|\'|\"|\@|\^|\#|\||\ç|\Ç|\;|\<|\>]/g;

    if (confirmPassword.value.length > 6 &&
        capitalRegex.test(confirmPassword.value) &&
        lowerRegex.test(confirmPassword.value) &&
        numRegex.test(confirmPassword.value) &&
        characterRegex.test(confirmPassword.value)) {
        checkBothPasswords();
    } else {
        alert('Mínimo 7 caracteres incluyendo una Mayúscula, una minúscula, un número y un caracter especial :)');
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        confirmPassword.value = '';
    }
}

// deshabilitar botón por falta de campos requeridos
const theButton = () => {
    if (names.value.length > 0 &&
        lastName.value.length > 0 &&
        email.value.length > 0 &&
        phone.value.length > 0 &&
        country.value.length > 0 &&
        food.value.length > 0 &&
        artist.value.length > 0 &&
        place.value.length > 0 &&
        color.value.length > 0 &&
        password.value.length > 0 &&
        confirmPassword.value.length > 0) {
            button.disabled = false;
        }
}

button.addEventListener('click', () => {
    alert('Genial, finalmente lograste responder las preguntas :)')
});