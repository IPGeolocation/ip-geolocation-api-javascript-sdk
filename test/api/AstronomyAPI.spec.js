/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

  const {APIClient, AstronomyAPI} = require("../../src");
describe('AstronomyAPI', function() {
    let api;

    beforeEach(function() {
      const client = new APIClient()
      client.authentications['ApiKeyAuth'].apiKey = 'API_KEY';
      api = new AstronomyAPI(client);
    });
    describe('getAstronomyDetails', function() {
      it('should call getAstronomyDetails successfully', function(done) {
          const options = {
              ip: null,
              location: null,
              lat: null,
              _long: null,
              date: null,
              lang: null
          };

          api.getAstronomyDetails(options, (error, data, response) => {
              if (error) console.error('Exception when calling AstronomyAPI->getAstronomyDetails:', error);
              else console.log(JSON.stringify(data, null, 2));
          });
        done();
      });
    });
  });
