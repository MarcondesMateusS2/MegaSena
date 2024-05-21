var numerosMegaSena = document.getElementById('divNumerosMegaSena');
var numerosEscolhidos = [];
var botaoJogar = document.getElementById('botaojogar');
botaoJogar.disabled = true;  // Desabilitar o botão inicialmente

numerosMegaSena.addEventListener('click', function(event){
    var numero = event.target.innerHTML;
    if (numerosEscolhidos.includes(numero)) {
        alert('Este número já foi escolhido.');
        return;
    }

    event.target.style.background = '#FF0000';
    numerosEscolhidos.push(numero);

    if (numerosEscolhidos.length > 6) {
        alert('Você pode escolher no máximo 6 números');
        numerosEscolhidos.pop(); // Remover o número extra
        event.target.style.background = '';  // Resetar a cor de fundo
        return;
    }

    validaNumerosEscolhidos();
});

function validaNumerosEscolhidos() {
    if (numerosEscolhidos.length == 6) {
        botaoJogar.disabled = false;
    }
}
