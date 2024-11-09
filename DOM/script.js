let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');


incrementBtn.addEventListener('click', () => {
   if(counter<25){ counter++;}
    counterValue.textContent = counter;
});


decrementBtn.addEventListener('click', () => {
    if(counter>0){counter--;}
    counterValue.textContent = counter;
});


resetBtn.addEventListener('click', reset);

function reset() {
    counter = 0;
    counterValue.textContent = counter;
}