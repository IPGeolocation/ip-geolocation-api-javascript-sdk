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
      client.authentications['ApiKeyAuth'].apiKey = 'API_KEY';
      api = new IPSecurityAPI(client);
    });
    describe('getBulkIpSecurityInfo', function() {
      it('should call getBulkIpSecurityInfo successfully', function(done) {
        const bulkRequest = new BulkIPRequest();
        bulkRequest.ips = ['2.56.188.34', '2.56.188.3511'];

        api.getBulkIpSecurityInfo(bulkRequest, {
          include: null,
          fields: null,
          excludes: null,
          lang: null,
          output: null
        }, (error, data) => {
          if (error) return console.error('API call failed:', error);
          console.log(JSON.stringify(data, null, 2));
        });
        done();
      });
    });
    describe('getIpSecurityInfo', function() {
      it('should call getIpSecurityInfo successfully', function(done) {
        api.getIpSecurityInfo({
          ip: null,
          fields: null,
          include: null,
          excludes: null,
          lang: null,
          output: null
        }, (error, data) => {
          if (error) return console.error('API call failed:', error);
          console.log(JSON.stringify(data, null, 2));
        });
        done();
      });
    });
  });
