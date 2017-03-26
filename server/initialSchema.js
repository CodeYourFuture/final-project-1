
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// create a schema
const organisationSchema = new Schema({
  Area: String,
  Organisation: String,
  Clients: [],
  Category: String,
  Email: String,
  Website: String,
  Tel: [],
  Process: [],
  Postcode: String,
  Services: String,
  Borough: String,
}, { versionKey: false });

const mainSchema = new Schema({
  data: [organisationSchema],
}, { versionKey: false });

// the schema is useless so far
// we need to create a model using it
const organisation = mongoose.model('organisation', mainSchema);

// make this available to our organisation in our Node applications
module.exports = organisation;
