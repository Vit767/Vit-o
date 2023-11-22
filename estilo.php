<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];

    // Configurar os detalhes do email
    $para = "fodavic84@gmail.com";
    $assunto = "Solicitação de Certificado";
    $mensagem = "Nome do Aluno: " . $nome;

    // Enviar o email
    mail($para, $assunto, $mensagem);

    echo "O nome foi enviado com sucesso para criação do certificado!";
}
?>