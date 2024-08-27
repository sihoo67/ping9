document.addEventListener('DOMContentLoaded', () => {
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
});
