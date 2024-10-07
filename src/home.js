
export  {homePage};
import imageSrc from './img/pexels-roman-odintsov-4958646.jpg';
 
 
 const homePage=function homePage()  {
   
    const mainContainer=document.querySelector("#content");

    const homeContainer=document.createElement("div");
    homeContainer.className="home-page"
    mainContainer.appendChild(homeContainer);
    
    const titleContainer=document.createElement("h1");
    const paragraphContainer=document.createElement("p");
    const imgContainer=document.createElement("img");
    
    const title="La casa de la abuela";
    const paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    imgContainer.src=imageSrc;

    paragraphContainer.textContent=paragraphOne;
    titleContainer.textContent=title;

    homeContainer.appendChild(titleContainer);
    homeContainer.appendChild(paragraphContainer)
    homeContainer.appendChild(imgContainer);
   
    

};