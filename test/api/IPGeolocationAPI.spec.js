/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const expect = require('expect.js');
const IPGeolocationAPI =  require('../../src/apis/IPGeolocationAPI.js');
const BulkIPRequest = require('../../src/models/BulkIPRequest.js');
const APIClient = require('../../src/APIClient.js');

describe('IPGeolocationAPI', function () {
  let api;

  beforeEach(() => {
    const client = new APIClient();
    client.authentications['ApiKeyAuth'].apiKey = 'API_KEY'; // Replace with env or secure method in real use
    api = new IPGeolocationAPI(client);
  });

  describe('getIpGeolocation', () => {
    it('should call getIpGeolocation successfully', function (done) {
      done();
      api.getIpGeolocation({
        ip: null,
        excludes: null,
        include: null,
        fields: null,
        lang: null,
        output:null
      }, (error, data) => {
        if (error) console.error(error);
        else console.log(JSON.stringify(data, null, 2));
      });
    });
  });

  describe('getBulkIpGeolocation', () => {
    it('should call getBulkIpGeolocation successfully', function (done) {
      done();
      const bulkRequest = new BulkIPRequest();
      bulkRequest.ips = ['8.8.8.8 ', '1.1.1.1'];

      api.getBulkIpGeolocation(bulkRequest, {
        fields: null,
        excludes: null,
        include: null,
        lang: null,
        output:null
      }, (error, data) => {
        if (error) console.error(error);
        else console.log(JSON.stringify(data, null, 2));
      });
    });
  });
});

