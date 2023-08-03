const request = require('request');
const fs = require('fs');
const { log } = require('console');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log("Error", error);
    return;
  }

  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.log("Error", err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});