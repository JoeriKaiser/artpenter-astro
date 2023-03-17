import fs from "fs/promises";
import path from "path";

const fileName = "/dist/server/entry.mjs";
const encoding = "utf8";
const filePath = path.join(process.cwd(), fileName);

fs.readFile(filePath, encoding)
  .then((data) => {
    const modifiedData = data
      .replace(/mime\.lookup/g, "mime.getType")
      .replace(/mime\.charsets\.lookup/g, "mime.getType");

    return fs.writeFile(filePath, modifiedData, encoding);
  })
  .then(() => {
    console.log("File successfully modified!");
  })
  .catch((err) => {
    console.error(err);
  });
