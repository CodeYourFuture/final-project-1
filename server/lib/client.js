import organizationSchema from './onlyOrg';

const getData = query =>
query.exec((error, data) => {
  if (error) {
    throw error;
  }
  return data;
});

const allOrganisation = () =>
getData(organizationSchema.AllOrganization.find()
.select('-_id'));

const categories = () =>
organizationSchema.AllOrganization.distinct('Catagory');

const organisation = catagoryName =>
getData(organizationSchema.AllOrganization.find({ Catagory: catagoryName })
.select('-_id'));

module.exports = {
  getAllOrganisation: allOrganisation,
  getCategories: categories,
  getOrganisation: organisation,
};
