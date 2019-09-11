var surveyData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(app);
  });

  app.post("/api/friends", function(req, res) {
    if (surveyData.length < 10) {
      surveyData.push(req.body);
      res.json(true);
    } else {
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res) {
    surveyData.length = 0;

    res.json({ ok: true });
  });
};
