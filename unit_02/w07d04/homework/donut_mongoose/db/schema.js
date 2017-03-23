//requirements: require mongoose
var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;

mongoose.Promise  = global.Promise;

//create your donut schema:
var DonutSchema = new Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
});

var DonutModel = mongoose.model('Donut', DonutSchema);
//export your donut with module.exports()
module.exports = {
  Donut: DonutModel
}
