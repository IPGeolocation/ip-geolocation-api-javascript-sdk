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
    client.authentications['ApiKeyAuth'].apiKey = '481060d9cb8a4813a40f2720caa8de74'; // Replace with env or secure method in real use
    api = new IPGeolocationAPI(client);
  });

  describe('getIpGeolocation', () => {
    it('should call getIpGeolocation successfully', function (done) {
      done();
      // api.getIpGeolocation({
      //   ip: '8.8.8.8',
      //   excludes: 'location.country_flag,location.country_emoji',
      //   include: null
      // }, (error, data) => {
      //   if (error) console.error(error);
      //   else console.log(JSON.stringify(data, null, 2));
      // });
    });
  });

  describe('getBulkIpGeolocation', () => {
    it('should call getBulkIpGeolocation successfully', function (done) {
      done();
      const bulkRequest = new BulkIPRequest();
      bulkRequest.ips = ['8.8.8.888 ', '1.1.1.1'];

      api.getBulkIpGeolocation(bulkRequest, {
        fields: 'location.country_name,location.city',
        excludes: 'location.continent_code',
        include: 'security,timezone'
      }, (error, data) => {
        if (error) console.error(error);
        else console.log(JSON.stringify(data, null, 2));
      });
    });
  });
});

