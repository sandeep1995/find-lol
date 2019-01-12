const lolFinder = require('./');

lolFinder().then(path => {
    console.log('Lol path: ' + path);
}).catch(err => {
    console.error(err);
});