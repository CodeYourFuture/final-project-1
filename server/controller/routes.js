import persistance from './persistance';

module.exports = {
  getImport(req, res) {
    const importedData = persistance.getImport();
    res.status(200).json(importedData);
  },
  getAllOrganisation(req, res) {
    const orgList = persistance.getAllOrganisation();
    orgList.then(list => res.status(200).json({ data: list }));
  },
  getServices(req, res) {
    const services = persistance.getServices();
    services.then(service => res.status(200).json({ data: service }));
  },
  getOrganisation(req, res) {
    const serviceName = new RegExp(req.params.service, 'i');
    const organisations = persistance.getOrganisation({ Category: serviceName });
    organisations.then(organisation => res.status(200).json({ data: organisation }));
  },
  getUsers(req, res) {
    const allUsers = persistance.getUsers();
    allUsers.then(users => res.status(200).json({ data: users }));
  },
  getPostcode(req, res) {
    const query = new RegExp(req.query.Postcode, 'i');
    const postcodes = persistance.getPostcode({ Postcode: { $regex: query } });
    postcodes.then(codes => res.status(200).json({ data: codes }));
  },
  getSearchedOrganisation(req, res) {
    const postCode = new RegExp(req.query.postcode, 'i');
    const day = new RegExp(req.query.day, 'i');
    const services = new RegExp(req.query.service, 'i');
    const queryStatement = { $and: [{ Postcode: postCode }, { Day: day }, { Category: services }] };
    const organisations = persistance.getSearchedOrganisation(queryStatement);
    organisations.then(organisation => res.status(200).json({ data: organisation }));
  },
  getBorough(req, res) {
    const boroughs = persistance.getBoroughs('Borough');
    boroughs.then(borough => res.status(200).json({ data: borough }));
  },
  getArea(req, res) {
    const areas = persistance.getArea('Area');
    areas.then(area => res.status(200).json({ data: area }));
  },
  postOrganisation(req, res) {
    const organisation = req.body;
    const saveStatus = persistance.saveOrganisationData(organisation);
    saveStatus.then(() =>
      res.status(200))
    .catch(() =>
      res.status(500));
  },
  putOrganisation(req, res) {
    const query = req.body;
    const updateStatus = persistance.putOrganisation(query);
    if (updateStatus) {
      res.status(200).json({ Success: 'Update Succesfully' });
    } else {
      res.status(500).json({ Success: 'Not Update Succesfully' });
    }
  },
};
