import Model from '../models/dbModel';

/* Save organisation Data */
const saveOrganisation = (organisationData) => {
  const organisation = new Model.AllOrganisation(organisationData);
  return organisation.save((error, organisation, affectedRow) => {
    if (error) {
      throw error;
    }
    return affectedRow;
  });
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
  return excuteQuery(Model.AllOrganisation.findByIdAndUpdate(_id, rest, options));
};

/* get all orgaisation data by there service*/
const organisation = serviceType =>
excuteQuery(Model.AllOrganisation.find(serviceType)
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
getData(Model.AllOrganisation.find()
.limit(20)
.sort('Organisation'));

/* return all system users except DB id */
const users = () =>
getData(Model.User.find()
.select('-_id'));

/* get distinct data */
const distinctData = fieldName =>
Model.AllOrganisation
.distinct(fieldName)
.sort();

/* get all service as category */
const services = () =>
Model.Service
.distinct('Service')
.sort();

/* get all distict postcode */
const postCode = fieldName =>
getData(Model.AllOrganisation.find(fieldName)
.distinct('Postcode'));

module.exports = {
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
