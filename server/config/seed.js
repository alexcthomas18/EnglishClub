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
    title: 'test1',
    subtitle: 'This is a subtitle',
    description: 'This is a description',
    location: 'lexington palace street lexington, lexingtonville, USA',
    lat: '55.7460725',
    lng: '37.58863310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 18,
    approved: 1,
    classes: [{
      day: "Wednesday",
      start_time: "6pm",
      end_time: "7pm",
      curriculum: "This is a curriculum"
    }]
  },{
    title: 'test2',
    subtitle: 'This is a subtitle',
    description: 'This is a description',
    location: 'lexington palace street lexington, lexingtonville, USA',
    lat: '55.7460725',
    lng: '37.58863310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 18,
    approved: 1,
    classes: [{
      day: "Wednesday",
      start_time: "6pm",
      end_time: "7pm",
      curriculum: "This is a curriculum"
    }]
  },{
    title: 'test3',
    subtitle: 'This is a subtitle',
    description: 'This is a description',
    location: 'lexington palace street lexington, lexingtonville, USA',
    lat: '55.7460725',
    lng: '37.58863310000004',
    city: 'Moscow',
    country: 'Russia',
    clicks: 18,
    approved: 1,
    classes: [{
      day: "Wednesday",
      start_time: "6pm",
      end_time: "7pm",
      curriculum: "This is a curriculum"
    }]
  }, function() {
      console.log('finished populating listings');
    }
  );
});