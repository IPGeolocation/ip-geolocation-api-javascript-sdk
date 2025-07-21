/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require("../../src/APIClient");
const IPSecurityAPI = require("../../src/apis/IPSecurityAPI");
const BulkIPRequest = require("../../src/models/BulkIPRequest");

  describe('IPSecurityAPI', function() {
    let api;

    beforeEach(function() {
      const client = new APIClient();
      client.authentications['ApiKeyAuth'].apiKey = 'def295e418bb47c891bb1bc279419c67';
      api = new IPSecurityAPI(client);
    });
    describe('getBulkIpSecurityInfo', function() {
      it('should call getBulkIpSecurityInfo successfully', function(done) {
        const bulkRequest = new BulkIPRequest();
        bulkRequest.ips = ['2.56.188.34', '2.56.188.3511'];

        api.getBulkIpSecurityInfo(bulkRequest, {
          include: 'location,network',
          fields: 'location.country_name'
        }, (error, data) => {
          if (error) return console.error('API call failed:', error);
          console.log(JSON.stringify(data, null, 2));
        });
        done();
      });
    });
    describe('getIpSecurityInfo', function() {
      it('should call getIpSecurityInfo successfully', function(done) {
        // api.getIpSecurityInfo({
        //   ip: '195.154.221.54',
        //   fields: 'security.is_tor,security.is_proxy,security.is_bot,security.is_spam'
        // }, (error, data) => {
        //   if (error) return console.error('API call failed:', error);
        //   console.log(JSON.stringify(data, null, 2));
        // });

        done();
      });
    });
  });
