
const getAPI = URL => fetch(URL, authorize())
  .then(response => response.json())
  .then(data => data.data)
  .catch((error) => { console.log('response failed', error); });

const postAPI = (URL, options) => fetch(URL, authorize(options))
  .then(() => 200)
  .catch(() => 500);

let AuthToken = null;

function authorize(options = {}) {
  let headers = options.headers || new Headers();
  if (AuthToken) {
    headers.append("Authorization", "Token " + AuthToken)
  }
  options.headers = headers;
  return options;
}

module.exports = {
  GetAPI: getAPI,
  PostAPI: postAPI,
  AuthToken
};
