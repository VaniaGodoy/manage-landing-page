 // carrossel de testemunha
let testimonials = Array.from(document.querySelectorAll('.avatar__conteudo'));
let index = 0;

function rotateTestimonials() {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = (i >= index && i < index + 3) ? 'block' : 'none';
  });
  index = (index + 1) % (testimonials.length - 2);
}

rotateTestimonials();
setInterval(rotateTestimonials, 3000); 

 // Valida formulario
function validateForm() {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const emailValue = emailInput.value.trim();

  // Verifica se o campo está vazio
  if (emailValue === "") {
      errorMessage.textContent = "O campo de e-mail não pode estar vazio.";
      errorMessage.style.display = "block";
      return false;
  }

  // Verifica se o e-mail está no formato correto
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailValue)) {
      errorMessage.textContent = "Por favor, insira um e-mail válido.";
      errorMessage.style.display = "block";
      return false;
  }

  // Caso tudo esteja correto, você pode enviar o formulário ou fazer outras ações
  errorMessage.style.display = "none";
  alert("Formulário enviado com sucesso!");
}
