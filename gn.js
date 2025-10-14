document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o envio do formulário

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  const mensagem = document.getElementById("mensagem");

  if (senha !== confirmarSenha) {
    mensagem.textContent = "As senhas não coincidem!";
    mensagem.style.color = "red";
    return;
  }

  // Aqui você pode adicionar lógica para enviar os dados para o servidor, se quiser.

  mensagem.textContent = `Cadastro realizado com sucesso, ${nome}!`;
  mensagem.style.color = "green";

  // Limpa os campos
  document.getElementById("cadastroForm").reset();
});