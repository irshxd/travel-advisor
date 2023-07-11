import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  method: 'GET',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlaceData= async ()=>{
try{

const {data:{data}}=await axios.get(URL,options);
return data;
}catch
    (Error){
        console.error('SOMETHING WENT WRONG');
}
}


