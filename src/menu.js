import imageSrcOne from './img/pexels-amfaru-7388095.jpg';
import imageSrcTwo from './img/chilaquiles-4120608_1280.jpg';
export  {menuPage};

 
 const menuPage=function menuPage()  {
   
    const mainContainer=document.querySelector("#content");
    const menuContainer=document.createElement("div");
    menuContainer.className="menu-page";
    mainContainer.appendChild(menuContainer);

    const titleContainer=document.createElement("h1");
    const listContainer=document.createElement("div");


    
    const title="El menu de la casa";

    const CreateMenuItem=(item,price,description,imgPath) => {
        return {item,price,description,imgPath}
    };

    const menuContent=[CreateMenuItem("Tacos al pastor","$15.99","Orden de 3 tacos servidos con salsa verde",imageSrcOne),
                       CreateMenuItem("Chilaquiles","$9.95","Chilaquiles verdes con huevo y crema",imageSrcTwo)
    ];
    
    console.log(imageSrcOne);
    console.log(menuContent[0].imgPath);
   
    menuContent.forEach((item,index) => {

        const menuItem=document.createElement("ul");

        const itemName=document.createElement("li");
        const itemPrice=document.createElement("li");
        const itemDescription=document.createElement("li");
        const imgContainer=document.createElement("img");
        
        for (let key in item) {
            // console.log(key,item[key])
            
            itemName.textContent=item.item;
            itemPrice.textContent=item.price;
            itemDescription.textContent=item.description;
            imgContainer.src=item.imgPath;
            
            
        }
        
       
        // console.log(item.item);
        // menuItem.textContent=item.item;

        // listContainer.appendChild(menuItem);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(imgContainer);



        listContainer.appendChild(menuItem);
    })
    

    titleContainer.textContent=title;
    
    menuContainer.appendChild(titleContainer);
    menuContainer.appendChild(listContainer)
    
 
   
    

};