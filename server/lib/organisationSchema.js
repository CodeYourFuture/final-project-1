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
  Day: [],
  Tel: [],
  Process: [],
  Postcode: String,
  Services: String,
  Borough: String,
}, { versionKey: false });

const User = new Schema({
  userName: String,
  Email: String,
  password: String,
  Role: String,
}, { versionKey: false });

const Service = new Schema({
  Service: String,
}, { versionKey: false });

const Services = mongoose.model('Service', Service);
const Users = mongoose.model('User', User);
const Organisation = mongoose.model('organisation', organisationSchema);

module.exports = {
  AllOrganisation: Organisation,
  User: Users,
  Service: Services,
};
