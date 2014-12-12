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
          // var doc = {
          //   thumb: item.volumeInfo.imageLinks.smallThumbnail,
          //   title: item.volumeInfo.title,
          //   link: item.volumeInfo.infoLink,
          //   snippet: item.searchInfo && item.searchInfo.textSnippet
          // };


        });
      });
    // console.log(response.data);
    //

    //
    //   self.added('books', Random.id(), doc);
    // });

    self.ready();

  } catch(error) {
    console.log(error);
  }
});
