import clientRequest from '../lib/client';

module.exports = {
  getImport(req, res) {
    const importedData = clientRequest.getImport();
    res.status(200).json(importedData);
  },
  getAllOrganisation(req, res) {
    const allOrganisation = clientRequest.getAllOrganisation();
    allOrganisation.then(orgData => res.status(200).json({ data: orgData }));
  },
  getServices(req, res) {
    const services = clientRequest.getServices();
    services.then(service => res.status(200).json({ data: service }));
  },
  getOrganisation(req, res) {
    const serviceName = new RegExp(req.params.service, 'i');
    const organisations = clientRequest.getOrganisation({ Category: serviceName });
    organisations.then(organisation => res.status(200).json({ data: organisation }));
  },
  getUsers(req, res) {
    const allUsers = clientRequest.getUsers();
    allUsers.then(users => res.status(200).json({ data: users }));
  },
  getPostcode(req, res) {
    const query = new RegExp(req.query.Postcode, 'i');
    const postcodes = clientRequest.getPostcode({ Postcode: { $regex: query } });
    postcodes.then(codes => res.status(200).json({ data: codes }));
  },
  getSearchedOrganisation(req, res) {
    const postCode = new RegExp(req.query.postcode, 'i');
    const day = new RegExp(req.query.day, 'i');
    const services = new RegExp(req.query.service, 'i');
    const queryStatement = { $and: [{ Postcode: postCode }, { Day: day }, { Category: services }] };
    const organisations = clientRequest.getSearchedOrganisation(queryStatement);
    organisations.then(organisation => res.status(200).json({ data: organisation }));
  },
  getBorough(req, res) {
    const boroughs = clientRequest.getBoroughs('Borough');
    boroughs.then(borough => res.status(200).json({ data: borough }));
  },
  getArea(req, res) {
    const areas = clientRequest.getArea('Area');
    areas.then(area => res.status(200).json({ data: area }));
  },
  postOrganisation(req, res) {
    const organisation = req.body;
    const saveStatus = clientRequest.saveOrganisationData(organisation);
    saveStatus.then(() =>
      res.status(200))
    .catch(() =>
      res.status(500));
  },
  putOrganisation(req, res) {
    const query = req.body;
    const updateStatus = clientRequest.putOrganisation(query);
    if (updateStatus) {
      res.status(200).json({ Success: 'Update Succesfully' });
    } else {
      res.status(500).json({ Success: 'Not Update Succesfully' });
    }
  },
};
