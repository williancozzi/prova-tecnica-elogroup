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

    document.getElementById(el).style.display = 'none';
}

//passando pra json 
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('enviar').addEventListener('click', getDados);
});
let dados = [];

const getDados = (ev) => {

    ev.preventDefault();  //parar o submit default do form 
    let dado = {
        nome: document.getElementById('nome').value,
        ddd: document.getElementById('ddd').value,
        fone: document.getElementById('fone').value,
        comoConheceu: document.getElementById('comoConheceu').value,
        midias: document.getElementById('temMidiaSocial').checked ? 's' : 'n',
        facebook: document.getElementById('checkfacebook').checked ? 's' : 'n',
        linkedin: document.getElementById('checklinkedin').checked ? 's' : 'n',
        instagram: document.getElementById('checkinstagram').checked ? 's' : 'n'
    }

    //limpar os forms pro proximo uso
    dados.push(dado);
    document.forms[0].reset();

    console.log('added', { dados });
    let pre = document.querySelector('#msg pre');
    //pre.textContent = '\n' + JSON.stringify(dados, '\t', 2);

    //salvando localmente
    localStorage.setItem('listaDados', JSON.stringify(dados));
}

//as checkbox de midias sociais devem ser enviadas em um Array se possuir midia social
let socialMedia;
let arrSocialMedia = [];

if (arrSocialMedia.value) {

    socialMedia = document.querySelectorAll("#formCadastro [name=temMidiaSocial]:checked");
    for (let i = 0; i < socialMedia.length; i++) {
        arrSocialMedia.push(socialMedia[i].id);
    }
}