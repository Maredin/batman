var btn_info = document.getElementById('btn_info');

var close = document.getElementById('close');
var hidden = document.getElementById('hidden');

var block1 = document.getElementById('block1');
var hidden1 = document.getElementById('hidden1');

var block2 = document.getElementById('block2');
var hidden2 = document.getElementById('hidden2');

var block3 = document.getElementById('block3');
var hidden3 = document.getElementById('hidden3');

var kov_question1 = document.getElementById('kov_question1');
var kov_question2 = document.getElementById('kov_question2');
var kov_question3 = document.getElementById('kov_question3');


btn_info.addEventListener('click', function(e) {
   hidden.style.display = hidden.style.display === 'block' ? 'none' : 'block';
    close.innerHTML = close.innerHTML === 'Свернуть ' ? close.innerHTML = 'Развернуть ' : close.innerHTML = 'Свернуть ';
        kov_info.style.transform = kov_info.style.transform === 'scale(-1)' ? 'scale(1)' : 'scale(-1)';
});




//----BURGER ----

var show_menu = document.getElementById('show-menu');
var hidden_menu = document.getElementById('hidden-menu');

var burger1 = document.getElementById('burger1');
var burger2 = document.getElementById('burger2');
var burger3 = document.getElementById('burger3');


show_menu.addEventListener('click', function(e){
   hidden_menu.style.left = hidden_menu.style.left === '0px' ? '-75%' : '0px';
    burger2.style.display = burger2.style.display === 'none' ? 'block' : 'none';
    burger1.style.transform = burger1.style.transform === 'translateY(10px) rotate(-45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(10px) rotate(-45deg)';
    burger3.style.transform = burger3.style.transform === 'translateY(3px) rotate(45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(3px) rotate(45deg)';

});
