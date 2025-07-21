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
      client.authentications['ApiKeyAuth'].apiKey = '481060d9cb8a4813a40f2720caa8de74';
      api = new ASNLookupAPI(client);
    });
    describe('getAsnInfo', function() {
      it('should call getAsnInfo successfully', function(done) {
        api.getAsnInfo(
            {
              asn: 12,
              include: 'peers,downstreams,upstreams,routes,whois_response'
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
