const Datastore = require('nedb');
const db = new Datastore({
  filename: 'printers.db',
  autoload: true
});

const data = [
  {
    "id": 1,
    "owner": 1,
    "location": [42.052936, -87.679330],
    "active": true,
  },
  {
    "id": 2,
    "owner": 2,
    "location": [42.055645, -87.679224],
    "active": true,
  },
  {
    "id": 3,
    "owner": 2,
    "location": [42.056968, -87.676241],
    "active": false,
  },
  {
    "id": 4,
    "owner": 3,
    "location": [42.054212, -87.676241],
    "active": false,
  }
];

db.insert(data, function(error) {
  if (error) console.log(error);
  console.log('Sample data loaded!');
});
