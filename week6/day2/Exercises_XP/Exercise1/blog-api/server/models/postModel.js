const db = require('../config/db');

const Post = {
  getAll: () => db('posts').select('*'),
  getById: (id) => db('posts').where({ id }).first(),
  create: (data) => db('posts').insert(data).returning('*'),
  update: (id, data) => db('posts').where({ id }).update(data).returning('*'),
  delete: (id) => db('posts').where({ id }).del()
};

module.exports = Post;
