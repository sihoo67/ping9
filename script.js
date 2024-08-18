let copyAttemptCount = 0;
const MAX_ATTEMPTS = 5;

// 카드 전환 스크립트
let currentCard = 0;
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('active', 'exit-left', 'exit-right');

        if (i === currentCard) {
            card.classList.add(index > currentCard ? 'exit-left' : 'exit-right');
        }

        if (i === index) {
            setTimeout(() => card.classList.add('active'), 500);
        }
    });

    currentCard = index;
}

nextBtn.addEventListener('click', () => {
    const nextIndex = (currentCard + 1) % cards.length;
    showCard(nextIndex);
});

prevBtn.addEventListener('click', () => {
    const prevIndex = (currentCard - 1 + cards.length) % cards.length;
    showCard(prevIndex);
});

// 초기 카드 표시
showCard(currentCard);

// 복사 방지 메시지
document.addEventListener('copy', (event) => {
    event.preventDefault(); // 기본 복사 동작을 방지합니다.
    copyAttemptCount++;

    // 화면에 메시지 표시
    const alertDiv = document.createElement('div');
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.padding = '10px 20px';
    alertDiv.style.backgroundColor = '#333';
    alertDiv.style.color = '#fff';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.5)';
    alertDiv.innerText = '복사 금지입니다.';
    
    // 기존 메시지 제거
    const existingAlert = document.querySelector('.copy-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    alertDiv.classList.add('copy-alert');
    document.body.appendChild(alertDiv);

    // 2초 후 메시지 자동으로 사라지게 하기
    setTimeout(() => {
        alertDiv.remove();
    }, 2000);
});
