exports.testing = (req,res,next) => {
  res.send('Hello World!');
};

exports.getBlogs = (req, res, next) => {
  // get blogs
};

exports.getBlogById = (req, res, next) => {
  // get blog by Id
};

exports.postBlog = (req, res, next) => {
  const file = req.file;
  return res.send(JSON.stringify(file));
};
