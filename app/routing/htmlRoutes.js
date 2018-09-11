module.exports = function(app, path) {
  //root/survey will take us to the survey
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })
  //root/anything else (chicken, bacon OR farley) will send file of home.html as response
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  })
}  