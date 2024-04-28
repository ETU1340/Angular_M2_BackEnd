let Teacher = require("../model/teacher.model");

function checkConnection(req, res) {
  const name = req.body.name;
  const mdp = req.body.mdp;
  Teacher.findOne(
    { "login.username": name, "login.password": mdp },
    (err, teacher) => {
      if (teacher) {
        res.send(teacher);
      } else {
        res.send(false);
      }
    }
  );
}

module.exports = {
  checkConnection,
};
