const Comment = require("../model/comment");
const Topic = require("../model/topic");
const User = require("../model/user");

module.exports = {
  createComment: async (args, req) => {
    try {
      const post = await Topic.findById(args.topicId);

      const comment = new Comment({
        //left is type, right is comment input
        topicComment: args.commentInput.topicComment,
        creater: req.userId,
        relatedTopic: post,
      });

      return comment.save();
    } catch (err) {
      throw err;
    }
  },

  comments: async () => {
    try {
      const comments = await Comment.find({});

      return comments;
    } catch (err) {
      throw err;
    }
  },
};