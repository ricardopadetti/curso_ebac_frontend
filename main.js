const form = document.getElementById('form');
let a = document.getElementById('numero-a');
let b = document.getElementById('numero-b');
const containerMensagem = document.querySelector('.message');
const containerMensagemErro = document.querySelector('.message-error');

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const mensagemPositiva = `O número ${b.value} é maior que ${a.value}!!!`;
    const mensagemNegativa = `O número ${b.value} não é maior que ${a.value}, tente de novo.`;

    if (b.value > a.value) {
        containerMensagem.innerHTML = mensagemPositiva;
        containerMensagem.style.display = 'block';
        containerMensagemErro.style.display = 'none';

        a.value = '';
        b.value = '';
    } else {
        containerMensagemErro.innerHTML = mensagemNegativa;
        containerMensagemErro.style.display = 'block';
        containerMensagem.style.display = 'none';

        a.value = '';
        b.value = '';
    }
})


