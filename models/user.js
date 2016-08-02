export default {
  name: {type: String},

  // Following and followers are inversely related (many-to-many)
  following: {link: 'user', inverse: 'followers', isArray: true},
  followers: {link: 'user', inverse: 'following', isArray: true},

  // Many-to-one relationship of user posts to post author x
  posts: {link: 'post', inverse: 'author', isArray: true},
}