const request = require("request");
//const args = process.argv.splice(2);
//search takes in an array, a getBreed Parameter and a callback
const search = (arr, getBreed, callback) => {     //getBreed is BreedFetcher call back :)
   console.log('search in progress...');
  for (ele of arr) {
   console.log('breedDescription');
   //getBreed is BreedFetcher because BreedFetcher is called in the callback search!
   getBreed(ele, callback);  // ele is required by urlMaker to make url to give breedFetcher          
  }
};
//a function that takes an element and interpolates it to the site variable! It returns site which is required by BreedFetcher fn.
const urlMaker = (term) => {
  //console.log('urlMaker');
  const site = `https://api.thecatapi.com/v1/breeds/search?q=${term}`;
  return site ;
};
//a function that takes in a term parameter and a callback parameter
const breedFetcher = (term, callback) => {
//console.log("inside breedFetcher");
//calling urlMaker to make the url
  const url = urlMaker(term);             
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null); //callback gets error msg and logs it!
    }
    if(response.statusCode !== 200){
      // console.log("inside respose error")
       const msg = `Status Code ${response.statusCode} when fetching. Response: ${body}`;
       //console.log("line 16")
       callback(Error(msg), null);
       return;
     }
    const obj = JSON.parse(body);
    if (Object.keys(obj).length === 0) {
      callback('Breed Not Found',null);
      return;
    } 
    /*line  is equal to 
    search((obj[0].description)=>{
      console.log(obj[0].description)
    } 
    check where the func is called!
    */
      callback(null, obj[0].description); //call gets the description and logs it.
  });
  
};

module.exports = {search, breedFetcher };

/*


  for(ele of arr){
    URL(ele);
  }

*/
