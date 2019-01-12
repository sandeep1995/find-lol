const path = require('path');
const { exec } = require('child_process');

const lolFinderBatchFile = path.resolve(__dirname, 'scripts', 'findLOL.bat');

const lolFinder = () => new Promise((resolve, reject) => {
  exec(lolFinderBatchFile, (err, stdout, stderr) => {
    if (err) {
      reject(new Error(err));
    }
    if (stderr) {
      reject(new Error(stderr));
    }
    resolve(stdout);
  });
});


module.exports = lolFinder;