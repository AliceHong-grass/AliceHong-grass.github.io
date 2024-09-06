import "./welcom.scss"

let welcom = document.createElement("div");
welcom.textContent = "Welcom";
welcom.className = "welcom";
welcom.addEventListener("click", changeWelcom);

function changeWelcom (){
    welcom.style.fontSize = "55px";
    window.setTimeout(function(){   
        welcom.style.fontSize = "50px";
    }, 500);
}

export default welcom;