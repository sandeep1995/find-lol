# find-lol
Find installation path of League of Legends for Windows OS

## Usage
```js
lolFinder().then(path => {
    console.log('Lol path: ' + path);
}).catch(err => {
    console.error(err);
});
```