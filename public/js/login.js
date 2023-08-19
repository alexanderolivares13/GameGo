const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else if (password.length < 8) {
      alert("Invalid password");
    }
  }
};

const signUpHandler = async (event) => {
  event.preventDefault();

  const first = document.querySelector("#first-name").value.trim();
  const last = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email-create").value.trim();
  const password = document.querySelector("#password-create").value.trim();

  if (email && password && first && last) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        first_name: first,
        last_name: last,
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signUpHandler);
