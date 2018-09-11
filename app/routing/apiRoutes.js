//need access to our all users in the friends array in friends.js
var allFriends= require("../data/friends.js");

module.exports = function(app, path) {
  //express get method to the /api/friends route which we are returning the friends array from friends.js as response
  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });  

  //express post method for updating the friends array with a new friend object
  app.post("/api/friends", function(req, res) {
    newFriend = req.body;
    console.log(JSON.stringify(newFriend));
    
    //logic to compare user answers & track the difference between answers
    var bestMatch;
    var difference = 50;
    var tempDiff;
    //iterate through all the user profiles we have
    for (var i = 0; i < allFriends.length; i++) {
        //resetting tempDiff to 0 for each new comparison of answers
        tempDiff = 0;
      //nested for loop (4thePwn) to iterate through the 10 answers because these are what we actually want to compare
      for (var j = 0; j < 10; j++) {
        //tempDiff equals the running tally of the absolute value of current user's answer for question index of j minus current profile ([i]) answer for question index of j
        tempDiff += Math.abs(newFriend.answers[j] - allFriends[i].answers[j]);
        //console logging all the info. important line for me to debug because it lead me to throw the logic of compare into a function because it was running asynchronously ("Q:0" would log, then "difference:", then "current best match:", then "Q:1"-"Q:9")
        console.log("friend: " + allFriends[i].name + "    Q:" + j + "  absolute difference: " + tempDiff);
        
        compare(tempDiff, allFriends[i]);
        
      }
    }

    function compare(num, obj) {
        if (num < difference) {
          difference = num;
          console.log("difference: " + difference);
          bestMatch = obj;
          console.log("current best match: " + JSON.stringify(bestMatch));
        }
      }
    //push the new user's profile to our array stored in friends.js
    allFriends.push(newFriend);
    //respond to our ajax post call with the bestMatch object
    res.json(bestMatch);
  });
};