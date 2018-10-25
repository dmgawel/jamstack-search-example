const fs = require("fs");
const lunr = require("lunr");

const corpus = JSON.parse(fs.readFileSync("public/search.json"));

const index = lunr(function () {
  this.field("title");
  this.field("body");

  this.metadataWhitelist = ['position']

  corpus.forEach(entry => {
    this.add({
      title: entry.title,
      body: entry.body,
      id: entry.ref,
    });
  });
});

fs.writeFileSync("searchIndex.json", JSON.stringify(index));

