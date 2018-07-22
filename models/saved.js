const mg = require('mongoose');
const Schema = mg.Schema;

const sS = new Schema({
  title: {
    type : String,
    unique : true,
  },
  date : Date,
  link : String
});

const S = mg.model("saved",sS);

module.exports = S;