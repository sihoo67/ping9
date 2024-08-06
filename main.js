document.addEventListener('DOMContentLoaded', () => {
    const addReviewBtn = document.getElementById('add-review-btn');
    const reviewInput = document.getElementById('review-input');
    const reviewsList = document.getElementById('reviews-list');

    // 기존 리뷰 가져오기
    fetch('/reviews')
      .then(response => response.json())
      .then(data => {
        data.forEach(review => {
          const listItem = document.createElement('li');
          listItem.textContent = review.review;  // 수정된 부분
          reviewsList.appendChild(listItem);
        });
      })
      .catch(error => console.error('리뷰를 불러오는 중 오류 발생:', error));

    // 리뷰 추가 버튼 클릭 이벤트
    addReviewBtn.addEventListener('click', () => {
      const reviewText = reviewInput.value.trim();

      if (reviewText) {
        fetch('/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ review: reviewText })  // 수정된 부분
        })
        .then(response => response.json())
        .then(data => {
          const listItem = document.createElement('li');
          listItem.textContent = data.review;  // 수정된 부분
          reviewsList.appendChild(listItem);
          reviewInput.value = ''; // 입력 필드 초기화
        })
        .catch(error => console.error('리뷰를 추가하는 중 오류 발생:', error));
      } else {
        alert('리뷰를 입력하세요.');
      }
    });
});
