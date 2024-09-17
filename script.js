// Muda a cor do header ao scrollar com o mouse
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 550) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Verifica se os valores dos campos foram todos preenchidos.
document.querySelector('form').addEventListener('submit', function (event) {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos!');
    event.preventDefault();
  }
});

// Envia os dados do formulário via POST sem recarregar a página, exibe uma mensagem de sucesso ou erro, e limpa o formulário após o envio.
document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
      const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
          alert("Mensagem enviada com sucesso!")
          form.reset();
      } else {
          alert('Erro ao enviar. Tente novamente.');
      }
  } catch (error) {
      alert('Erro ao enviar. Tente novamente.');
  }
});
