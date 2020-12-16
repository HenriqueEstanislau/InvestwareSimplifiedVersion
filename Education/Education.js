const materiasDestaque = [
    {
        id: 0,
        titulo: 'Quais são os primeiros passos essenciais?',
        imagem: 'Imagem1.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 1,
        titulo: 'Descubra os erros mais comuns ao montar sua carteira de ações!',
        imagem: 'Imagem2.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 2,
        titulo: 'Ações tudo o que você precisa saber antes de investir!',
        imagem: 'Imagem3.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 3,
        titulo: 'É possível viver de dividendos?',
        imagem: 'Imagem4.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 4,
        titulo: '10 Dicas de como economizar para sobrar mais dinheiro!',
        imagem: 'Imagem5.jpg',
        pagina: '../SingIn/SingIn.html'
    }    
]

const materiasComecar = [
    {
        id: 0,
        titulo: 'O que é a Taxa Selic e como ela impacta seus investimentos',
        imagem: 'Imagem6.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 1,
        titulo: 'Como ser trader? Confira 5 características essenciais!',
        imagem: 'Imagem7.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 2,
        titulo: 'Aprenda 4 dicas de como fazer um bom plano de investimento!',
        imagem: 'Imagem8.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 3,
        titulo: 'Quais são as melhores formas de investir com pouco dinheiro?',
        imagem: 'Imagem9.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 4,
        titulo: 'Quais são os mitos sobre investir na bolsa de valores?!',
        imagem: 'Imagem10.jpg',
        pagina: '../SingIn/SingIn.html'
    }
]

inicializarCards = () => {
    var containerCardsDestaque = document.getElementById('card-destaque');
    var containerCardsComecar = document.getElementById('card-comecar');

    materiasDestaque.map((valor)=>{
        containerCardsDestaque.innerHTML += `
        <div class="card">
        <div class="img"><img src="${valor.imagem}" alt=""></div>
            <div class="content">
                <div class="title">${valor.titulo}<br><br></div>
                <div class="btn">
                    <button onclick="window.location.href = '${valor.pagina}'">Leia mais</button>
                </div>
            </div>
        </div>
        
        `;
    })

    materiasComecar.map((valor)=>{
        containerCardsComecar.innerHTML += `
        <div class="card">
        <div class="img"><img src="${valor.imagem}" alt=""></div>
            <div class="content">
                <div class="title">${valor.titulo}<br><br></div>
                <div class="btn">
                    <button onclick="window.location.href = '${valor.pagina}'">Leia mais</button>
                </div>
            </div>
        </div>
        `;
    })
}

inicializarCards();
