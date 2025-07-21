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
      client.authentications['ApiKeyAuth'].apiKey = '481060d9cb8a4813a40f2720caa8de74';
      api = new AbuseContactAPI(client);
    });
    describe('getAbuseContactInfo', function() {
      it('should call getAbuseContactInfo successfully', function(done) {
        api.getAbuseContactInfo({
          ip: '9.9.9.9',
          excludes: 'abuse.handle,abuse.emails'
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
