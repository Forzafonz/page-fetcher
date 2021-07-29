const input = process.argv.slice(2) ;
const request = require('request');
const fs = require('fs');
const target = input[0];
const output = input[1];



request(`${target}`, (error, response, body) => {
  if (error){
    throw `Unfortunately there was an ${error}.`
  } 
  fs.writeFile(`${output}`, body, err => {
    if (err) {
      console.error(err);
      return
    } else {
      const {size} = fs.statSync(`${output}`);
      console.log(`Downloaded and saved ${size} bytes to ${output}`);
    }
  })
});