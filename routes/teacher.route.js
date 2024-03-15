let Teacher = require("../model/teacher.model");

// Récupérer tous les assignments (GET)
function checkConnection(req, res) {
  console.log('tonga');
  console.log(req.body);
  name = req.body.name;
  mdp = req.body.mdp;
  Teacher.findOne({"name":name,"mdp":mdp} ,(err,teacher) => {
      if (teacher) {
        res.send(teacher);
      } else {
        res.send(false);
      }   
    });
}

module.exports = {
  checkConnection,
};
