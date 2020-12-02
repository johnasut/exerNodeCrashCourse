const url = require('url');

// const myUrl = new URL('http://mywebsite.com/hello.html?id=42&status=active');
const myUrl = new URL('http://mywebsite.com:5000/hello.html?id=42&status=active');


// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Host name (w/o port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('def', '456');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));