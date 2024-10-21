const form = document.getElementById('lojaForm')

function recuperarValores() {
    const campos = ['nome', 'endereco', 'dias', 'horaAbertura', 'horaFechamento'];
    campos.forEach(campo => {
        const valor = localStorage.getItem(campo);
        if (valor) {
            const input = document.getElementById(campo);
            if (campo === 'dias') {
                const diasSelecionados = valor.split(',');
                for (let option of input.options) {
                    option.selected = diasSelecionados.includes(option.value);
                }
            } else {
                input.value = valor;
            }
        }
    });
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log('preparando o envio...')

    const formData = new FormData(form)

    fetch('https://api.flit.com.br/submeterDados',{
        method:'POST',
        body: formData
    })
    
    .then(response => {
        console.log("Dados enviados com sucesso.");
    })
    .catch(error => {
        console.error("Erro ao enviar os dados:", error);
    });
})

window.addEventListener('load', recuperarValores);


