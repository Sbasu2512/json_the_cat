const assert = require('chai');
const {search, breedFetcher} = require('../index.js');

describe("#search()", function() {

  it('returns a string description for a valid breed, via callback', (done) => {
    search(['Siberian'], (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done(); 
    });
  });

  // it("should return false if the word is not present", function() {
  //   const result = search(['Siberian'],);
  //   const output = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

  //   //assert.equal(result,output);
  // })

  // it("should return the description of the search term", ()=>{
  //   const result = search(['Abyssinian']);
  //   const output = "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals. ";
  //   assert.equal(result,output);
  // });

  // it("should return description of the search term", ()=>{
  //   const result = search(['American Bobtail']);
  //   const output = "";
  //   assert.equal(result,output);
  // });

  // it("should return description of the search term", ()=>{
  //   const result = search([]);
  //   const output = "";
  //   assert.equal(result,output);
  // });

  // it("should return description of the search term", ()=>{
  //   const result = search([]);
  //   const output = "";
  //   assert.equal(result,output);
  // });

  // it("should return description of the search term", ()=>{
  //   const result = search([]);
  //   const output = "";
  //   assert.equal(result,output);
  // });

  // it("should return description of the search term", ()=>{
  //   const result = search([]);
  //   const output = "";
  //   assert.equal(result,output);
  // });

  // it("should return description of the search term", ()=>{
  //   const result = search([]);
  //   const output = "";
  //   assert.equal(result,output);
  // });
});