
export default class amenityChecker {  
  static async getAmenities(park) {
    try {
      const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${process.env.NP_API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log(response);
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}



