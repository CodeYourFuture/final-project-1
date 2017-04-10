import path from 'path';
import fs from 'fs';
import OrganisationSchema from './organisationSchema';

/* migrate initial data to mongo db*/
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

/* Save organisation Data */
const saveOrganisation = (organisationData) => {
  const organisationModel = new OrganisationSchema.AllOrganisation(organisationData);
  return organisationModel.save();
};

/* Handle update and get all orgaisation data */
const excuteQuery = runRequest =>
runRequest.exec((error) => {
  if (error) {
    throw error;
  }
  return true;
});

/* update organisation data */
const updateOrganisation = (organisationData) => {
  const { _id, ...rest } = organisationData;
  const options = { new: false };
  return excuteQuery(OrganisationSchema.AllOrganisation.findByIdAndUpdate(_id, rest, options));
};

/* get all orgaisation data by there service*/
const organisation = serviceType =>
excuteQuery(OrganisationSchema.AllOrganisation.find(serviceType)
.limit(20)
.sort('Organisation'));

/* excute request return organisation data */
const getData = request =>
request.exec((error, data) => {
  if (error) {
    throw error;
  }
  return data;
});

/* return all organisation data */
const allOrganisation = () =>
getData(OrganisationSchema.AllOrganisation.find()
.limit(20)
.sort('Organisation'));

/* return all system users except DB id */
const users = () =>
getData(OrganisationSchema.User.find()
.select('-_id'));

/* get distinct data */
const distinctData = fieldName =>
OrganisationSchema.AllOrganisation
.distinct(fieldName)
.sort();

/* get all service as category */
const services = () =>
OrganisationSchema.Service
.distinct('Service')
.sort();

/* get all distict postcode */
const postCode = fieldName =>
getData(OrganisationSchema.AllOrganisation.find(fieldName)
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
