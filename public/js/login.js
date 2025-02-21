// Function executes when login is clicked -> initiates the API call to login and sends user to their
// dashboard on successful login.
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await API.login(email, password);

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
