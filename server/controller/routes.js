
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
  getCategory(req, res) {
    const categories = clientRequest.getCategories('Category');
    categories.then(category => res.status(200).json({ data: category }));
  },
  getOrganisation(req, res) {
    const categoryName = req.params.category;
    const organisations = clientRequest.getOrganisation({ Category: categoryName });
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
    const postCode = new RegExp(req.query.Postcode, 'i');
    const day = new RegExp(req.query.Day, 'i');
    const services = new RegExp(req.query.Services, 'i');
    const queryStatement = { $and: [{ Postcode: postCode }, { Day: day }, { Services: services }] };
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
    if (clientRequest.saveOrganisationData(organisation)) {
      res.status(200).json({ Success: 'Saved Succesfully' });
    } else {
      res.status(500).json({ Success: 'Not Saved Succesfully' });
    }
  },
};

