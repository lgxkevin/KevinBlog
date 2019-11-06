const express = require('express');
const router = express.Router();
const BlogController = require('../Controllers/BlogController');

router.get('/', BlogController.testing());

