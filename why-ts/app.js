// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.
})

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      // address.innerText = user.address;  // address가 Object이기 때문에 [Object object]로 나옴
      // address.innerText = user.addres;  // 오탈자가 난 경우, undefined로 나옴
      address.innerText = user.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();