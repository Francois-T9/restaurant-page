

import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {aboutPage} from './about.js';
import "./styles.css";
homePage();

const tabButton=document.querySelectorAll(".nav-btn");


const wipePage=  (() => {

    const mainContainer=document.querySelector("#content");
   
    tabButton.forEach((elem) =>
        elem.addEventListener("click",() => {
           
            mainContainer.replaceChildren();
            if(elem.id=="home") {

                homePage();
            }
            else if(elem.id=="menu") {
                menuPage();
            }
            else if(elem.id="about") {
                aboutPage();
            }
           
        })
        
    )
    
})();

