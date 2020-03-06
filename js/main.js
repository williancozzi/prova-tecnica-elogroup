//adicionando listener no botao enviar para checar a situação do form nome
var button = document.getElementById("enviar");
    button.addEventListener("click", function(e) {
        var nome = document.getElementById('nome').value.split(' ', 2);
        if((nome.length < 2) || (nome[0] == '') || (nome[1] == '')) {
            alert('O nome deve possuir pelo menos um sobrenome.');
        } else {
            document.getElementById('formCadastro').submit();
            alert('Enviado com sucesso.');
        }
    }, false);

//funçao que valida o telefone para somente numero num input text
function aceitarSomenteNumeros(num) {
    
    var er = /[^0-9]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        alert('Somente números podem ser aceitos em telefone');
      campo.value = "";
    }
}


//mostrar as midias sociais caso possui rede social
function mostrarMidiasSociais(el) {
    
    var display = document.getElementById(el).style.display;
    if (display == "none" )
        document.getElementById(el).style.display = 'block';
}

//esconder as midias sociais 
  function esconderMidiasSociais(el){
    document.getElementById(el).style.display = 'none';
}