const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  universityName: {
    type: String,
    minlength: 2,
  },
  facultyName: {
    type: String,
    minlength: 2,
  },
  commenters: [
    {
      person: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Person",
        autopopulate: {
          maxDepth: 1,
        },
      },
      comment: {
        type: String,
        minlength: 2,
      },
    },
  ],
});

PostSchema.plugin(require("mongoose-autopopulate"));
const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
