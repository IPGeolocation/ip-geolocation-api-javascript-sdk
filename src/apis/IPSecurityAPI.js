/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */


const APIClient = require('../APIClient.js');
const ErrorResponse = require('../models/ErrorResponse');
const ErrorXMLResponse = require('../models/ErrorXMLResponse');
const BulkIPRequest = require('../models/BulkIPRequest');
const BulkIPSecurityResponse = require('../models/BulkIPSecurityResponse');
const BulkIPSecurityResponse1 = require('../models/BulkIPSecurityResponse1');
const SecurityAPIResponse = require('../models/SecurityAPIResponse');
const SecurityAPIXMLResponse = require('../models/SecurityAPIXMLResponse');

/**
* Security service.
* @module apis/IPSecurityAPI
* @version 2.0
*/
class IPSecurityAPI {

    /**
    * Constructs a new IPSecurityAPI.
    * @alias module:apis/IPSecurityAPI
    * @class
    * @param {module:APIClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:APIClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || APIClient.instance;
    }


    /**
     * Callback function to receive the result of the getBulkIpSecurityInfo operation.
     * @callback module:apis/IPSecurityAPI~getBulkIpSecurityInfoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:models/BulkIPSecurityResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The Bulk IP Security Lookup API can provide security details for up to `50,000` bulk IPs. This API also has parameters to customize the response, just like the single IP Security Lookup API.
     * @param {module:models/BulkIPRequest} BulkIPRequest 
     * @param {Object} opts Optional parameters
     * @param {String} [include] Include optional objects 
     * @param {String} [fields] Get specific fields, objects from the response.
     * @param {String} [excludes] Exclude specific fields, objects from the response.
     * @param {String} [output] Desired output format.
     * @param {module:models/String} [lang] By default, the API responds in English. You can change the response language by passing the language code as a query parameter `lang`. Multi language feature is available only for `paid users`.
     * @param {module:apis/IPSecurityAPI~getBulkIpSecurityInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:models/BulkIPSecurityResponse>}
     */
    getBulkIpSecurityInfo(BulkIPRequest, opts, callback) {
      opts = opts || {};
      let postBody = BulkIPRequest;
      // verify the required parameter 'BulkIPRequest' is set
      if (BulkIPRequest === undefined || BulkIPRequest === null) {
        throw new Error("Missing the required parameter 'BulkIPRequest' when calling getBulkIpSecurityInfo");
      }

      let pathParams = {
      };
      let queryParams = {
        'include': opts['include'],
        'fields': opts['fields'],
        'excludes': opts['excludes'],
        'output': opts['output'],
        'lang': opts['lang']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = [BulkIPSecurityResponse];
      return this.apiClient.callApi(
        '/security-bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIpSecurityInfo operation.
     * @callback module:apis/IPSecurityAPI~getIpSecurityInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SecurityAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * IP Security API provides security details of a given IP. It detects whether the IP is proxy, tor or bot. It also shows the proxy types of the IP (like VPN, PROXY, RELAY etc.) with it's VPN/proxy service provider making our API powerful VPN checker. It finds the IPs that are involved in spam activities. It also checks whether the IP links to a cloud provider and includes the provider's name.
     * @param {Object} opts Optional parameters
     * @param {String} [ip] query parameter 'ip'. If not provided, will be your network IP
     * @param {String} [include] Include optional details
     * @param {String} [fields] Get specific fields, objects from the response.
     * @param {String} [excludes] Exclude specific fields, objects from the response.
     * @param {String} [output] Desired output format (json or xml).
     * @param {module:models/String} [lang] By default, the API responds in English. You can change the response language by passing the language code as a query parameter `lang`. Multi language feature is available only for `paid users`.
     * @param {module:apis/IPSecurityAPI~getIpSecurityInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/SecurityAPIResponse}
     */
    getIpSecurityInfo(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ip': opts['ip'],
        'include': opts['include'],
        'fields': opts['fields'],
        'excludes': opts['excludes'],
        'output': opts['output'],
        'lang': opts['lang']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = SecurityAPIResponse;
      return this.apiClient.callApi(
        '/security', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

module.exports = IPSecurityAPI;
