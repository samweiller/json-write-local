// Local JSON Writer
// Write a local JSON file with filename and object parameters.
// Written by Sam Weiller, 2016. Contact: hello@samweiller.io
// v.1.0

const fs = require('fs');

module.exports = function JSONwrite(filename, obj) {
   var dataStream = fs.createWriteStream(filename, {'flags': 'a', 'autoClose': true});
   dataStream.write(JSON.stringify(obj));
   dataStream.end();
}
