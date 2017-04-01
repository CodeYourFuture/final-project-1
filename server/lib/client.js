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
    orgaisationModel = new OrganisationSchema.AllOrganisation(organisation);
    orgaisationModel.save((error) => {
      if (error) {
        throw error;
      }
    });
    return organisation;
  });
};
const saveOrganisation = (queryStatement) => {
  const organisationModel = new OrganisationSchema.AllOrganisation(queryStatement);
  return organisationModel.save((error) => {
    if (error) {
      throw error;
    } else {
      return true;
    }
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
getData(OrganisationSchema.AllOrganisation.find()
.limit(2)
.sort('Organisation'));

const users = () =>
getData(OrganisationSchema.User.find()
.select('-_id'));

const distinctData = queryStatement =>
OrganisationSchema.AllOrganisation
.distinct(queryStatement)
.sort();

const organisation = queryStatement =>
getData(OrganisationSchema.AllOrganisation.find(queryStatement)
.limit(1)
.sort('Organisation'));

const postCode = queryStatement =>
getData(OrganisationSchema.AllOrganisation.find(queryStatement)
.distinct('Postcode'));

module.exports = {
  getImport: migrateData,
  getAllOrganisation: allOrganisation,
  getUsers: users,
  getCategories: distinctData,
  getOrganisation: organisation,
  getPostcode: postCode,
  getSearchedOrganisation: organisation,
  getBoroughs: distinctData,
  getArea: distinctData,
  saveOrganisationData: saveOrganisation,
};
