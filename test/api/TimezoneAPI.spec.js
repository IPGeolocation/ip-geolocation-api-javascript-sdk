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
      client.authentications['ApiKeyAuth'].apiKey = '1b17884ee4a148eca83590f178ae0628';
      api = new TimezoneAPI(client);
    });
    describe('getTimezoneInfo', function() {
      it('should call getTimezoneInfo successfully', function(done) {
        api.getTimezoneInfo({
          loCode: 'ESBCN'
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
