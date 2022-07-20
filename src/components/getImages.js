import axios from "axios";


const getImageSearch = (query) =>{
    const endpoint = `https://images-api.nasa.gov/search?q=${query}`
     
    if (!query) {
        return Promise.resolve([]);
      }
else{
    return axios.get(endpoint).then((response)=>{
console.log(response)
    })
.catch((err) => {
console.log(err);
});

}      

};

export default getImageSearch
    