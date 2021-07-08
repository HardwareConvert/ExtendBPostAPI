const axios = require("axios");

exports.findALL = (req, res) => {
  // call the json placeholder API to get a list of blog posts
  axios.get("https://jsonplaceholder.typicode.com/posts").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  // call the json placeholder API to get a list of blog posts
  axios
    .get("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
