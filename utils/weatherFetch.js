const axios = require ('axios');
const geocode = require ('./geocode');
const weather = require ('./weather');


// const execWeather = async (city)=>{
//     const coordinates = await geocode(city);
//     console.log(`Longitude: ${coordinates[0]}, Latitude:  ${coordinates[1]}`);
//     const weatherResult = await weather(coordinates[1],coordinates[0]);
//     console.log(weatherResult);
// }
// execWeather('jer');
// 
// const city = process.argv[2];
// const weatherResult =  geocode(city,weather);
module.exports={
    geocode: geocode,
    weather: weather
};   
