const { Router } = require('express');

const PostController = require('./app/controllers/PostController');

const routes = Router();

const upload = require('./middlewares/upload');

routes.get('/posts', PostController.index);
routes.post('/posts', upload, PostController.store);
routes.delete('/posts/:id', PostController.delete);

module.exports = routes;
