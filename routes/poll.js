const route = require("express").Router();
const Votes = require("../models/votes");

route.get("/", (req, res) => {
  Votes.find({})
    .then(data => res.send(data))
    .catch(e => res.send(e));
});

route.post("/", (req, res) => {
  console.log(req.body);
  const newVote = {
    os: req.body.os,
    count: 1
  };

  //Saving it to db
  new Votes(newVote)
    .save()
    .then(data => res.send(`Succesfully added to databse`))
    .catch(e => res.send(`Theres an error - ${e}`));
});

module.exports = route;
