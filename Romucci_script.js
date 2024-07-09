//funzione JS per poter oscurare le celle della tabella sul "mouseover"
function mouseOver(element) {                            
        element.style.backgroundColor = "#28282B";
        //document.getElementById(oggetto).style.border = "1px solid white";
      }
//funzione per ripristinare il colore base una volta tolto il mouse
function mouseOut(element) {
        element.style.backgroundColor = "";
        }

// per la navigazione tra le pagine
function navigateTo(url) {
        window.location.href = url;
      }