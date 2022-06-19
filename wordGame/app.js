// 함수형 프로그래밍 도전

const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
const $startBtn = document.querySelector('.start-btn');

let nowWord;
let inputWord;

// 조건 만족 시 게임 진행
function playGame() {
    nowWord = inputWord;
    $word.innerText = nowWord;
    $input.value = '';
    $input.focus();
    handleCount();
}

// 카운팅
const num = Number(prompt('몇 명에서 하니?'));
let count = 1;

function handleCount() {
    count + 1 > num ? count = 1 : count++;
    $order.innerText = count;
}

// 끝말을 잇지 못하면 경고 표시
function showErr() {
    alert('wrong');
}

// 동적으로 받는 이유 (클릭 시 발생하는 로직 이전에 비교해야한다.)
$input.addEventListener('input', e => {
    inputWord = e.target.value;
})

// 시작 버튼 클릭
$startBtn.addEventListener('click', () => {
    !nowWord || nowWord[nowWord.length - 1] === inputWord[0] ? playGame() : showErr();
})