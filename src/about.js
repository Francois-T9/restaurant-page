
export  {aboutPage};

// import homeBackground from './img/home_bg.jpg';

 
 
 const aboutPage=function aboutPage()  {
   
    const mainContainer=document.querySelector("#content");
    const aboutContainer=document.createElement("div");
    aboutContainer.className="about-page"

    const scheduleContainer=document.createElement("div");
    scheduleContainer.className="schedule";

    const locationContainer=document.createElement("div");
    locationContainer.className="location";

    aboutContainer.append(scheduleContainer,locationContainer);

    const aboutTitle=document.createElement("h1")

    const scheduleTitle=document.createElement("h2");
    scheduleTitle.id="schedule"
    scheduleTitle.textContent="Horarios"
    const locationTitle=document.createElement("h2");
    locationTitle.textContent="Ubicacion"
    locationTitle.id="location";

    const schedulteText=document.createElement("p");
    schedulteText.id="schedule"
    schedulteText.innerHTML="Sabado <br> <span>8:00 a 15:00</span> <br>Domingo <br> <span>8:00 a 15:00</span> "
    const locationText=document.createElement("p");
    locationText.id="location";
    locationText.textContent="Calle 28 #191 Col. La Trinchera"

    aboutTitle.textContent="Donde encontrarnos";

    aboutContainer.appendChild(aboutTitle);
    scheduleContainer.append(scheduleTitle,schedulteText);
    locationContainer.append(locationTitle,locationText);

  
    mainContainer.appendChild(aboutContainer);

};