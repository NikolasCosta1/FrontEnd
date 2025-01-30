const roupa = document.querySelector("#roupa")
const valor = document.querySelector("#valor")
const exPreco = document.querySelector("#exPreco")
const imagens = document.getElementsByClassName('img')
const imgGrande = document.getElementById('img4')

window.addEventListener('load', e =>{
    roupa.innerHTML = window.localStorage.getItem('nome');
    const valorComCifrao = `$${window.localStorage.getItem('valor')}`;
    valor.innerHTML = valorComCifrao;
    const precoAntigo = parseFloat(window.localStorage.getItem('valor')) * 1.4; 
    const precoAntigoComCifrao = `$${precoAntigo.toFixed(2)}`;
    document.getElementById('exPreco').innerText = precoAntigoComCifrao;

    Array.from(imagens).forEach((element , i) => {
        let imag = document.getElementById('img' + (i + 1));
        let url = window.localStorage.getItem('img' + (i + 1));
        if (imag && url) {
            imag.src = url;
        }
    })
})

let grandona = window.localStorage.getItem('img4')
for(let i = 0; i < 3; i++){
    let imagem = document.getElementById('img' + (i + 1));

    imagem.addEventListener('click', e =>{
        imgGrande.src = imagem.src
        imagem.src = grandona
        grandona = imgGrande.src
    })
}

let botaoCarrinho = document.getElementById('btnCarrinho')

botaoCarrinho.addEventListener('click', e =>{
    if(JSON.parse(window.localStorage.getItem('array')) == undefined){
        window.localStorage.setItem('array', JSON.stringify([]))
    }


let arrayGet = JSON.parse(window.localStorage.getItem('array'));
let quantidade = Number(document.getElementById('iquantidade').value);

if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
}

let nomeProduto = window.localStorage.getItem('nome');
let valorUnitario = parseFloat(window.localStorage.getItem('valor'));

let produtoExistente = arrayGet.find(item => item.nome == nomeProduto);

if(produtoExistente){
    produtoExistente.quantidade += quantidade;
    produtoExistente.valor = valorUnitario * produtoExistente.quantidade;
}else{
    let objeto = {
        nome: nomeProduto,
        valor: valorUnitario * quantidade,
        quantidade: quantidade,
        valorUnitario: valorUnitario
    };
    arrayGet.push(objeto);
}

window.localStorage.setItem('array', JSON.stringify(arrayGet))

console.log(arrayGet)

alert('Produto adicionado ao carrinho')
})

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); 

        const nome = document.getElementById("inome").value;
        const email = document.getElementById("iemail").value;
        const telefone = document.getElementById("itelefone").value;

        const formData = {
            nome: nome,
            email: email,
            telefone: telefone
        };

        try {
            const response = await fetch("https://apigenerator.dronahq.com/api/KB97Irwb/data", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar dados.");
            }

            alert("Cadastro realizado com sucesso!");
            form.reset(); 

        } catch (error) {
            alert("Ocorreu um erro. Tente novamente mais tarde.");
            console.error("Erro:", error);
        }
    });
});