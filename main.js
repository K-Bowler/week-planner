var entryButton = document.querySelector('.button1');
var $modal = document.querySelector('.modal');
var submitButton = document.querySelector('.button2');
var $background = document.querySelector('.background');
console.log('entry button:', entryButton);
console.log('modal:', $modal);
console.log('submit button:', submitButton);
console.log('background:', $background);

entryButton.addEventListener('click', showModal);

function showModal(e) {
  console.log('e:', e);
}
