
let i = 0;
let imatges = [];
imatges[0] = "url('fons_portada.jpg')";
imatges[1] = "url('ma.png')";
imatges[2] = "url('fons_tradicional_digital.webp')";
imatges[3] = "url('fons_galeria.jpg')";

function cambi() {
    i = (i + 1);
    if (i>3){i=0;}
    let fons = document.getElementById("fons");
    fons.classList.add("apagat");
    const text = document.getElementById("text");
    const titol= document.getElementById("titol");
    text.classList.add("apagat");
    titol.classList.add("apagat");
    
    

    setTimeout(function() {
        fons.style.backgroundImage = imatges[i];
        fons.classList.remove("apagat"); 
        titol.classList.remove("apagat"); 
        text.classList.remove("apagat"); 
        
    if (i==0){
        titol.innerHTML="Dibuixa";
        text.innerHTML="Pàgina dedicada a ajudar a principiants";
        
    }
    if (i==1){
        titol.innerHTML="Descobreix";
        text.innerHTML="Consells molt utils per a començar";
        
    }
    if (i==2){
        titol.innerHTML="Decideix";
        text.innerHTML="Amb quines eines començaras el teu aprenentatge";
        
    }
    if (i==3){
        titol.innerHTML="Inspirat";
        text.innerHTML="Amb la nostra galeria de imatges";
        
    }
   


    }, 700);
}

window.onload = function () {
    let fons = document.getElementById("fons");

    
    fons.onclick = function () {
        if (i==0 || i==1){
            window.location.href = "html_consells.html";
        }
        else if (i==2){
            window.location.href = "tradicional-digital.html";
        }
        else if (i==3){
            window.location.href = "Galeria_imatges.html";
        }
        
        
        
    };

    
    setInterval(cambi, 3000);
};
