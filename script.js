const listItems = document.querySelectorAll('li');
const closeButton = document.getElementById('close');
const openButton = document.getElementById('open');
const container = document.querySelector('.container');

// Increment the indentation dynamically
listItems.forEach((el, i) => {
  el.style.paddingLeft = `${(i + 1) * 20}px`;
});

closeButton.addEventListener('click', function () {
  container.classList.remove('show-nav');
});

openButton.addEventListener('click', function () {
  container.classList.add('show-nav');
});

//const circle = openButton.closest('.circle'); // Find the closest .circle parent
