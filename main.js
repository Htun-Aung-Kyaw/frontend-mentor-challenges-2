console.log("This is scroll reveal effect with js");

let cards = document.querySelectorAll(".card");
let upBtn = document.querySelector(".up-btn");


const loadEventListener = (items) => {
    if(items.length !== undefined)
    {
        items.forEach(item=>{
            item.classList.add("reveal");
        })
    }
    else{
        items.classList.add("reveal");
    }
}
const scrollEventListener = () =>
{
    cards.forEach((card, index) => {
        let windowHeight = window.innerHeight;
        let sectionRectTop = card.getBoundingClientRect().top;

        if(sectionRectTop<windowHeight && card.classList.contains("reveal"))
            card.classList.add("active");
        
        else
            card.classList.remove("active");
    });
}

window.addEventListener("load", loadEventListener(cards));
window.addEventListener("scroll",scrollEventListener);