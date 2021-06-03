const request = require('request');
const args = process.argv.splice(2);

const search = (arr) => {
  for(ele of arr){
    URL(ele);
  }
}

 const URL = (term) => {
   const site = `https://api.thecatapi.com/v1/breeds/search?q=${term}`
   finder(site);
 }

//console.log(URL(args));
const finder = (url) => {
  request(url, (error, response, body) => {
    if(error){
      return `Sorry, We hit a little snag 🛑 ☹️. The error is: ${error}. Status Code: ${response} && ${response.statusCode} `
    } else {
      console.log("success. Request Processing ....")
      const obj = JSON.parse(body);
      console.log("No response");
      return obj[0].description ;
    }
    });
};

search(args);


/*



*/