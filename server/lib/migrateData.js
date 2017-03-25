import path from 'path';
import fs from 'fs';
import OrganisationSchema from './onlyOrg';

const importedFilePath = path.resolve(__dirname, '..', '../data', 'organisation.json');
const importedData = fs.readFileSync(importedFilePath);
let orgaisationModel;
const importData = JSON.parse(importedData).map((organisation) => {
  orgaisationModel = new OrganisationSchema.AllOrganization(organisation);
  orgaisationModel.save((error) => {
    if (error) {
      throw error;
    }
  });
  return organisation;
});

module.exports = importData;

