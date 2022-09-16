$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Insira seu nome',
            email: 'Insira seu email',
            telefone: 'Insira seu telefone',
            cpf: 'Insira seu CPF',
            endereco: 'Insira se endereço',
            cep: 'Insira seu CEP'
        }
    });
});