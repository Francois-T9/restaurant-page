

import {} from './home.js';
import {} from './menu.js';
import "./styles.css";

const tabButton=document.querySelectorAll("#nav-btn");

const wipePage=  () => {

    const mainContainer=document.querySelector("#content");
   
    tabButton.forEach((elem) =>
        elem.addEventListener("click",() => {
            mainContainer.replaceChildren();
            console.log(mainContainer);
            console.log("click");
        })
        
    )
    
};

console.log(wipePage());