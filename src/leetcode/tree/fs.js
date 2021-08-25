const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, './'), (err, files) => {
  files = files
    .filter((name) => name.match(/^\d{4}-/))
    .map((name) => `import './${name}'`.replace('.ts', ''))
    .join('\n');
  console.log(files);
});
