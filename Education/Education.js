const materiasDestaque = [
    {
        id: 0,
        titulo: 'Quais são os primeiros passos essenciais?<br>',
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
        titulo: 'Ações tudo o que você precisa saber antes de investir!<br>',
        imagem: 'Imagem3.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 3,
        titulo: 'É possível viver de dividendos?<br><br>',
        imagem: 'Imagem4.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 4,
        titulo: '10 Dicas de como economizar para sobrar mais dinheiro!<br>',
        imagem: 'Imagem5.jpg',
        pagina: '../SingIn/SingIn.html'
    }
]

const materiasComecar = [
    {
        id: 0,
        titulo: 'Quais são os primeiros passos essenciais?<br>',
        imagem: 'Imagem1.jpg',
        pagina: '../SingIn/SingIn.html'
    },
    {
        id: 1,
        titulo: 'Descubra os erros mais comuns ao montar sua carteira de ações!',
        imagem: 'Imagem3.jpg',
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
                    <a href="${valor.pagina}">Leia mais</a>
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
                    <a href="${valor.pagina}">Leia mais</a>
                </div>
            </div>
        </div>
        `;
    })
}

inicializarCards();
