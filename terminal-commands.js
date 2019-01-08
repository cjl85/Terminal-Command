const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
    return `${acc} ${file} `;
  }, '');

  console.log(filesToString);
 });
};

module.exports.touch = (name) => {
  fs.writeFile(text, message, (err) => {
     if (err)
	     return console.log(`${name} was created`);

  console.log(file);
};

module.exports.mkdir = (dir) => {
  fs.mkdir(dir, (err) => {
   if (err)
      return console.error(err);

   console.log(`${dir} was created`)
};
