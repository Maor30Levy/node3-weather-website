const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require ('../utils/geocode');
const weather = require ('../utils/weather');
const axios = require ('axios');
const app = express();
const publicDirectory = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory));
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: "Maor Levy"
    });
});
app.get('/weather',async (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: "you must provide an address"
        });
    }
    try{
        let result = await geocode(req.query.address,weather);
        res.send({
            description: result[0],
            tempature: result[1]
        });
    }catch(err){
        res.send(err);
    }    
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About',
        name: "Maor Levy"
    });
});

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        name: "Maor Levy"
    });
});
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: "you must provide a search term"
        });
    }
    res.send({
        products: []
    });
});
app.get('*',(req,res)=>{
    res.render('error404',{
        errorMessage: 'Page not found',
        name: "Maor Levy"
    });
});
app.get('/help/*',(req,res)=>{
    res.render('error404',{
        errorMessage: 'Help article not found',
        name: "Maor Levy"
    });
});


app.listen(3000,()=>{
    console.log('Server is connected. port: ',3000);
});