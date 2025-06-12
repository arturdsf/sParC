const banco = [
    { nome: 'Produto01', valor: 100.00, descricao: 'info', img: 'imgs/img1', alt: 'prod1' },
    { nome: 'Produto02', valor: 100.00, descricao: 'info', img: 'imgs/img2', alt: 'prod2' },
    { nome: 'Produto03', valor: 100.00, descricao: 'info', img: 'imgs/img3', alt: 'prod3' },
    { nome: 'Produto04', valor: 100.00, descricao: 'info', img: 'imgs/img4', alt: 'prod4' },
    { nome: 'Produto05', valor: 100.00, descricao: 'info', img: 'imgs/img5', alt: 'prod5' }
];

const lista = document.querySelector('#listagem-de-produtos');

const alterarLista = () => {
    for (let i = 0; i < banco.length; i++) {
        lista.innerHTML += `
      <div class="card-item-de-compra${i + 1}">
        <div class="rectangle-2"></div>
        <div class="rectangle-3"></div>
        <div class="info"></div>
        <div class="img"></div>
      </div>
    `;
    }
};

const alterarLista2 = () => {
    for (let i = 0; i < banco.length; i++) {
        const card = document.querySelector(`.card-item-de-compra${i + 1}`);
        if (!card) continue;

        const descricao = card.querySelector('.info');
        const imagem = card.querySelector('.img');

        if (descricao) descricao.textContent = banco[i].descricao;
        if (imagem) imagem.innerHTML = `<img src="${banco[i].img}.png" alt="${banco[i].alt}">`;
    }
};

alterarLista2();

// const elementos = document.querySelectorAll('.info');

// elementos.forEach(elemento => {
//     elemento.textContent = "info";
// });
const produto = (valor) => {
  const selecionado = banco[valor - 1];
  localStorage.setItem('produtoSelecionado', JSON.stringify(selecionado));
};

const alterarLista3 = () => {
    const produtoSelecionado = JSON.parse(localStorage.getItem('produtoSelecionado'));
    if (!produtoSelecionado) return;

    console.log(produtoSelecionado.nome);

    const pagina = document.querySelector('.p-gina-de-compra');
    if (!pagina) return;

    const imagem = pagina.querySelector('.imgCompra');
    if (imagem) {
        imagem.innerHTML = `<img src="${produtoSelecionado.img}.png" alt="${produtoSelecionado.alt}">`;
    }

    const descricao = pagina.querySelector('.descri-o-de-item');
    if (descricao) {
        descricao.textContent = produtoSelecionado.descricao;
    }

    const valor = pagina.querySelector('.descri-o-de-valores');
    if (valor) {
        valor.textContent = `R$ ${produtoSelecionado.valor.toFixed(2)}`;
    }
};

// Executa ao carregar a página de compra
window.addEventListener('DOMContentLoaded', alterarLista3);
