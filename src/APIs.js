
const APIs = URL => fetch(URL)
  .then(response => response.json())
  .then(data => data.data)
  .catch((error) => { console.log('response failed', error); });

module.exports = {
  API: APIs,
};
