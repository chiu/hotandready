


var yelp = Meteor.npmRequire("yelp").createClient({

});

Meteor.publish('booksSearch', function(query) {
    var self = this;

    try {
      yelp.search({term: "food", location: "Montreal", limit: 20}, function(error, data) {
        console.log(error);
        console.log(data);
      });
    // console.log(response.data);
    //
    // _.each(response.data.items, function(item) {
    //   var doc = {
    //     thumb: item.volumeInfo.imageLinks.smallThumbnail,
    //     title: item.volumeInfo.title,
    //     link: item.volumeInfo.infoLink,
    //     snippet: item.searchInfo && item.searchInfo.textSnippet
    //   };
    //
    //   self.added('books', Random.id(), doc);
    // });

    self.ready();

  } catch(error) {
    console.log(error);
  }
});


yelp.search({term: "food", location: "Montreal", limit: 10}, function(error, data) {
  console.log(error);
  console.log(data);
});
