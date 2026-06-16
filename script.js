const jjMemo = document.getElementById('jjMemo');
const memoButton = document.getElementById('memoButton');

// 버튼을 누르면 JJ 메모 카드의 문구를 바꿉니다.
memoButton.addEventListener('click', function () {
  jjMemo.textContent = '다음 단계: 선수 목록 만들기';
});
