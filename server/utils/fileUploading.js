const express = require('express');
const AWS = require('aws-sdk');
const bluebird = require('bluebird');
const keys = require('../keys');

AWS.config.update({
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  secretAccessKey: keys.AWS_SECRET_ACCESS_KEY
});

AWS.config.setPromisesDependency(bluebird);

const s3 = new AWS.S3();

exports.fileUploading = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: 'buffer',
    Bucket: keys.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};
