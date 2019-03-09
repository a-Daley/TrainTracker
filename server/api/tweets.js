const router = require('express').Router() 
const { key, secretKey, accessToken, accessSecret } = require('../../secrets')
module.exports = router

const Twitter = require('twitter')

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

};

router.get("/all", (req, res, next) => {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) throw error;
        res.send(tweets)
    })
})

router.get("/", (req, res, next) => {
  const queries = {
    from: 'NYCTSubway',
    q: req.query.q,
    result_type: 'recent'
  }

  client.get("search/tweets", queries, function (error, tweets, response) {
    if (error) throw error;
    res.send(tweets)
  })
})


  // var pageNo = parseInt(req.query.pageNo)
  // var pageSize = parseInt(req.query.pageSize)
  // //checking if page number is invalid
  // if (pageNo <= 0) {
  //   const response = {
  //     success: false,
  //     message: 'Invalid Page Number'
  //   };
  //   return res.status(200).json(response);
  // } else {
  //   //fetch data from database based on given page no and page size
  //   client.get('statuses/user_timeline', params, function (error, tweets, response) {
  //     if (error) throw error;
  //     const data = tweets
  //   }).then((tweets => {
  //       var index = (parseInt(pageNo - 1) * parseInt(pageSize)) + 1;
  //       var list = [];
  //       for (var i = parseInt(pageNo - 1); i < parseInt(pageSize) + 1; i++) {
  //         list.push({
  //         index: index,
  //         data: data[i]
  //       });
  //     }
  //     return response = {
  //       success: true,
  //       list: list
  //     }; 
  //   })).then(response => {
  //    return res.status(200).json(response); 
  //   })
    
  // }

  // })