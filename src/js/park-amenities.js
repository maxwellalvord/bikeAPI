

export default class amenityChecker {  
  static getAmenities(park) {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${process.env.API_KEY}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}
// export default class amenityChecker {  
//   static async getAmenities(park) {
//     try {
//       const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${process.env.API_KEY}`);
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//     } .catch(function(error) {
//       return error;
//     })
//   }
// }