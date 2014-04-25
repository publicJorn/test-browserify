// Testing a node module (this is taken from http://browserify.org)
// As you can see browserify by default searches in node_modules folder
var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
var unique_data = unique(data); // filter out duplicates
console.log('unique data:', unique_data);



// Testing our own `test` module
var test = require('./test');
console.log('test: ', test);
