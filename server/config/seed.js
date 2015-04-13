/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Listing = require('../api/listing/listing.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Listing.find({}).remove(function() {
  Listing.create({
    title: 'Test 1 English Club',
    subtitle: 'We can has spell good',
    description: 'Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant. Wafer marshmallow halvah. Lemon drops pie chocolate bar jelly wafer pastry. Gummies tiramisu candy lemon drops toffee oat cake sweet. Carrot cake cotton candy toffee pie cake. Cake chocolate cake topping marzipan tart chocolate bar gummies. Apple pie sugar plum jujubes ice cream. Macaroon gingerbread ice cream topping gummi bears sweet roll lollipop.',
    location: 'Stanky stank Blvd 45 N, Moscow, Russia',
    lat: '55.7560725',
    lng: '37.59863310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 1,
    approved: 1,
    classes: [{
      day: "Tuesday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    },{
      day: "Thursday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    }]
  },{
    title: 'Test 2 English Club',
    subtitle: 'Welcome to the jungle',
    description: 'Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant. Wafer marshmallow halvah. Lemon drops pie chocolate bar jelly wafer pastry. Gummies tiramisu candy lemon drops toffee oat cake sweet. Carrot cake cotton candy toffee pie cake. Cake chocolate cake topping marzipan tart chocolate bar gummies. Apple pie sugar plum jujubes ice cream. Macaroon gingerbread ice cream topping gummi bears sweet roll lollipop.',
    location: 'Ivillcrushyou St 85 S, Moscow, Russia',
    lat: '55.7660725',
    lng: '37.57863310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 1,
    approved: 1,
    classes: [{
      day: "Wednesday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    }]
  },{
    title: 'Test 3 English Club',
    subtitle: 'The best in the west',
    description: 'Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant. Wafer marshmallow halvah. Lemon drops pie chocolate bar jelly wafer pastry. Gummies tiramisu candy lemon drops toffee oat cake sweet. Carrot cake cotton candy toffee pie cake. Cake chocolate cake topping marzipan tart chocolate bar gummies. Apple pie sugar plum jujubes ice cream. Macaroon gingerbread ice cream topping gummi bears sweet roll lollipop.',
    location: 'Baldington Ave 45, Moscow, Russia',
    lat: '55.7460725',
    lng: '37.58863310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 1,
    approved: 1,
    classes: [{
      day: "Wednesday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    }]
  },{
    title: 'Test 4 English Club',
    subtitle: 'We have cookies',
    description: 'Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant. Wafer marshmallow halvah. Lemon drops pie chocolate bar jelly wafer pastry. Gummies tiramisu candy lemon drops toffee oat cake sweet. Carrot cake cotton candy toffee pie cake. Cake chocolate cake topping marzipan tart chocolate bar gummies. Apple pie sugar plum jujubes ice cream. Macaroon gingerbread ice cream topping gummi bears sweet roll lollipop.',
    location: 'Cookie Ln 85 N, Moscow, Russia',
    lat: '55.7460725',
    lng: '37.67763310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 1,
    approved: 1,
    classes: [{
      day: "Wednesday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    },{
      day: "Saturday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    }]
  },{
    title: 'Novokuznetskaya English Club',
    subtitle: '5 Groups and Counting',
    description: 'Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant. Wafer marshmallow halvah. Lemon drops pie chocolate bar jelly wafer pastry. Gummies tiramisu candy lemon drops toffee oat cake sweet. Carrot cake cotton candy toffee pie cake. Cake chocolate cake topping marzipan tart chocolate bar gummies. Apple pie sugar plum jujubes ice cream. Macaroon gingerbread ice cream topping gummi bears sweet roll lollipop.',
    location: 'Pereulok blah St 45, Moscow, Russia',
    lat: '55.7360725',
    lng: '37.61863310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 0,
    approved: 0,
    classes: [{
      day: "Wednesday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    }]
  },{
    title: 'Rechnoi English Club',
    subtitle: '3 Groups to Choose From',
    description: 'Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant. Wafer marshmallow halvah. Lemon drops pie chocolate bar jelly wafer pastry. Gummies tiramisu candy lemon drops toffee oat cake sweet. Carrot cake cotton candy toffee pie cake. Cake chocolate cake topping marzipan tart chocolate bar gummies. Apple pie sugar plum jujubes ice cream. Macaroon gingerbread ice cream topping gummi bears sweet roll lollipop.',
    location: 'Ugol 86 Ventura Blvd, Moscow, Russia',
    lat: '55.7360725',
    lng: '37.65993310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 0,
    approved: 0,
    classes: [{
      day: "Wednesday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    },{
      day: "Saturday",
      start_time: "2015-04-13T00:00:37.493Z",
      end_time: "2015-04-13T01:00:37.501Z",
      curriculum: "Halvah toffee jelly beans croissant. Chocolate cake sweet ice cream. Tart liquorice chocolate cake jelly beans tart. Sweet pastry dessert carrot cake macaroon lollipop croissant croissant."
    }]
  }, function() {
      console.log('finished populating listings');
    }
  );
});