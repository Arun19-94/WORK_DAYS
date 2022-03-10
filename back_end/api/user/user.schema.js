var mongoose = require('mongoose');
var Promise     = require("bluebird");
var { Schema } = mongoose;

var DB_NAME = 'user';
var MySchema = new mongoose.Schema()

var fields = {
    name: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String
    }
}
var collection =
  { collection: DB_NAME };

var schema = new Schema(fields, collection);
// schema.plugin(timestamps);
// schema.plugin(paginate);

var model = mongoose.model(DB_NAME, schema);
Promise.promisifyAll(model);

module.exports = model;
// module.exports.col = DB_NAME;