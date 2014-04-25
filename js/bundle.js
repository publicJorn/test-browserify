(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Testing a node module (this is taken from http://browserify.org)
// As you can see browserify by default searches in node_modules folder
var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
var unique_data = unique(data); // filter out duplicates
console.log('unique data:', unique_data);


// Testing our own `test` module
var test = require('./test');
console.log('test: ', test);


// Testing window object accessibility
var w = require('./window');
console.log('in main.js    : ', window);
console.log('from window.js: ', w.win);
},{"./test":2,"./window":3,"uniq":4}],2:[function(require,module,exports){
var x = {
	bal: 'alb'
}

exports.x = x;
},{}],3:[function(require,module,exports){
(function (global){
// Also see interesting article about "mocking environment variables"
// http://benclinkinbeard.com/posts/mocking-environment-variables-with-browserify/


// Just return the `global` object, which in browserify, equals the window object
exports.win = global;
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return []
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique
},{}]},{},[1])