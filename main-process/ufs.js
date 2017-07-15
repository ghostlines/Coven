import fs from "fs";

function read(filePath) {
  const info = fs.readFileSync(`${filePath}/info.plist`).toString();
  const documents = fs.readFileSync(`${filePath}/documents.plist`).toString();

  return { info, documents };
}

export { read };
