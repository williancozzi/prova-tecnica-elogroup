//adicionando listener no botao enviar para checar a situação do form nome
var button = document.getElementById("enviar");
button.addEventListener("click", function (e) {
    var nome = document.getElementById('nome').value.split(' ', 2);
    if ((nome.length < 2) || (nome[0] == '') || (nome[1] == '')) {
        alert('O nome deve possuir pelo menos um sobrenome.');
    } else {
        document.getElementById('formCadastro');
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

//mostrar as midias sociais caso possuir rede social
function mostrarMidiasSociais(el) {

    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
}

//esconder as midias sociais 
function esconderMidiasSociais(el) {
    document.getElementById('checkfacebook').checked = false;
    document.getElementById('checklinkedin').checked = false;
    document.getElementById('checkinstagram').checked = false;
    document.getElementById(el).style.display = 'none';
}

//passando pra json 
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('enviar').addEventListener('click', getDados);
});

let midias = [];

const getDados = (ev) => {

    ev.preventDefault();  //parar o submit default do form 

    if (document.getElementById('temMidiaSocial').value == 's') {
        
        if (document.getElementById('checkfacebook').checked == true) {
            midias.push('Facebook');
        }
        if (document.getElementById('checklinkedin').checked == true) {
            midias.push('Linkedin');
        }
        if (document.getElementById('checkinstagram').checked == true) {
            midias.push('Instagram');
            
        }
    }

    let dado = {
        nome: document.getElementById('nome').value,
        ddd: document.getElementById('ddd').value,
        fone: document.getElementById('fone').value,
        comoConheceu: document.getElementById('comoConheceu').value,
        midias: midias.length != 0 ? midias : null
    }

    // if (document.getElementById('temMidiaSocial').value == 's'){
    //     dad
    // }

    //limpar os forms pro proximo uso
    document.forms[0].reset();
    midias = [];
    console.log(dado);

    console.log(document.getElementById('temMidiaSocial').value);
    let pre = document.querySelector('#msg pre');
    //pre.textContent = '\n' + JSON.stringify(dados, '\t', 2);

    //salvando localmente
    //localStorage.setItem('listaDados', JSON.stringify(dados));
}

//as checkbox de midias sociais devem ser enviadas em um Array se possuir midia social




