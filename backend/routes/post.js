const PersonService = require("../servers/person-service");
const PostService = require("../servers/post-service");
const CommentService = require("../servers/comment-service");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  const teachers = await PostService.findAll();

  res.render("list", { items: teachers });
});

router.get("/all/json", async (req, res) => {
  const teachers = await PostService.findAll();

  res.send(teachers);
});

router.get("/:id", async (req, res) => {
  const teacher = await PostService.find(req.params.id);

  res.send(teacher);
});

router.post("/", async (req, res) => {
  const teacher = await PostService.add(req.body);

  res.send(teacher);
});
router.post("/:id", async (req, res) => {
  // creating new object like {person:... and comment:}
  const teacher = await PostService.find(req.params.id);
  const person = await PersonService.find(req.body.person_id);
  const comment = req.body.comment;
  console.log("This massage from post for sending object");
  /* console.log(comment);
  console.log(person);
  console.log(teacher); */
  CommentService.createComment(person, teacher, comment);

  res.send("working or not ");
});
router.delete("/:id", async (req, res) => {
  const teacher = await PostService.del(req.params.id);

  res.send(teacher);
});

module.exports = router;
