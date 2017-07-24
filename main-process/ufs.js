const fs = require("fs");

function readDocument(basePath, fileName) {
  return fs.readFileSync(`${basePath}/${fileName}`).toString();
}

function read(filePath) {
  const documents = readDocument(filePath, "documents.plist");
  const features = readDocument(filePath, "features.fea");
  const fontinfo = readDocument(filePath, "fontinfo.plist");
  const groups = readDocument(filePath, "groups.plist");
  const interpolation = readDocument(filePath, "interpolation.designspace");
  const lib = readDocument(filePath, "lib.plist");
  const metainfo = readDocument(filePath, "metainfo.plist");

  return {
    documents,
    features,
    fontinfo,
    groups,
    interpolation,
    lib,
    metainfo
  };
}

module.exports = { read };
