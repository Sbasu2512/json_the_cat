const request = require("request");
//const args = process.argv.splice(2);

const search = (arr, getBreed, callback) => {     //getBreed is BreedFetcher call back :)
   console.log('search');
  //let result = '' ;
  for (ele of arr) {
   //const url = urlMaker(ele); 
   //let breedDescription =  urlMaker(ele, callback);
   console.log('breedDescription');
    //return callback(ele);
   //result = result.concat(breedDescription);
   getBreed(ele, callback);
  }
  //return result ;
};

const urlMaker = (term) => {
  //console.log('urlMaker');
  const site = `https://api.thecatapi.com/v1/breeds/search?q=${term}`;
  //it recognizes breedFetcher because breedFetcher is passeed into the function in index.js.
  //const result = callback(site); 
  return site ;
};

// const breedNameFetcher = (nameFinder) => {
//   console.log(nameFinder.map((breed,index)=>{
//     return `${index} : ${breed.name}`;
    
//   })
  
//   );

// }


const breedFetcher = (term, callback) => {
  //console.log("1234");
  const url = urlMaker(term);  
  request(url, (error, response, body) => {
    if (error) {
       //console.log("error");
      //   `Sorry, We hit a little snag 🛑 😨 😵‍💫. The error is: ${error}.`
      // );
      return callback(error, null);
    }
    const obj = JSON.parse(body);
     // console.log('breedFetcher',Object.keys(obj));
    if (Object.keys(obj).length === 0) {
      //return ("No response 😨 😵‍💫");
       // console.log("No resp");
      callback('Breed Not Found',null);
      return;
    } 
      callback(null, obj[0].description);
    
    
    //breedNameFetcher(obj); //${obj[0].name}
    //console.log("else statement triggered", obj[0]);
    //return obj[0].description ;
    //console.log(`1 Success,🥳🥳🥳 Description of is: \n  ${obj[0].description} `);
    //return;
    //Success,🥳🥳🥳 Description is: \n
  });
  //console.log(result);
  //return result ;
};

//console.log(search(args));
module.exports = {search, breedFetcher };

/*


  for(ele of arr){
    URL(ele);
  }

*/
