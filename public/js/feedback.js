const suggestionDiv = document.getElementById('suggestion-content');

const feedback = async () => {
  const response = await fetch('/api/activity-log', {
    headers: { 'Content-Type': 'application/json' },
  });
  if (responseIndex < 50) {
    const creativeDiv = (document.innerHTML.suggestionDiv =
      +' your world might not feel very colorful today may we suggest doing something creative?');
    ('Maybe write in a journal, create an en plein air painting or go to the museum.');

    const movementDiv = (document.innerHTML.suggestionDiv = 'GET YA ASS UP ');
  }
};

const suggestionDiv = document.getElementById('suggestion-content');

const feedback = async () => {
  const response = await fetch('/api/activity-log', {
    headers: { 'Content-Type': 'application/json' },
  });

  if (responseIndex < 50) {
    const creativeDiv = (document.innerHTML.suggestionDiv =
      +' your world might not feel very colorful today may we suggest doing something creative?');
    ('Maybe write in a journal, create an en plein air painting or go to the museum.');

    const movementDiv = (document.innerHTML.suggestionDiv = 'GET YA ASS UP ');
  }
};
