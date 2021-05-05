const mongoose = require("mongoose");
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  postsShared: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  postsCommented: [
    {
      teacher: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Post",
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
PersonSchema.methods.findPeersOver20 = function () {
  return PersonModel.find({
    age: {
      $gte: 20,
    },
  });
};

PersonSchema.plugin(require("mongoose-autopopulate"));

const PersonModel = mongoose.model("Person", PersonSchema);

module.exports = PersonModel;
