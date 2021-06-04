const request = require("request");
//const args = process.argv.splice(2);

const search = (arr, callback) => {
  //console.log('search');
  for (ele of arr) {
    urlMaker(ele, callback);
  }
};

const urlMaker = (term, callback ) => {
  //console.log('urlMaker');
  const site = `https://api.thecatapi.com/v1/breeds/search?q=${term}`;
  callback(site);
  //return result ;
};

const breedFetcher = (url) => {
   request(url, (error, response, body) => {
    if (error) {
      console.log(`Sorry, We hit a little snag 🛑 😨 😵‍💫. The error is: ${error}.`)
      //return `Sorry, We hit a little snag 🛑 😨 😵‍💫. The error is: ${error}.  `;
    } else {
      const obj = JSON.parse(body);
      // console.log('breedFetcher',Object.keys(obj));
      if (Object.keys(obj).length === 0) {
        //return ("No response 😨 😵‍💫");
        console.log("No resp");
      } else {
        //console.log("else statement triggered", obj[0]);
        //return ` Success,🥳🥳🥳 Description is: \n  ${obj[0].description} \n` ;
      console.log(`Success,🥳🥳🥳 Description is: \n  ${obj[0].description} \n`)
      }
    }
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
