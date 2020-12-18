const axios = require ('axios');
const weather = async (lat,lon)=>{
    const token = c1c964dae24ad60ecfaa7cf35156d5fb;
    const url = `http://api.weatherstack.com/current?access_key=${token}&query=${lat},${lon}&units=m`;
    try{
        const rawData= await axios.get(url);
        const result = [rawData.data.current.weather_descriptions[0],rawData.data.current.temperature];
        console.log(result);
        return result;
    }
    catch (err){
        throw {data: err.message};
    }
}
module.exports = weather;