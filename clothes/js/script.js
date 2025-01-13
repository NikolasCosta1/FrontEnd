class Roupas{
    Produto
    Preco
    Img
    Quantidade 
    Id
    constructor(produto, preco,img, id){
        this.Produto = produto
        this.Preco = preco
        this.Img = img
        this.Id = id
    }
}
const roupas1 = new Roupas ('Moletom Essentials', 700.00, ['../imagens/essentials.webp','../imagens/moletom1.webp',
    '../imagens/moletom2.webp','../imagens/moletom3.webp', 1])
const roupas2 = new Roupas ('Moletom syna', 500.00, ['../imagens/syna1.jpg', '../imagens/syna2.jpg',
    '../imagens/syna3.jpg', '../imagens/syna4.jpg'], 2)
const roupas3 = new Roupas ('Calça Zara', 400.00, ['../imagens/calcaZara.jpg', '../imagens/calcaZara2.jpg',
    '../imagens/calcaZara3.jpg', '../imagens/calcaZara4.jpg'], 3)
const roupas4 = new Roupas ('Camiseta Fear Of God', 300.00, ['../imagens/FearOfGod1.webp', '../imagens/FearOfGod2.jpg',
    '../imagens/FearOfGod3.jpg', '../imagens/FearOfGod4.jpg'], 4)


const btn1 = document.getElementById('imgbtn')

btn1.addEventListener('click', e => {

    window.localStorage.setItem('nome',roupas1.Produto)
    window.localStorage.setItem('valor',roupas1.Preco)
    window.localStorage.setItem('exPreco', roupas1.ExPreco)
    window.localStorage.setItem('id',roupas1.Id)
    for(let i = 0; i < 4; i++){
        window.localStorage.setItem(('img' + (i + 1)) , roupas1.Img[i])
    }
    window.location.replace('./pages/produto.html')
})

const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', e => {

    window.localStorage.setItem('nome',roupas2.Produto)
    window.localStorage.setItem('valor',roupas2.Preco)
    window.localStorage.setItem('exPreco', roupas2.ExPreco)
    window.localStorage.setItem('id',roupas2.Id)
    for(let i = 0; i < 4; i++){
        window.localStorage.setItem(('img' + (i + 1)) , roupas2.Img[i])
    }
    window.location.replace('./pages/produto.html')
})

const btn3 = document.getElementById('btn3')

btn3.addEventListener('click', e => {

    window.localStorage.setItem('nome',roupas3.Produto)
    window.localStorage.setItem('valor',roupas3.Preco)
    window.localStorage.setItem('exPreco', roupas3.ExPreco)
    window.localStorage.setItem('id',roupas3.Id)
    for(let i = 0; i < 4; i++){
        window.localStorage.setItem(('img' + (i + 1)) , roupas3.Img[i])
    }
    window.location.replace('./pages/produto.html')
})

const btn4 = document.getElementById('btn4')

btn4.addEventListener('click', e => {

    window.localStorage.setItem('nome',roupas4.Produto)
    window.localStorage.setItem('valor',roupas4.Preco)
    window.localStorage.setItem('exPreco', roupas1.ExPreco)
    window.localStorage.setItem('id',roupas4.Id)
    for(let i = 0; i < 4; i++){
        window.localStorage.setItem(('img' + (i + 1)) , roupas4.Img[i])
    }
    window.location.replace('./pages/produto.html')
})