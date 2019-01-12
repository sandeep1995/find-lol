const lolFinder = require('./');

lolFinder().then(path => {
    console.log(path);
}).catch(err => {
    console.error(err);
})