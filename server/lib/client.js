import path from 'path';
import fs from 'fs';
import OrganisationSchema from './organisationSchema';

const migrateData = () => {
  const importedFilePath = path.resolve(__dirname, '..', '../data', 'organisation.json');
  const importedData = fs.readFileSync(importedFilePath);
  let orgaisationModel;
  const userModel = new OrganisationSchema.User({
    userName: 'Robot',
    Email: 'user@gmail.com',
    Role: 'Administrator',
  });
  userModel.save();
  return JSON.parse(importedData).map((organisation) => {
    orgaisationModel = new OrganisationSchema.AllOrganization(organisation);
    orgaisationModel.save((error) => {
      if (error) {
        throw error;
      }
    });
    return organisation;
  });
};

const getData = query =>
query.exec((error, data) => {
  if (error) {
    throw error;
  }
  return data;
});

const allOrganisation = () =>
getData(OrganisationSchema.AllOrganization.find()
.select('-_id'));

const users = () =>
getData(OrganisationSchema.User.find()
.select('-_id'));

const categories = () =>
OrganisationSchema.AllOrganization.distinct('Catagory');

const organisation = catagoryName =>
getData(OrganisationSchema.AllOrganization.find({ Catagory: catagoryName })
.select('-_id'));

module.exports = {
  getImport: migrateData,
  getAllOrganisation: allOrganisation,
  getUsers: users,
  getCategories: categories,
  getOrganisation: organisation,
};
