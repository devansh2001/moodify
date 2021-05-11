var express = require('express');
var router = express.Router();

const emotionClassifierURL = '';
const spotifyIntegratorServiceURL = '';
const moodToScores = {
  'fun': {
    'danceability': 0.9
  }
};

/* GET home page. */
router.post('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  let query = req.body['queryResult']['queryText'];
  console.log(query);
  // TO DO
  
  // Send query to Emotion Classifier and receive mood
  let body = {
    'query': query
  };
  
  let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  let apiResponse = null;
  fetch(emotionClassifierURL, {
    body: body,
    method: 'GET',
    headers: headers
  })
  .then(data => data.json())
  .then(response => apiResponse = response)
  .catch(exception => console.log(exception));

  const mood = apiResponse['mood'];

  // Translate mood to scores
  const scores = moodToScores[mood];

  // Send mood to Spotify service
  fetch(spotifyIntegratorServiceURL, {
    body: body,
    method: 'GET',
    headers: headers
  })
  .then(data => data.json())
  .then(response => apiResponse = response)
  .catch(exception => console.log(exception));
  console.log("This is working yay");
  console.log(apiResponse['song'])
  res.send('This is working!');
});

module.exports = router;
