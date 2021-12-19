import getResponse from './getResponse.js';

const sendRequestButton = document.querySelector('#sendRequest');

sendRequestButton.addEventListener('click', () => {
  getResponse('GET', 'https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      console.log(JSON.parse(res));
    })
    .catch((error) => {
      console.log(error);
    });
});

// sendRequestButton.addEventListener('click', (e) => {
//   getResponse('GET', 'https://jsonplaceholder.typicode.com/users/1')
//     .then((res) => {
//       console.log(JSON.parse(res));
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });


