var entryButton = document.querySelector('.button1');
var $modal = document.querySelector('.modal');
var submitButton = document.querySelector('.button2');
var $background = document.querySelector('.background');
var $weekdayBox = document.querySelector('#weekdays');
var $schedule = document.querySelector('.schedule');

console.log('yep:', $schedule.textContent);

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

$weekdayBox.addEventListener('click', showView);
function showView(e) {
  if (e.path[0].textContent === e.target.textContent) {
    $schedule.textContent = 'Scheduled events for ' + e.path[0].textContent;
  }

}

var $form = document.querySelector('#form');

$form.addEventListener('submit', function (e) {

});
