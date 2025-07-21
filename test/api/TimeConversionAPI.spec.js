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
      client.authentications['ApiKeyAuth'].apiKey = '1b17884ee4a148eca83590f178ae0628';
      api = new TimeConversionAPI(client);
    });
    describe('convertTimeBetweenTimezones', function() {
      it('should call convertTimeBetweenTimezones successfully', function(done) {
        const opts = {
          time: "2024-12-08 11:00",
          tzFrom: "America/New_York",
          tzTo: "Asia/Tokyo"
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
