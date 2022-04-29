// import { writeFile } from "fs";
const fs = require("fs");

posts = [
  {
    title: "",
    path: "",
  },
];

function dynamicallyGeneratePosts() {}
function createPage() {}
function deletePage() {}

// const content, path, fileName, extension;

config = {
  content: "Some content",
  path: "./posts/",
  fileName: "blog-post",
};
const { content, path, fileName } = config;

fs.writeFile(`${path}${fileName}`, content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
  console.log("File successfully written");
});
