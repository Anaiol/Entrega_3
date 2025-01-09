

window.onload = function() {
    const titols = document.querySelectorAll(".titol");
    

    titols.forEach(function(titol) {
        titol.onclick = function() {
            toggle(titol);
        }
    });
}

function toggle(h1) {
    const titols = document.querySelectorAll(".titol");
    const paragrafs = document.querySelectorAll("p");
    
    let par = Array.from(titols).indexOf(h1);
    let p = paragrafs[par];

    if (p.classList.contains('show')) {
        p.classList.remove('show');
    } else {
        p.classList.add('show');
    }
}