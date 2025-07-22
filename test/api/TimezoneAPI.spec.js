/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const {APIClient, TimezoneAPI} = require("../../src");
  describe('TimezoneAPI', function() {
    let api;

    beforeEach(function() {
      const client = new APIClient()
      client.authentications['ApiKeyAuth'].apiKey = 'API_KEY';
      api = new TimezoneAPI(client);
    });
    describe('getTimezoneInfo', function() {
      it('should call getTimezoneInfo successfully', function(done) {
        api.getTimezoneInfo({
          tz: null,
          location: null,
          lat: null,
          _long: null,
          ip: null,
          iataCode: null,
          icaoCode: null,
          loCode: null,
          output: null,
          lang: null
        }, (error, data, response) => {
          if (error) {
            console.error('Exception when calling TimezoneAPI->getTimezoneInfo:', error);
          } else {
            console.log(JSON.stringify(data, null, 2));
          }
        });
        done();
      });
    });
  });
