var nome = document.getElementById('nome');
var email = document.getElementById('email');
var assunto = document.getElementById('assunto');
var mensagem = document.getElementById('mensagem');

function btnEnviar() {
  if(nome.value == nome.value.replace(/[^0-9]\w+/g,"")) {
    alert('Digite somente letras!');
    nome.value = "";  
    nome.focus();
  } 
    else if(nome.value == "") {
      alert('Nome não informado!');
      nome.value = "";
      nome.focus();
    }
      else if(email.value == email.value.replace(/\S+@\S+\.\S+/)) {
        alert('Digite um email válido!');
        email.value = "";
        email.focus();
      }
        else if(email.value == "") {
          alert('Digite um email válido');
          email.value = "";
          email.focus();
        }
          else if(assunto.value == "") {
            alert('Digite algum assunto');
            assunto.value = "";
          }
            else  if(mensagem.value == "") {
              alert('Digite alguma Messagem!');
              mensagem.value = "";
            }    
    
}










  



