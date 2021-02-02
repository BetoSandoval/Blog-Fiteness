// variables
const menuIcono = document.querySelector('#icono');
const verMenu = document.querySelector('#navegacion');
console.log(verMenu);

// Funciones

//Despliega menu
const desplegarMenu = menuIcono.addEventListener('click', () => {
    verMenu.style.display === 'none' ? desplegar() : contraer(); 
});

const desplegar = () => {
    verMenu.style.display = 'inline';
}

const contraer = () => {
    verMenu.style.display = 'none';
}