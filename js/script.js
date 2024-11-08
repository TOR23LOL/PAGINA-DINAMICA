const $header = document.querySelector("#header");
const $placehold = document.querySelector("#placehold");
const $nav = document.querySelector("#nav");
const $main = document.querySelector("#paginas");
const $BtnPaginas = document.querySelector("#boton-paginas");
const $BtnPagina1 = document.querySelector("#Bpagina1");
const $BtnPagina2 = document.querySelector("#Bpagina2");
const $pagina1 = document.querySelector("#pagina1");
const $pagina2 = document.querySelector("#pagina2");
const $footer = document.querySelector("#footer");
const $redesH3 = document.querySelector("#redes-h3");
const $redes = document.querySelector("#redes");
const $BtnRegresar = document.querySelector("#boton-regresar");

$BtnPagina1.addEventListener(function OcultarP1(){
    $placehold.classList.toggle("ocultar");
    $nav.classList.toggle("ocultar");
    $nav.classList.toggle("ocultar");
    $nav.classList.toggle("ocultar");
    $nav.classList.toggle("ocultar");
    $nav.classList.toggle("ocultar");
});

/*
$boton2.addEventListener("click", function(){
    //CONTENIDO HEADER
    let titulo = document.createTextNode("PÁGINA 2");
    let h1N = document.createElement("h1");
    $sectionH.appendChild(h1N);
    h1N.appendChild(titulo);

    $placehold.setAttribute("id", "visible");

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

    $img1.setAttribute("id", "img-left");
    $img2.setAttribute("id", "img-right");

    //CONTENIDO FOOTER
    $regresar.setAttribute("class", "visible");
});

$boton1.addEventListener("click", function(){
    
});

$regresar.addEventListener("click", function(){
    const $h2 = document.querySelector("");
    $sectionM.setAttribute("class", "ocultar");
    $sectionM1.setAttribute("class", "ocultar");

})*/