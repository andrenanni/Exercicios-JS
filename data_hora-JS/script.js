let date = new Date();

let hora = document.querySelector('.hora02');

hora.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();