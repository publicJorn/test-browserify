// Also see interesting article about "mocking environment variables"
// http://benclinkinbeard.com/posts/mocking-environment-variables-with-browserify/


// Just return the `global` object, which in browserify, equals the window object
exports.win = global;