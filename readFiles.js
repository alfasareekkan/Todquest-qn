const fs = require("fs");

fs.readdir("C:/Brototype/interview/StaticPage/", (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(file => {
    console.log(file);
  });
});