
const getAPI = URL => fetch(URL)
  .then(response => response.json())
  .then(data => data.data)
  .catch((error) => { console.log('response failed', error); });

const postAPI = (URL, options) => fetch(URL, options)
  .then(() => 200)
  .catch(() => 500);

module.exports = {
  GetAPI: getAPI,
  PostAPI: postAPI,
};
