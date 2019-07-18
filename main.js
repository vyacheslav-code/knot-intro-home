const inputLogo = document.getElementById('inputLogo');
const inputMoire = document.getElementById('inputMoire');
const logo = document.querySelector('.moire-mask');
const moire = document.querySelector('.moireFront');

inputLogo.addEventListener('mousemove', function () {
    logo.style.width = `${inputLogo.value}%`
});

inputMoire.addEventListener('mousemove', function () {
    moire.style.left = `${-50+inputMoire.value*0.5}%`;
})