const btnYes = document.querySelector('#btnYes');

btnYes.addEventListener('click', function(){
    swal.fire('Gracias bb', 'Sabia que ibas a decir que si!', 
    'success');
});

const btnNO = document.querySelector('#btnNo');

btnNO.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    btnNO.style.setProperty('top', randomY + '%');
    btnNO.style.setProperty('left', randomX + '%');
    btnNO.style.setProperty('transform', `translate()
    (-${randomX}%, -${randomY}%)`);
})