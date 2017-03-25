
import clientRequest from '../lib/client';

module.exports = {
  getImport(req, res) {
    const importedData = clientRequest.getImport();
    res.status(200).json(importedData);
  },
  getAll(req, res) {
    const allOrganisation = clientRequest.getAllOrganisation();
    allOrganisation.then(orgData => res.status(200).json({ data: orgData }));
  },
  getCategory(req, res) {
    const catagories = clientRequest.getCategories();
    catagories.then(category => res.status(200).json({ data: category }));
  },
  getOrganisation(req, res) {
    const categoryName = req.params.category;
    const organisations = clientRequest.getOrganisation(categoryName);
    organisations.then(organisation => res.status(200).json({ data: organisation }));
  },
  getUsers(req, res) {
    const allUsers = clientRequest.getUsers();
    allUsers.then(users => res.status(200).json({ data: users }));
  },
};
