const basketHeading = document.querySelector('#basket-heading');

basketHeading.style.color = 'brown';

const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');

for(let i = 0;i < evenFruitItems.length; i++)
  {
    evenFruitItems[i].style.backgroundColor = 'brown';
    evenFruitItems[i].style.color = 'white';
  }
