(() => {
    mainContainer=document.querySelector("#content");
    titleContainer=document.createElement("h1");
    paragraphContainer=document.createElement("p");
    
    title="La casa de la abuela";
    paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    paragraphContainer.textContent=paragraphOne;
    titleContainer.textContent=title;

    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(paragraphContainer)
   
    

})();