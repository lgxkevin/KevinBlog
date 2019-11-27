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
    console.log(data);

    // write data in database
    const newArticle = new Article({
      title: req.body.title,
      subtitle: req.body.subtitle,
      tags: req.body.tags,
      time_created: Date.now(),
      time_updated: Date.now(),
      url: data.Location
    })

    return res.status(200).send(data);

  } catch (error) {
    return res.status(400).send(error);
  }
};
