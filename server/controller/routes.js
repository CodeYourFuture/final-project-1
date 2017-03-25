
import clientRequest from '../lib/client';

module.exports = {
  getAll(req, res) {
    const allOrganisation = clientRequest.getAllOrganisation();
    allOrganisation.then(orgData => res.status(200).json({ data: orgData }));
  },
  getCategory(req, res) {
    const catagories = clientRequest.getCategories();
    catagories.then(category => res.status(200).json({ data: category }));
  },
  getOrganisation(req, res) {
    const categoryName = req.body;
    const organisation = clientRequest.getOrganisation(categoryName);
  },
};
