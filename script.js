let currentCard = 0;
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
});

prevBtn.addEventListener('click', () => {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    showCard(currentCard);
});

// 초기 카드 표시
showCard(currentCard);
