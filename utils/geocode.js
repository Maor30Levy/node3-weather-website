const axios = require ('axios');
const geocode = async (city, callback)=>{

    const token = process.env.MAPBOX_TOKEN;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${token}&limit=1`;
    try{
        const result= await axios.get(url);
        console.log(result.data.features[0].place_name);
        return callback(result.data.features[0].center[1],result.data.features[0].center[0]) ;
    }
    catch (err){
        throw {
            error: "you must provide an address"
        };
    }
}
module.exports = geocode;