const axios = require('axios');

async function makePostRequest() {
    
    let res = await axios({
    method: 'post',
    url: 'http://localhost:3000/users',
    data: {
    id: 6,
    first_name: 'Fred',
    last_name: 'Blair',
    email: 'freddyb34@gmail.com'
    }
  })
    /*
    params = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
      } */

      //let res = await ;

    console.log(res.data); 
}

makePostRequest();
