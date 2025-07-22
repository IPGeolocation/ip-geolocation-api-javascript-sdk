/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

  const {APIClient, TimeConversionAPI} = require("../../src");
describe('TimeConversionAPI', function() {
    let api;

    beforeEach(function() {
      const client = new APIClient()
      client.authentications['ApiKeyAuth'].apiKey = 'API_KEY';
      api = new TimeConversionAPI(client);
    });
    describe('convertTimeBetweenTimezones', function() {
      it('should call convertTimeBetweenTimezones successfully', function(done) {
        const opts = {
          time: null,
          tzFrom: null,
          tzTo: null,
          latFrom: null,
          longFrom: null,
          latTo: null,
          longTo: null,
          locationFrom: null,
          locationTo: null,
          icaoFrom: null,
          icaoTo: null,
          iataFrom: null,
          iataTo: null,
          locodeFrom: null,
          locodeTo: null,
        };

        api.convertTimeBetweenTimezones(opts, (error, data, response) => {
          if (error) {
            console.error("Error:", error);
          } else {
            console.log("Converted Time Response:", data);
          }
        });
        done();
      });
    });
  });
