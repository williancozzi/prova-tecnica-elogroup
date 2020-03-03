    //adicionando listener no botao enviar para checar a situação do form nome
    var button = document.getElementById("enviar");
    button.addEventListener("click", function(e) {
        var nome = document.getElementById('nome').value.split(' ');
        if(nome.length > 1) {
            alert('Enviado com sucesso.');
            document.getElementById('formCadastro').submit();
        } else {
            alert('O nome deve possuir pelo menos um sobrenome.');
        }
    }, false);

function aceitarSomenteNumeros(num) {
    var er = /[^0-9]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        alert('Somente números podem ser aceitos em telefone');
      campo.value = "";
    }
}

function mostrarMidiasSociais(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none" )
      document.getElementById(el).style.display = 'block';
    else
      document.getElementById(el).style.display = 'none';
  }

  function confirmar(){

  }