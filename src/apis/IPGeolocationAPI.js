/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *
 */


const APIClient = require('../APIClient.js');
const ErrorResponse = require('../models/ErrorResponse.js');
const ErrorXMLResponse = require('../models/ErrorXMLResponse.js');
const GeolocationResponse = require('../models/GeolocationResponse.js');
const GeolocationXMLResponse = require('../models/GeolocationXMLResponse.js');
const BulkIPGeolocationResponse = require('../models/BulkIPGeolocationResponse.js');
const BulkIPGeolocationResponse1 = require('../models/BulkIPGeolocationResponse1.js');
const BulkIPRequest = require('../models/BulkIPRequest.js');

/**
* IPLocation service.
* @module apis/IPGeolocationAPI
* @version 2.0
*/
class IPGeolocationAPI {

    /**
    * Constructs a new IPGeolocationAPI.
    * @alias module:apis/IPGeolocationAPI
    * @class
    * @param {module:APIClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:APIClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || APIClient.instance;
    }


    /**
     * Callback function to receive the result of the getBulkIpGeolocation operation.
     * @callback module:apis/IPGeolocationAPI~getBulkIpGeolocationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:models/BulkIPGeolocationResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This feature is available only on our paid API subscriptions (STANDARD or ADVANCED). This endpoint allows you to perform the geolocation lookup for multiple IPv4, IPv6 addresses or domain names (maximum 50,000) at the same time. The requests count per lookup is equal to total IP addresses or domain names passed. To perform bulk IP Geolocation Lookup, send a POST request and pass the \"ips\" array as JSON data along with it.  
     * @param {module:models/BulkIPRequest} BulkIPRequest 
     * @param {Object} opts Optional parameters
     * @param {module:models/String} [lang] By default, the API responds in English. You can change the response language by passing the language code as a query parameter `lang`. Multi language feature is available only for `paid users`.
     * @param {String} [fields] you can filter the API response by specifying the fields that you need, instead of getting the full response. To do this, pass the desired field names using the `fields` query parameter with each field represented as a dot-separated path.
     * @param {String} [excludes] you can also filter the API response by excluding specific fields (except the IP address) that you don't need. To do this, pass the unwanted field names using the excludes query parameter, with each field represented as a dot-separated path
     * @param {String} [include] IP Geolocation API also provides IP-Security, abuse, timezone, user-agent and DMA (Designated Market Area) code, which is specifically used in the US for marketing and regional targeting information on Advanced API subscription, but doesn't respond it by default. To get these information along with the geolocation information, you must pass the `include=security` or `include=abuse` or `include=dma` or `include=time_zone` or `include=user-agent` or you can fetch multiples by adding values in comma-separated way. In addition to that, IPGeolocation API also provide hostname lookup for an IP address on all the paid API subscriptions (STANDARD and ADVANCED), but doesn't respond it by default. To get the hostname for an IP address, you can pass one of the three values `hostname, liveHostname, hostnameFallbackLive` as a URL parameter `include=`.
     * @param {String} [output] Desired output format(json or xml).
     * @param {module:apis/IPGeolocationAPI~getBulkIpGeolocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:models/BulkIPGeolocationResponse>}
     */
    getBulkIpGeolocation(BulkIPRequest, opts, callback) {
      opts = opts || {};
      let postBody = BulkIPRequest;
      // verify the required parameter 'BulkIPRequest' is set
      if (BulkIPRequest === undefined || BulkIPRequest === null) {
        throw new Error("Missing the required parameter 'BulkIPRequest' when calling getBulkIpGeolocation");
      }

      let pathParams = {
      };
      let queryParams = {
        'lang': opts['lang'],
        'fields': opts['fields'],
        'excludes': opts['excludes'],
        'include': opts['include'],
        'output': opts['output']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = [BulkIPGeolocationResponse];
      return this.apiClient.callApi(
        '/ipgeo-bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIpGeolocation operation.
     * @callback module:apis/IPGeolocationAPI~getIpGeolocationCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GeolocationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * IP Geolocation API provides real-time and accurate geolocation, network, abuse, and security information for any IPv4 or IPv6 address and domain name along with the user-agent detail for the provided user-agent string. You can geolocate your online visitors and provide them the customized user-experience accordingly.
     * @param {Object} opts Optional parameters
     * @param {String} [ip] In order to find geolocation information about an IP (ipv4 ipv6) address or a domain name, pass it as a query parameter ip. When this endpoint is queried without an IP address, it returns the geolocation information of the device/client which is calling it
     * @param {module:models/String} [lang] By default, the API responds in English. You can change the response language by passing the language code as a query parameter `lang`. Multi language feature is available only for `paid users`.
     * @param {String} [fields] you can filter the API response by specifying the fields that you need, instead of getting the full response. To do this, pass the desired field names using the `fields` query parameter with each field represented as a dot-separated path.
     * @param {String} [excludes] you can also filter the API response by excluding specific fields (except the IP address) that you don't need. To do this, pass the unwanted field names using the excludes query parameter, with each field represented as a dot-separated path
     * @param {String} [include] IP Geolocation API also provides IP-Security, abuse, timezone, user-agent and DMA (Designated Market Area) code, which is specifically used in the US for marketing and regional targeting information on Advanced API subscription, but doesn't respond it by default. To get these information along with the geolocation information, you must pass the `include=security` or `include=abuse` or `include=dma` or `include=time_zone` or `include=user-agent` or you can fetch multiples by adding values in comma-separated way. In addition to that, IPGeolocation API also provide hostname lookup for an IP address on all the paid API subscriptions (STANDARD and ADVANCED), but doesn't respond it by default. To get the hostname for an IP address, you can pass one of the three values `hostname, liveHostname, hostnameFallbackLive` as a URL parameter `include=`.
     * @param {String} [output] Desired output format (json or xml).
     * @param {module:apis/IPGeolocationAPI~getIpGeolocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/GeolocationResponse}
     */
    getIpGeolocation(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ip': opts['ip'],
        'lang': opts['lang'],
        'fields': opts['fields'],
        'excludes': opts['excludes'],
        'include': opts['include'],
        'output': opts['output']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = GeolocationResponse;
      return this.apiClient.callApi(
        '/ipgeo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
module.exports = IPGeolocationAPI;
