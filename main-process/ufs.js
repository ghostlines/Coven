const fs = require("fs");
const plist = require("fast-plist");

function readDocument(basePath, fileName) {
  return fs.readFileSync(`${basePath}/${fileName}`).toString();
}

function readPlist(basePath, fileName) {
  return plist.parse(readDocument(basePath, fileName));
}

function read(filePath) {
  const documents = readPlist(filePath, "documents.plist");
  const features = readDocument(filePath, "features.fea");
  const fontinfo = readPlist(filePath, "fontinfo.plist");
  const groups = readPlist(filePath, "groups.plist");
  const interpolation = readDocument(filePath, "interpolation.designspace");
  const lib = readPlist(filePath, "lib.plist");
  const metainfo = readPlist(filePath, "metainfo.plist");

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
