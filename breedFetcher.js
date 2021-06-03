const request = require('request');
const args = process.argv.splice(2);
//let search = args[0];
// console.log(search);
// let URL = `api.thecatapi.com/v1/breeds/search?q=${search}` ;
//const URL = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

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
    const obj = JSON.parse(body);
    if (obj === undefined) {
      console.log("No response");
    } else {
      console.log(obj[0].description);
      console.log();
    }
  });
};

search(args);
 
// for (let ele of args) {
//   console.log(ele);
//   finder(URLmaker(ele));
// }