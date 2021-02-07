const { db } = require("../models/workout");

const app = express();

module.exports = function(app){


app.get("/api/workouts", (res, req) => {
    db.find({}).then(function(data) {
        res.json(data);
      })
      .catch(function(err){
          console.log(err);
          res.json(404);
      })
});
app.post("/api/workouts", (res, req) => {
    db.create({}).then(function(data) {
        res.json(data);
      })
      .catch(function(err){
          console.log(err);
          res.json(404);
      })
});
}