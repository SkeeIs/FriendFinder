# FriendFinder

A full-stack application deployed to heroku for making new friends! Enter your name & a photo of yourself then answer the 10 questions & we will match you to the most similar personality.

* Powered by Javascript, jquery, node.js, expess package, body-parser package, Heroku deployment, html, bootstrap
* [FriendFinder on Heroku](https://tranquil-everglades-65874.herokuapp.com/api/friends)

### Image Preview of Store Functionality

<!-- take a picture of the image and add it into the readme  -->
* Homepage ![Homepage](https://i.imgur.com/frBEJjd.png)
* Survey Page ![Survey](https://i.imgur.com/IsFYK0u.png)
* Survey + Modal ![Survey page with modal](https://i.imgur.com/H58cMBZ.png)
* API Page ![an object](https://i.imgur.com/FHiGtL2.png)

## Prerequisites

This web application has been deployed to Heroku, therefore you may use it with full functionality as a browser based web application!

## Technology Used

* **Javascript** - the primary scripting logic powering the game
* **Node.js** - allowing us to use an assortment of node packages
* **Express** -allowing us to create pointers at certain urls to have specific work done or to return certain data or html
* **Bootstrap** -Light styling & formatting


# Code Snippets

<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Getting a little bit nutty with an express post method

```
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

```

# Learning points

<!-- Learning points where you would write what you thought was helpful -->
* Routing routes to the root of the route (I once knew a brute, mute, newt in a suit that played the flute)
* Putting together a lot of the small pieces we have learned into one fully functioning application
* Learning how html elements can depend on the server side logic & routing


## Authors

* **Taylor Skeels** - [GitHub](https://github.com/skeeis)
