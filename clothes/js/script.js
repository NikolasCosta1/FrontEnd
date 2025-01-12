class Roupas{
    Produto
    Preco
    Img
    Quantidade 
    Id
    constructor(produto, preco, img, id){
        this.Produto = produto
        this.Preco = preco
        this.Img = img
        this.Id = id
    }
}
const roupas1 = new Roupas ('moletomEssentials', 700, ['../imagens/essentials','../imagens/moletom1',
    '../imagens/moletom2','../imagens/moletom3', 1])
const roupas2 = new Roupas ('moletomsyna', 500, ['../imagens/syna1', '../imagens/syna2',
    '../imagens/syna3', '../imagens/syna4'], 2)
const roupas3 = new Roupas ('calcaZara', 400, ['../imagens/calcaZara', '../imagens/calcaZara2',
    '../imagens/calcaZara3', '../imagens/calcaZara4'], 3)
const roupas4 = new Roupas ('FearOfGod', 300, ['../imagens/FearOfGod1', '../imagens/FearOfGod2',
    '../imagens/FearOfGod3', '../imagens/FearOfGod4'], 4)


const btn1 = document.getElementById('imgbtn')

btn1.addEventListener('click', e => {

    window.localStorage.setItem('nome',roupas1.Produto)
    window.localStorage.setItem('vamor',roupas1.Preco)
    window.localStorage.setItem('id',roupas1.Id)
    for(let i = 0; i < 4; i++){
        window.localStorage.setItem(('img' + (i + 1)) , roupas1.Img[i])
    }
    window.location.replace('./pages/produto.html')
})

const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', e => {

    window.localStorage.setItem('nome',roupas2.Produto)
    window.localStorage.setItem('vamor',roupas2.Preco)
    window.localStorage.setItem('id',roupas2.Id)
    for(let i = 0; i < 4; i++){
        window.localStorage.setItem(('img' + (i + 1)) , roupas2.Img[i])
    }
    window.location.replace('./pages/produto.html')
})

const btn3 = document.getElementById('btn3')

btn3.addEventListener('click', e => {

    window.localStorage.setItem('nome',roupas3.Produto)
    window.localStorage.setItem('vamor',roupas3.Preco)
    window.localStorage.setItem('id',roupas3.Id)
    for(let i = 0; i < 4; i++){
        window.localStorage.setItem(('img' + (i + 1)) , roupas3.Img[i])
    }
    window.location.replace('./pages/produto.html')
})

const btn4 = document.getElementById('btn4')

btn4.addEventListener('click', e => {

    window.localStorage.setItem('nome',roupas4.Produto)
    window.localStorage.setItem('vamor',roupas4.Preco)
    window.localStorage.setItem('id',roupas4.Id)
    for(let i = 0; i < 4; i++){
        window.localStorage.setItem(('img' + (i + 1)) , roupas4.Img[i])
    }
    window.location.replace('./pages/produto.html')
})