const Post = require('../models/Post');

class PostController {
  async store(request, response) {
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
  }

  async delete(request, response) {
    const post = await Post.findById(request.params.id);

    await post.remove();

    return response.sendStatus(204);
  }

  async index(resquest, response) {
    const posts = await Post.find();
    return response.json(posts);
  }
}

module.exports = new PostController();
