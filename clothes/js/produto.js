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
})

console.log(window.localStorage);
