const path = require('path');
const { execFile } = require('child_process');

const lolFinderBatchFile = path.normalize(path.resolve(__dirname, 'scripts', 'findLOL.bat'));

const lolFinder = () => new Promise((resolve, reject) => {
  execFile(lolFinderBatchFile, (err, stdout, stderr) => {
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