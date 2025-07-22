/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

  const {APIClient, AbuseContactAPI} = require("../../src");
describe('AbuseContactAPI', function() {
    let api;

    beforeEach(function() {
      const client = new APIClient()
      client.authentications['ApiKeyAuth'].apiKey = 'API_KEY';
      api = new AbuseContactAPI(client);
    });
    describe('getAbuseContactInfo', function() {
      it('should call getAbuseContactInfo successfully', function(done) {
        api.getAbuseContactInfo({
          ip: null,
          excludes: null,
          fields: null

        }, (error, data, response) => {
          if (error) {
            console.error('Exception when calling AbuseContactAPI->getAbuseContactInfo:', error);
          } else {
            console.log(JSON.stringify(data, null, 2));
          }
        });
        done();
      });
    });
  });
