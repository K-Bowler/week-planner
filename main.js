var entryButton = document.querySelector('.button1');
var $modal = document.querySelector('.modal');
var submitButton = document.querySelector('.button2');
var $background = document.querySelector('.background');

entryButton.addEventListener('click', showModal);
submitButton.addEventListener('click', showModal);

function showModal() {
  if ($modal.className === 'modal hidden') {
    $modal.classList.remove('hidden');
  } else {
    $modal.classList.add('hidden');
  }
  if ($background.className === 'modal-bg-off background') {
    $background.classList.remove('modal-bg-off');
    $background.classList.add('modal-bg-on');
  } else {
    $background.classList.add('modal-bg-off');
    $background.classList.remove('modal-bg-on');
  }
}
