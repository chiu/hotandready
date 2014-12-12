var yelp = Meteor.npmRequire("yelp").createClient({
  consumer_key: process.env.KEY,
  consumer_secret: process.env.CON_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
});
