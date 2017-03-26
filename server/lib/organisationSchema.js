import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// create a schema
const organisationSchema = new Schema({
  Area: String,
  Organisation: String,
  Clients: [],
  Catagory: String,
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
  Role: String,
}, { versionKey: false });

const Users = mongoose.model('User', User);
const Organisation = mongoose.model('organisation', organisationSchema);

module.exports = {
  AllOrganization: Organisation,
  User: Users,
};
