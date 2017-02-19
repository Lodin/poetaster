const path = require('path');
const fs = require('fs');

const roboto = new RegExp('../font-roboto/roboto.html');
const paperStylesFile = path.resolve(process.cwd(), 'bower_components/paper-styles/typography.html');

const run = () =>
  fs.readFile(paperStylesFile, 'utf8', (err, res) => {
    if (err) throw err;
    const replaced = res.replace(roboto, '../font-roboto-local/roboto.html');
    fs.writeFile(paperStylesFile, replaced, 'utf8', err => {if (err) throw err;});
  });

module.exports = run;
