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
      client.authentications['ApiKeyAuth'].apiKey = 'a3fbecf6536a470b8d3426419f21ae99';
      api = new AstronomyAPI(client);
    });
    describe('getAstronomyDetails', function() {
      it('should call getAstronomyDetails successfully', function(done) {
          const options = {
              ip: '1.1.1.1',
              lang: 'fr'
          };

          api.getAstronomyDetails(options, (error, data, response) => {
              if (error) console.error('Exception when calling AstronomyAPI->getAstronomyDetails:', error);
              else console.log(JSON.stringify(data, null, 2));
          });
        done();
      });
    });
  });
