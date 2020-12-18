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
    fetch(`http://localhost:3000/weather?address=${searchValue}`)
        .then((response)=>{
            response.json()
                .then((resObj)=>{
                    if(resObj.tempature){
                        const description = document.createElement('div');
                        const tempature = document.createElement('div');
                        description.innerText = resObj.description;
                        tempature.innerText = resObj.tempature;
                        container.appendChild(description);
                        container.appendChild(tempature);
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



 

