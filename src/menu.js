import "./menu.css"

let nav = document.createElement("nav");

    let title = document.createElement("div");
    title.textContent = "My Website";
    title.className = "title";

    let manu_trigger = document.createElement("div");
    manu_trigger.className = "manu-trigger";
        let menu = document.createElement("div");
        menu.className = "menu";
            let item1 = document.createElement("div");
            item1.textContent = "Item 1";
            item1.className = "item";
            let item2 = document.createElement("div");
            item2.textContent = "Item 2";
            item2.className = "item";
            let item3 = document.createElement("div");
            item3.textContent = "Item 3";
            item3.className = "item";
        menu.appendChild(item1);
        menu.appendChild(item2);
        menu.appendChild(item3);
        let men_btn = document.createElement("button");
        men_btn.textContent = ">";
        men_btn.className = "manu-btn";
        men_btn.addEventListener("click", showMenu);
    manu_trigger.appendChild(menu);
    manu_trigger.appendChild(men_btn);

nav.appendChild(title);
nav.appendChild(manu_trigger);


function showMenu(){
    if(men_btn.innerHTML == ' &gt; '){
        men_btn.innerHTML = " < ";
        menu.style.display = "none";
    }
    else{
        men_btn.innerHTML = " > ";
        menu.style.display = "flex";
    }
}

export default nav;