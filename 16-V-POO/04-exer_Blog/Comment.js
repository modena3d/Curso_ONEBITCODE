class Comment {
  constructor(usarname, content) {
    this.usarname = usarname;
    this.content = content;
    this.createAt = new Date();
  }
}

module.exports = Comment;
