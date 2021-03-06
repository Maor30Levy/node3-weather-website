const axios = require ('axios');
const geocode = async (city, callback)=>{

    const token = 'pk.eyJ1IjoibWFvcmxldnkiLCJhIjoiY2tpOXdwaXNrMGFkODJzcDZ4MzNmOGI1MSJ9.-5VLF8xMliqP8DlksAuTmg';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${token}&limit=1`;
    try{
        const result= await axios.get(url);
        console.log(result.data.features[0].place_name);
        return callback(result.data.features[0].center[1],result.data.features[0].center[0],result.data.features[0].place_name) ;
    }
    catch (err){
        throw {
            error: "you must provide an address"
        };
    }
}
module.exports = geocode;