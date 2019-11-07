const express = require('express');
const router = express.Router();
const BlogController = require('../Controllers/BlogController');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

router.get('/', BlogController.testing);

router.post('/blog', multipartMiddleware, BlogController.postBlog);

module.exports = router;
