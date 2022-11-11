const body = document.querySelector("body");

const produtos = [
    {
        foto: "./assets/img/actions/starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: 100.00,
        type: "figure"
    },
    {
        foto: "./assets/img/actions/dragonballpersonagem.jpg",
        name: "Goku SSJ",
        price: 120.00,
        type: "figure"
    },
    {
        foto: "./assets/img/actions/animewoman.jpg",
        name: "Anime Maiden",
        price: 140.00,
        type: "figure"
    },
    {
        foto: "./assets/img/actions/starwarspersonagem.jpg",
        name: "Teste 1",
        price: 160.00,
        type: "figure"
    },
    {
        foto: "./assets/img/actions/dragonballpersonagem.jpg",
        name: "Teste 2",
        price: 180.00,
        type: "figure"
    },
    {
        foto: "./assets/img/actions/animewoman.jpg",
        name: "Teste 3",
        price: 200.00,
        type: "figure"
    },
    {
        foto: "./assets/img/painting/clock.jpg",
        name: "Quadro Clock",
        price: 60.00,
        type: "frame"
    },
    {
        foto: "./assets/img/painting/gamepad.jpg",
        name: "Quadro Joystick",
        price: 80.00,
        type: "frame"
    },
    {
        foto: "./assets/img/painting/personagem.jpg",
        name: "Quadro Cetrespeor",
        price: 40.00,
        type: "frame"
    },
    {
        foto: "./assets/img/painting/clock.jpg",
        name: "Teste 1",
        price: 60.00,
        type: "frame"
    },
    {
        foto: "./assets/img/painting/gamepad.jpg",
        name: "Teste 2",
        price: 80.00,
        type: "frame"
    },
    {
        foto: "./assets/img/painting/personagem.jpg",
        name: "Teste 3",
        price: 40.00,
        type: "frame"
    }  
]
let listFigures = [];
let listFrames = [];

function separaItens(lista){
    for (let i = 0; i <= lista.length-1; i++){
        if (lista[i].type == "figure"){
            listFigures.push(lista[i]);
        }else if (lista[i].type == "frame"){
            listFrames.push(lista[i]);
        }
    }
}

separaItens(produtos);

let sectionFigures = document.querySelector(".sessaoCardFigures");
let sectionFrames = document.querySelector(".sessaoCardQuadros");

let listaFigures = document.createElement("ul");
sectionFigures.appendChild(listaFigures);

for (let i = 0; i < listFigures.length; i++){
    let listItemCard = document.createElement("li");
    listaFigures.appendChild(listItemCard);
    let divCard = document.createElement("div");
    listItemCard.appendChild(divCard);
    let imagem = document.createElement("img");
    imagem.src = listFigures[i].foto;
    divCard.appendChild(imagem);
    let nomeItem = document.createElement("span");
    divCard.appendChild(nomeItem);
    nomeItem.setAttribute("class", "tituloItem");
    nomeItem.innerText = listFigures[i].name;
    let valorItem = document.createElement("span");
    divCard.appendChild(valorItem);
    valorItem.setAttribute("class", "valorItem");
    valorItem.innerText = `R$ ${listFigures[i].price.toFixed(2)}`;
}

let listaQuadros = document.createElement("ul");
sectionFrames.appendChild(listaQuadros);

for (let i = 0; i < listFrames.length; i++){
    let listItemCard = document.createElement("li");
    listaQuadros.appendChild(listItemCard);
    let divCard = document.createElement("div");
    listItemCard.appendChild(divCard);
    let imagem = document.createElement("img");
    imagem.src = listFrames[i].foto;
    divCard.appendChild(imagem);
    let nomeItem = document.createElement("span");
    divCard.appendChild(nomeItem);
    nomeItem.setAttribute("class", "tituloItem");
    nomeItem.innerText = listFrames[i].name;
    let valorItem = document.createElement("span");
    divCard.appendChild(valorItem);
    valorItem.setAttribute("class", "valorItem");
    valorItem.innerText = `R$ ${listFrames[i].price.toFixed(2)}`;
}


