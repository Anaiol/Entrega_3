
window.onload = function () {
    let imatges = document.querySelectorAll("img");
    fletxes = document.querySelectorAll(".fletxa");

    fletxes.forEach(function(fletxa) {
        fletxa.onclick = function() {
            var foto_activa = document.querySelector(".gran");
                var j = Array.from(imatges).indexOf(foto_activa);
            if (fletxa.id === "esquerra") {
                
                if (j > 0) {
                    foto_activa.classList.remove("gran");
                    foto_activa.classList.add("foto");
                    imatges[j - 1].classList.add("gran");
                    imatges[j - 1].classList.remove("foto");
                }
            }
            else if( j<imatges.length-1){
                foto_activa.classList.remove("gran");
                    foto_activa.classList.add("foto");
                    imatges[j+1].classList.add("gran");
                    imatges[j+1].classList.remove("foto");
                

            }
        };
    });

    reiniciar();

    let fons_negre = document.getElementById("fons_negre");
    imatges.forEach(function(foto) {
        foto.onclick = function() {
            cambiarImatge(foto.src);
        };
    });

    fons_negre.onclick = function() {
        fons_negre.style.backgroundColor = "rgba(0,0,0,0)";
        fons_negre.style.zIndex = "-100";
        fletxes.forEach(function(fletxa){fletxa.style.zIndex="-100"});
        
        reiniciar();
    }
};

function cambiarImatge(nom) {
    reiniciar();
    let fons_negre = document.getElementById("fons_negre");
    
    fons_negre.style.backgroundColor = "rgba(0,0,0,0.5)";
    fons_negre.style.zIndex = "100";
    fletxes.forEach(function(fletxa){fletxa.style.zIndex="100"});
    
    

    let imatges = document.querySelectorAll("img");
    for (let i = 0; i < imatges.length; ++i) {
        if (imatges[i].src === nom) {
            imatges[i].classList.add("gran");
            imatges[i].classList.remove("foto");
        }
    }
}

function reiniciar() {
    let fotos = document.querySelectorAll("img");
    fotos.forEach(function(foto) {
        foto.className = "foto";
    });
}



 