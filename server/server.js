var yelp = Meteor.npmRequire("yelp").createClient({

});

Meteor.publish('foodsSearch', function(query) {
    var self = this;
    try {
      yelp.search({term: query, location: "New York", limit: 20}, function(error, data) {
        // console.log(error);
        // console.log(data);

        _.each(data.businesses, function(item) {
          console.log(item.name);
          var doc = {
            title: item.name,
            image: item.image_url,
            rating: item.rating_img_url
          };

          self.added('foods', Random.id(), doc);

        });
      });
    // console.log(response.data);
    //

    //
    // });

    self.ready();

  } catch(error) {
    console.log(error);
  }
});
