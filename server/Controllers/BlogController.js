const fileUploading = require('../utils/fileUploading');const readChunk = require('read-chunk');
const fileType = require('file-type');


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
    const buffer = readChunk.sync(path, 0, fileType.minimumBytes);
    const type = fileType(buffer);
    const fileName = 'testing';
    const data = await fileUploading.fileUploading(buffer, fileName, type);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
};
