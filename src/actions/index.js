import axios from 'axios';

export default function getData() {
  var data = JSON.stringify({
    page: 1,
    page_size: 20,
    state: [4],
    order_by: 6,
  });

  var config = {
    method: 'post',
    url: 'https://cors-anywhere.herokuapp.com/https://caseend.com/api/cases/matched/',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
