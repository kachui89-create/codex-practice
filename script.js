const message = document.getElementById('message');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function () {
  message.textContent = '안녕하세요 JJ!';
});
