const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const multerMiddlewere = require('./middlewares/multer');

const Post = require('./models/Post');

const routes = Router();

routes.get('/posts', async (request, response) => {
  const posts = await Post.find();
  return response.json(posts);
});

routes.post('/posts', multerMiddlewere, multer(multerConfig).single('file'), async (request, response) => {
  // console.log(request.file);

  const {
    originalname: name, size, key, location: url = '',
  } = request.file;

  const post = await Post.create({
    name,
    size,
    key,
    url,
  });

  response.status(200).json(post);
});

routes.delete('/posts/:id', async (request, response) => {
  const post = await Post.findById(request.params.id);

  await post.remove();

  return response.send();
});
module.exports = routes;
