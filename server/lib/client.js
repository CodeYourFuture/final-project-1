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
.select('-_id')
.sort('Organisation'));

const users = () =>
getData(OrganisationSchema.User.find()
.select('-_id'));

const categories = () =>
OrganisationSchema.AllOrganization.distinct('Category');

const organisation = queryStatement =>
getData(OrganisationSchema.AllOrganization.find(queryStatement)
.select('-_id')
.sort('Organisation'));

const postCode = query =>
getData(OrganisationSchema.AllOrganization.find(query)
.distinct('Postcode'));

module.exports = {
  getImport: migrateData,
  getAllOrganisation: allOrganisation,
  getUsers: users,
  getCategories: categories,
  getOrganisation: organisation,
  getPostcode: postCode,
  getSearchedOrganisation: organisation,
};
