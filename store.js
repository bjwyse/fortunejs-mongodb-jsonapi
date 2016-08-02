import fortune from 'fortune';
import userModel from './models/user.js';
import postModel from './models/post.js';

const recordTypes = {
  user: userModel,
  post: postModel
};

const mongodbAdapter = require('fortune-mongodb');
const store = fortune(recordTypes, {
  adapter: [
    mongodbAdapter,
    {
      url: 'mongodb://localhost:27017/fortunejs-mongodb-jsonapi'
    }
  ]
});

module.exports = store;