const $header = document.querySelector(".header");
const $sectionH = document.querySelector(".flex-header");
const $main = document.querySelector(".main");
const $sectionM = document.querySelector(".flex-main");
const $footer = document.querySelector(".footer");
const $sectionF = document.querySelector(".flex-footer");
const $boton1 = document.querySelector(".boton1");
const $boton2 = document.querySelector(".boton2");

$boton1.addEventListener("click", function(){
    //CONTENIDO HEADER
    let titulo = document.createTextNode("PÁGINA 1");
    let h1N = document.createElement("h1");
    $sectionH.appendChild(h1N);
    h1N.appendChild(titulo);

    //CONTENIDO MAIN
    let tituloM = document.createTextNode("SECTORES DE QUITO");
    let h2M = document.createElement("h2");
    $main.appendChild(h2M);
    h2M.appendChild(tituloM);

    const $secButton = document.querySelector(".sec-button");
    $secButton.setAttribute("id", "ocultar-sec");
    let sectorNorte = ["Comité del Pueblo", "La Bota", "Cotocollao", " Calderón", "Kennedy", "Carcelén", "El Condado", "Bellavista", "Iñaquito", "Atucucho", "La Florida", "Rumiñahui", "El Inca"]
    let nombreN = document.createTextNode("Norte");
    let h2SN = document.createElement("h2");
    let ulSN = document.createElement("ul");
    ulSN.setAttribute("class", "ul-norte");
    $sectionM.appendChild(ulSN);
    ulSN.appendChild(h2SN);
    h2SN.appendChild(nombreN);
    let fragmentSN = document.createDocumentFragment();
    
    sectorNorte.forEach(item =>{
        let liSN = document.createElement("li");
        liSN.textContent = item;
        fragmentSN.appendChild(liSN);
    });
    ulSN.appendChild(fragmentSN);

    let sectorCentro = ["Centro Histórico", "La Tola", "El Dorado", "San Roque", "La Ronda", "La Marín", "La Guaragua", "La Loma Grande", "San Marcos", "La Vicentina", "El Tejar", "Toctiuco", "La Libertad"]
    let nombreC = document.createTextNode("Centro");
    let h2SC = document.createElement("h2");
    let ulSC = document.createElement("ul");
    ulSC.setAttribute("class", "ul-centro");
    $sectionM.appendChild(ulSC);
    ulSC.appendChild(h2SC);
    h2SC.appendChild(nombreC);
    let fragmentSC = document.createDocumentFragment();
    
    sectorCentro.forEach(item =>{
        let liSC = document.createElement("li");
        liSC.textContent = item;
        fragmentSC.appendChild(liSC);
    });
    ulSC.appendChild(fragmentSC);
    
    let sectorSur = ["San Bartolo", "La Mena 2", "La Magdalena", "Villaflora", "Solanda", "Quitumbe", "Chilibulo", "El Pintado", "Quito Sur", "El Calzado", "Chimbacalle", "Luluncoto", "El Camal"]
    let nombreS = document.createTextNode("Sur");
    let h2SS = document.createElement("h2");
    let ulSS = document.createElement("ul");
    ulSS.setAttribute("class", "ul-sur");
    $sectionM.appendChild(ulSS);
    ulSS.appendChild(h2SS);
    h2SS.appendChild(nombreS);
    let fragmentSS = document.createDocumentFragment();
    
    sectorSur.forEach(item =>{
        let liSS = document.createElement("li");
        liSS.textContent = item;
        fragmentSS.appendChild(liSS);
    });
    ulSS.appendChild(fragmentSS);
});

$boton2.addEventListener("click", function(){
    
});