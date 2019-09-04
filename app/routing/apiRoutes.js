var surveyData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(app);
  });

  app.post("/api/friends", function(req, res) {
    if (friends.length < 10) {
      friends.push(req.body);
      res.json(true);
    } else {
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res) {
    friends.length = 0;

    res.json({ ok: true });
  });
};
