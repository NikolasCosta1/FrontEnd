window.addEventListener('load', e => {
    let total = 0;
    let vazio = true;
    let carrinhoDiv = document.getElementById('carrinho');
    let array = JSON.parse(window.localStorage.getItem('array')) || [];

    for (let i = 0; i < array.length; i++) {
        let produto = array[i];

        if (produto.quantidade > 0) {
            vazio = false;
            let containerProduto = document.createElement('div');
            containerProduto.className = 'produto-container';

            let img = document.createElement('img');
            img.className = 'produto-imagem';

            switch (produto.nome) {
                case 'Moletom Essentials':
                    img.src = '../imagens/essentials.webp';
                    break;
                case 'Moletom syna':
                    img.src = '../imagens/syna1.jpg';
                    break;
                case 'Calça Zara':
                    img.src = '../imagens/calcaZara.jpg';
                    break;
                case 'Camiseta Fear Of God':
                    img.src = '../imagens/FearOfGod1.webp';
                    break;
                default:
                    break;
            }

            let text = document.createElement('p');

            let nome = document.createElement('span');
            nome.className = 'produto-nome';
            nome.innerText = produto.nome;

            let qnt = document.createElement('span');
            qnt.className = 'produto-quantidade';
            qnt.innerText = `${produto.quantidade}x`;

            let preco = document.createElement('span');
            preco.className = 'produto-preco';
            preco.innerText = `R$ ${Number(produto.valor).toFixed(2)}`;

            text.appendChild(img);
            text.appendChild(nome);
            text.appendChild(qnt);
            text.appendChild(preco);

            carrinhoDiv.appendChild(text);
            total += Number(produto.valor);
        }
    }

    let totalDiv = document.getElementById('total');
    if (!vazio) {
        totalDiv.innerHTML = `Total a pagar: R$ ${total.toFixed(2)}`
    }

    if (!vazio) {
        let apagarCarrinho = document.getElementById('apagar');
        let apagar = document.createElement('button');
        apagar.innerHTML = 'Limpar Carrinho';
        apagarCarrinho.appendChild(apagar);

        apagar.addEventListener('click', () => {
            carrinhoDiv.innerHTML = '';
            totalDiv.innerHTML = '';
            window.localStorage.setItem('array', JSON.stringify([]));
            location.reload();
        });
    }
});