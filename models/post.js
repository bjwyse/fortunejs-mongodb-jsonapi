export default {
  message: { type: String },

  // One-to-many / many-to-one relationship of posts to replies ss
  'in-reply-to': { link: 'post', inverse: 'replies' },
  replies: { link: 'post', inverse: 'in-reply-to', isArray: true },

  // One-to-many relationship of post author to user posts
  author: { link: 'user', inverse: 'posts' },
}