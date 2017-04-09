import path from 'path';
import fs from 'fs';
import OrganisationSchema from './organisationSchema';

const migrateData = () => {
  const importedFilePath1 = path.resolve(__dirname, '..', '../data', 'organisation.json');
  const importedFilePath2 = path.resolve(__dirname, '..', '../data', 'service.json');
  const importedData1 = fs.readFileSync(importedFilePath1);
  const importedData2 = fs.readFileSync(importedFilePath2);
  let orgaisationModel;
  let serviceModel;
  const userModel = new OrganisationSchema.User({
    userName: 'Robot',
    Email: 'user@gmail.com',
    Role: 'Administrator',
  });
  userModel.save();
  /* Import Organisation data*/
  JSON.parse(importedData1).map((organisation) => {
    orgaisationModel = new OrganisationSchema.AllOrganisation(organisation);
    orgaisationModel.save((error) => {
      if (error) {
        throw error;
      }
    });
    return organisation;
  });
  /* Import services*/
  return JSON.parse(importedData2).map((service) => {
    serviceModel = new OrganisationSchema.Service(service);
    serviceModel.save((error) => {
      if (error) {
        throw error;
      }
    });
    return service;
  });
};

const saveOrganisation = (queryStatement) => {
  const organisationModel = new OrganisationSchema.AllOrganisation(queryStatement);
  return organisationModel.save();
};

const excuteQuery = queryStatement =>
queryStatement.exec((error) => {
  if (error) {
    throw error;
  }
  return true;
});

const updateOrganisation = (queryStatement) => {
  const { _id, ...rest } = queryStatement;
  const options = { new: false };
  return excuteQuery(OrganisationSchema.AllOrganisation.findByIdAndUpdate(_id, rest, options));
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

const services = () =>
OrganisationSchema.Service
.distinct('Service')
.sort();

const organisation = queryStatement =>
excuteQuery(OrganisationSchema.AllOrganisation.find(queryStatement)
.limit(4)
.sort('Organisation'));

const postCode = queryStatement =>
getData(OrganisationSchema.AllOrganisation.find(queryStatement)
.distinct('Postcode'));

module.exports = {
  getImport: migrateData,
  getAllOrganisation: allOrganisation,
  getUsers: users,
  getServices: services,
  getOrganisation: organisation,
  getPostcode: postCode,
  getSearchedOrganisation: organisation,
  getBoroughs: distinctData,
  getArea: distinctData,
  saveOrganisationData: saveOrganisation,
  putOrganisation: updateOrganisation,
};
