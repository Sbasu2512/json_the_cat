const {breedFetcher, search} = require('./breedFetcher');
//const {search} = require('search');
const args = process.argv.splice(2);


 search(args,breedFetcher);


