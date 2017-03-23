import path from 'path';
import fs from 'fs';
import OrganisationSchema from './initialSchema';

const importedFile = path.resolve(__dirname, '../data', 'organisation.json');
const data = fs.readFileSync(importedFile);
const allOrganisation = new OrganisationSchema(JSON.parse(data));
module.exports = allOrganisation;
