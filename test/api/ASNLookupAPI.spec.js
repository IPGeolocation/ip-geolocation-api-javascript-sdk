/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */


const {ASNLookupAPI, APIClient} = require("../../src");


  describe('ASNLookupAPI', function() {
    let api;

    beforeEach(function() {
      const client = new APIClient()
      client.authentications['ApiKeyAuth'].apiKey = 'API_KEY';
      api = new ASNLookupAPI(client);
    });
    describe('getAsnInfo', function() {
      it('should call getAsnInfo successfully', function(done) {
        api.getAsnInfo(
            {
              ip: null,
              asn: null,
              include: null,
              excludes: null,
              fields: null
            },
            (error, data, response) => {
              if (error) {
                console.error("API call failed:", error);
              } else {
                console.log(JSON.stringify(data, null, 2));
              }
            }
        );
        done();
      });
    });
  });
