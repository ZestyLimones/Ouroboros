var likeButtons = document.querySelectorAll('.likeBtn');

likeButtons.forEach((element) => {
  switch (element.dataset.like) {
    case 'false':
      element.src = '/images/notliked.png';
      break;
    case 'true':
      element.src = '/images/liked.png';
      break;
  }
});

function changeImage(event) {
  if (event.target.src.match('/images/liked.png')) {
    event.target.src = '/images/notliked.png';
    const response = fetch(`/api/activity-log/change-like/${event.target.id}`, {
      method: 'PUT',
      body: JSON.stringify({ liked: false }),
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    event.target.src = '/images/liked.png';
    const response = fetch(`/api/activity-log/change-like/${event.target.id}`, {
      method: 'PUT',
      body: JSON.stringify({ liked: true }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
