// app.js — small, student-friendly JS (no frameworks)
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('cName');
    const email = document.getElementById('cEmail');
    const msg = document.getElementById('cMsg');
    const status = document.getElementById('formStatus');

    // Simple validation
    if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
      status.textContent = 'Please fill in all fields.';
      status.className = 'alert alert-warning mt-3';
      status.setAttribute('role','status');
      return;
    }

    // For the assignment: we don't actually send anything (no backend).
    status.textContent = 'Saved! (Demo form — you can email me using the link above.)';
    status.className = 'alert alert-success mt-3';
    status.setAttribute('role','status');

    form.reset();
  });
})();
