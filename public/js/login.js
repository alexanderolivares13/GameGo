const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert('Login failed');
        }
    }
};

document.addEventListener('submit', loginHandler);