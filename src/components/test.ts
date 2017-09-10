import axios from 'axios'

axios.get('/api1')
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

axios.get('/api2')
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});