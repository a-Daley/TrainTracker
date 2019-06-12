const router = require('express').Router() 
const { key, secretKey, accessToken, accessSecret } = require('../../secrets')
module.exports = router;

const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: key,
  consumer_secret: secretKey,
  access_token_key: accessToken,
  access_token_secret: accessSecret
});
 
const params = { 
  screen_name: 'NYCTSubway',
  exclude_replies: true,
  count: 100,
  tweet_mode: 'extended'
};

router.get("/all", (req, res, next) => {
    client.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (error) throw error;
        res.send(tweets)
    })
})

router.get("/", (req, res, next) => {
  const queries = {
    from: 'NYCTSubway',
    q: req.query.q,
    result_type: 'recent',
    tweet_mode: 'extended'
  }

  client.get("search/tweets", queries, function (error, tweets, response) {
    if (error) throw error;
    res.send(tweets.statuses)
  })
})

