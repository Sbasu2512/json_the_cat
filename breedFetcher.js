const request = require('request');
const args = process.argv.splice(2);
let search = args[0];
// console.log(search);
// let URL = `api.thecatapi.com/v1/breeds/search?q=${search}` ;
//const URL = `https://api.thecatapi.com/v1/breeds/search?q=${search}`;

 const URLmaker = (search) => {
  return `https://api.thecatapi.com/v1/breeds/search?q=${search}`
 }

//console.log(URL(args));
const finder = (URL) => {
  request(URL, (error, response, body) => {
    const obj = JSON.parse(body);
    if (obj === undefined) {
      console.log("No response");
    } else {
      console.log(obj[0].description);
    }
  });
};

for (let ele of args) {
  console.log(ele);
  finder(URLmaker(ele));
}