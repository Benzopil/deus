const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showreelsSchema = new Schema({
  name: { type: String, required: true },
  year: { type: String },
  video: { type: Object },
});

showreelsSchema.set('toJSON', { virtuals: true });
showreelsSchema.set('toObject', { virtuals: true });
showreelsSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

module.exports = mongoose.model('Showreels', showreelsSchema);