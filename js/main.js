var button = document.getElementById("enviar");
var dadosParaEnviar = null;
var valido = false;

//Adicionando listener no botao enviar para checar a situação do form nome, e caso validado, preparar para envio o json no endpoint
button.addEventListener(
    "click",
    function(e) {
        var nome = document.getElementById("nome").value.split(" ", 2);
        if (nome.length < 2 || nome[0] == "" || nome[1] == "") {
            alert("O nome deve possuir pelo menos um sobrenome.");
            valido = false;
        } else {
            valido = true;
            alert("Enviado com sucesso.");
            getDados();
            document.getElementById("formCadastro");
            (async() => {
                const rawResponse = await fetch("http://localhost:8080", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dadosParaEnviar)
                });
                const content = await rawResponse.json();

                console.log(content);
            })();
            //limpar os forms pro proximo uso
            document.forms[0].reset();
            zerarCheckboxes();
        }
    },
    false
);

//funçao que valida o telefone para somente numero num input text
function aceitarSomenteNumeros(num) {
    var er = /[^0-9]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        alert("Somente números podem ser aceitos em telefone");
        campo.value = "";
    }
}

//mostrar as midias sociais caso possuir rede social
function mostrarMidiasSociais(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none") document.getElementById(el).style.display = "flex";
}

//esconder as midias sociais
function esconderMidiasSociais(el) {
    zerarCheckboxes();
    document.getElementById(el).style.display = "none";
}

function zerarCheckboxes() {
    midias = [];
    document.getElementById("checkfacebook").checked = false;
    document.getElementById("checklinkedin").checked = false;
    document.getElementById("checkinstagram").checked = false;
}

//passando pra json
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enviar").addEventListener("click", getDados);
});

let midias = [];

function getDados(ev) {
    let dado = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("ddd").value +
            "-" +
            document.getElementById("fone").value,
        comoConheceu: document.getElementById("comoConheceu").value,
        midias: midias.length != 0 ? midias : midias
    };

    if (document.getElementById("temMidiaSocial").value == "s") {

        //checar se o radio midia social está selecionado
        if (
            document.getElementById("checkfacebook").checked == true &&
            valido === true
        ) {
            midias.push("Facebook");
        }
        if (
            document.getElementById("checklinkedin").checked == true &&
            valido === true
        ) {
            midias.push("Linkedin");
        }
        if (
            document.getElementById("checkinstagram").checked == true &&
            valido === true
        ) {
            midias.push("Instagram");
        }
    }
    dadosParaEnviar = dado;
}