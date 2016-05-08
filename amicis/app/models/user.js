var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
	name: String,
	senha : String

});

var Login = mongoose.model('Login', loginSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Login.findOne({ 'name': 'gi', 'senha':'ola'}, function (err, results) {
  if (err) return handleError(err);
  console.log(results.name) // Space Ghost is a talk show host.
  console.log(results.senha)
})

module.exports = mongoose.model('Login', loginSchema);