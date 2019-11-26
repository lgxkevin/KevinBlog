const fileUploading = require('../utils/fileUploading');
const fs = require('fs');
const Article = require('../models/Article');

exports.testing = (req, res, next) => {
  res.send('Hello World!');
};

exports.getBlogs = (req, res, next) => {
  // get blogs
};

exports.getBlogById = (req, res, next) => {
  // get blog by Id
};

exports.postBlog = async (req, res, next) => {
  try {
    const file = req.files.file;
    const path = file.path;
    const buffer = fs.readFileSync(path);

    const fileName = file.name;
    const data = await fileUploading.fileUploading(buffer, fileName);

    // write data in database
    const newArticle = new Article({

    })

    return res.status(200).send(data);

  } catch (error) {
    return res.status(400).send(error);
  }
};
