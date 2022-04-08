var entryButton = document.querySelector('.button1');
var $modal = document.querySelector('.modal');
var submitButton = document.querySelector('.button2');
var $background = document.querySelector('.background');
var $weekdayBox = document.querySelector('#weekdays');

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

function scheduledDay(e) {
  // for (var i = 0; i < $weekdayBox.length; i++) {
  //   if ($weekdayBox.getElementById[i] ===
  // }
  console.log(e);
  console.log(e.target);
}

$weekdayBox.addEventListener('click', scheduledDay);

// <tr>
//   <td>10:00</td>
//   <td>Practice algorithms</td>
// </tr>
// <tr>
//   <td>12:00</td>
//   <td>Go For A Run</td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
// </tr>

var $entryForm = document.querySelector('form');

$entryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target);

});
