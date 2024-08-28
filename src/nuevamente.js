document.addEventListener('DOMContentLoaded', () => {
    displayLocalStorageData();
})

const nameData = document.getElementById('name');
const emailData = document.getElementById('email');
const phoneData = document.getElementById('phone');
const countryData = document.getElementById('country');
const foodData = document.getElementById('food');
const artistData = document.getElementById('artist');
const placeData = document.getElementById('place');
const colorData = document.getElementById('color');

let myLocalStorageUserData = [];

const displayLocalStorageData = () => {
    myLocalStorageUserData = JSON.parse(localStorage.getItem('user'));

    nameData.innerText = `Bienvenido: ${myLocalStorageUserData[myLocalStorageUserData.length -1].names} ${myLocalStorageUserData[myLocalStorageUserData.length -1].lastName}`;
    emailData.innerText = `Correo: ${myLocalStorageUserData[myLocalStorageUserData.length -1].email}`;
    phoneData.innerText = `Teléfono: ${myLocalStorageUserData[myLocalStorageUserData.length -1].phone}`;
    countryData.innerText = `País: ${myLocalStorageUserData[myLocalStorageUserData.length -1].country}`;
    foodData.innerText = `Comida: ${myLocalStorageUserData[myLocalStorageUserData.length -1].food}`;
    artistData.innerText = `Artista: ${myLocalStorageUserData[myLocalStorageUserData.length -1].artist}`;
    placeData.innerText = `Lugar: ${myLocalStorageUserData[myLocalStorageUserData.length -1].place}`;
    colorData.innerText = `Color: ${myLocalStorageUserData[myLocalStorageUserData.length -1].color}`;

    // console.log(myLocalStorageUserData);
}

