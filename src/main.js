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

button.addEventListener('click', (event) => {
    if (names.value.length == 1) {
        event.preventDefault();
        alert('No existe ningún nombre de un caracter...');
        names.value = '';
    }
    if (lastName.value.length == 1) {
        event.preventDefault();
        alert('No existe ningún apellido de un caracter...');
        lastName.value = '';
    }
    if (phone.value.length < 6) {
        event.preventDefault();
        alert('El formato para el teléfono es de 2 dígitos por código de país + "-" + 10 dígitos sin espacios por favor :)');
        phone.value = '';
    }
    if (country.value.length < 4) {
        event.preventDefault();
        alert('El nombre del país mas corto es de 4 caracteres como Perú...');
        country.value = '';
    }
    if (food.value.length == 1) {
        event.preventDefault();
        alert('Dudo que exista un platillo de una sola letra...');
        food.value = '';
    }
    if (artist.value.length == 1) {
        event.preventDefault();
        alert('No existe un nombre de menos de un caracter...');
        artist.value = '';
    }
    if (place.value.length == 1) {
        event.preventDefault();
        alert('No existe ningún lugar de un caracter...');
        place.value = '';
    }
    if (color.value.length < 2) {
        event.preventDefault();
        alert('No existe ningún color con menos de 3 caracteres...');
        color.value = '';
    }
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert('Las contraseñas no son iguales :(');
        password.value = '';
        confirmPassword.value = '';
    }
});