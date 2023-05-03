const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";


function update(bgcolor,textcolor){

    html.style.backgroundColor = bgcolor;
    html.style.color =textcolor;
    //uuuu
}

select.addEventListener("change", ()=>
select.value ==="black"? update("black", "white"): update("white","black")
);