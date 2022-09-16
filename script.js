const h1 = document.querySelector('.body--H1');
const p = document.getElementsByClassName('body--p');
const p2 = document.getElementById('body--p2');
const input = document.querySelector('.input')



const img = document.createElement('img');
img.setAttribute('src', 'https://img2.rtve.es/i/?w=1600&i=1620920852564.jpg');
console.log(img);

p2.append(img);