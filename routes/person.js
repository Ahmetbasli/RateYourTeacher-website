const PersonService = require("../servers/person-service");
const PostService = require("../servers/post-service");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  const people = await PersonService.findAll();
  res.render("list", { items: people });
});

router.get("/all/json", async (req, res) => {
  const people = await PersonService.findAll();
  res.send(people);
});

router.get("/:id", async (req, res) => {
  const person = await PersonService.find(req.params.id);
  res.send(person);
});

router.post("/", async (req, res) => {
  const user = await PersonService.add(req.body);
  res.send(user);
});
router.delete("/:id", async (req, res) => {
  const person = await PersonService.del(req.params.id);
  res.send(person);
});
router.get("/:id/find-peers-over-20", async (req, res) => {
  const person = await PersonService.find(req.params.id);
  const peope = await person.findPeersOver20();
  res.send(peope);
});

module.exports = router;
