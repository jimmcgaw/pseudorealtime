var redis = require('redis');

var client = redis.createClient();

client.on('connect', function(){
  console.log('connected');
})

client.set('name', 'Jim');
client.expire('name', 30);

client.get('name', function(err, reply){
  console.log("Hello, " + reply);
  client.quit();

})
