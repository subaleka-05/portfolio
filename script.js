document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  document.getElementById('response').innerHTML = `
    <p>Thank you, ${name}. I will get back to you at ${email} soon!</p>
  `;


  e.target.reset();
});