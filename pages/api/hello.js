// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from 'axios'


// const base_url = "https://weddinger.herokuapp.com/api/v1/"
// const 

// export default function helloAPI(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


// ////////////// get login //////////////
// async function login(username, password) {
//   return axios.post(`${base_url}api/token/`, {
//       username,
//       password
//     });
// }


// ////////////// get Token with refresh //////////////
// export async function getToken(values) {
//   const url = `${base_url}api/token/`;

//   const response = await axios.post(url, values);

//   const refreshUrl = `${base_url}api/token/refresh`;

//   const refreshResponse = await axios.post(refreshUrl, { refresh: response.data.refresh });

//   return refreshResponse.data.access;
// }


// // GET from API with authentication
// ////////////// get info with Token list fill in the table //////////////

// export async function fetchWithToken(url, token) {

//   const config = makeConfig(token);

//   const response = await axios.get(url, config);

//   const skys = response.data.map(info => new Skycrapers(info));

//   // Sort alphabetically
//   skys.sort((a, b) => {
//       if (a.name < b.name) return -1;
//       if (a.name > b.name) return 1;
//       return 0;
//   });

//   return skys;
// }


// // POST to API with authentication
// ////////////// send info to API with Token //////////////

// export async function postWithToken(token, values) {

//   const info = {
//       id: -1, // will be overwritten once cache revalidates
//       name: values.name,
//       discription: values.discription,
//       height: values.height,
//       floors: values.floors,
//   }

//   const config = makeConfig(token);

//   const response = await axios.post(page_url, info, config);

//   return response.data;
// }

// ////////////// Delete Item with Token //////////////

// export async function deleteWithToken(id, token) {
//   const config = makeConfig(token);

//   const url = `${page_url}${id}/`;

//   await axios.delete(url, config);

// }

// // helper function to handle getting Authorization headers EXACTLY right
// function makeConfig(token) {
//   return {
//       headers: {
//           'Authorization': 'Bearer' + token
//       }
//   }
// }
