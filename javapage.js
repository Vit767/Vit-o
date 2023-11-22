<script>
    function redirecionarParaConfirmacao() {
        setTimeout(function() {
            window.location.href = "pagina_de_confirmacao.html";
        }, 1000)
    }
</script>



function verificarRespostas() {
    // ... Seu código para verificar as respostas e determinar se estão corretas ou não

    if (arraysIguais(respostasSelecionadas, respostasCorretas)) {
        document.querySelector(".mensagem").classList.remove("mensagem"); // Remove a classe "mensagem"
    } else {
        alert("Algumas respostas estão incorretas. Tente novamente.");
    }
}