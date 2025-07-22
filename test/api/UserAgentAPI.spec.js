/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

  const {APIClient, UserAgentAPI, BulkUserAgentRequest} = require("../../src");
describe('UserAgentAPI', function() {
    let api;

    beforeEach(function() {
      const client = new APIClient()
      client.authentications['ApiKeyAuth'].apiKey = 'API_KEY';
      api = new UserAgentAPI(client);
    });
    describe('getUserAgentDetails', function() {
      it('should call getUserAgentDetails successfully', function(done) {
        //uncomment below and update the code to test getUserAgentDetails
        //instance.getUserAgentDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('parseBulkUserAgentStrings', function() {
      it('should call parseBulkUserAgentStrings successfully', function(done) {
        done();
        const bulkRequest = new BulkUserAgentRequest();
        bulkRequest.uaStrings = [
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
          "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
        ];

        const opts = {
            BulkUserAgentRequest: bulkRequest
        };

        api.parseBulkUserAgentStrings(opts, (error, data, response) => {
          if (error) {
            console.error('Exception when calling UserAgentAPI->parseBulkUserAgentStrings:', error);
          } else {
            console.log(JSON.stringify(data, null, 2));
          }
        });
      });
    });
    describe('parseUserAgentString', function() {
      it('should call parseUserAgentString successfully', function(done) {
        const opts = {
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
        };

        api.getUserAgentDetails(opts, (error, data, response) => {
          if (error) {
            console.error('Exception when calling UserAgentAPI->getUserAgentDetails:', error);
          } else {
            console.log(JSON.stringify(data, null, 2));
          }
        });
        done();
      });
    });
  });
