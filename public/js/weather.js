const container = document.getElementById("container");
const search = document.getElementById("search");
const form = document.getElementById("form");
const clearChilds = (element)=>{
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
};
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    clearChilds(container);
    const searchValue = search.value;
    fetch(`/weather?address=${searchValue}`)
        .then((response)=>{
            response.json()
                .then((resObj)=>{
                    if(resObj.tempature){
                        const description = document.createElement('div');
                        const tempature = document.createElement('div');
                        const icon = document.createElement('img');
                        const location = document.createElement('div');
                        location.id="location";
                        description.id="description";
                        tempature.id="tempature";
                        icon.id="icon";
                        location.innerText="Location: "+resObj.location;
                        description.innerText = "Weather Description: "+resObj.description;
                        tempature.innerText = "Tempature: "+resObj.tempature;
                        icon.src=resObj.icon;
                        container.appendChild(location);
                        container.appendChild(description);
                        container.appendChild(tempature);
                        container.appendChild(icon);
                    }else{
                        container.innerText = resObj.error;
                    }
                })
        })
        .catch((err)=>{
            container.innerText = err.status; 
        });
        search.value="";
    
});



 

