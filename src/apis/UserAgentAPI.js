/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */


const APIClient = require('../APIClient.js');
const ErrorResponse = require('../models/ErrorResponse');
const ErrorXMLResponse = require('../models/ErrorXMLResponse');
const BulkUserAgentRequest = require('../models/BulkUserAgentRequest');
const UserAgentRequest = require('../models/UserAgentRequest');
const UserAgentData = require('../models/UserAgentData');
const UserAgentXMLData = require('../models/UserAgentXMLData');
const UserAgentXMLDataArray = require('../models/UserAgentXMLDataArray');

/**
* UserAgent service.
* @module apis/UserAgentAPI
* @version 2.0
*/
class UserAgentAPI {

    /**
    * Constructs a new UserAgentAPI.
    * @alias module:apis/UserAgentAPI
    * @class
    * @param {module:APIClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:APIClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || APIClient.instance;
    }


    /**
     * Callback function to receive the result of the getUserAgentDetails operation.
     * @callback module:apis/UserAgentAPI~getUserAgentDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/UserAgentData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of user-agent
     * User Agent Parser API provides the accurate browser, device, and operating system details from a User Agent String. It also provides information about crawlers and attack sources. You can use these details to customize user experience, prevent crawlers and attackers from accessing your website. 
     * @param {Object} opts Optional parameters
     * @param {String} [userAgent] 
     * @param {String} [output] Desired output format (json or xml).
     * @param {module:apis/UserAgentAPI~getUserAgentDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/UserAgentData}
     */
    getUserAgentDetails(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'output': opts['output']
      };
      let headerParams = {
        'User-Agent': opts['userAgent']
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = UserAgentData;
      return this.apiClient.callApi(
        '/user-agent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the parseBulkUserAgentStrings operation.
     * @callback module:apis/UserAgentAPI~parseBulkUserAgentStringsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:models/UserAgentData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Handle multiple user-agent string lookups
     * This endpoint allows you to perform the parsing of multiple User-Angent strings (max. 50,000) at the same time. The requests count per round is equal to total User-Agent strings passed. This feature is `only available for paid plans`.
     * @param {Object} opts Optional parameters
     * @param {String} [output] Desired output format (json or xml).
     * @param {module:models/BulkUserAgentRequest} [BulkUserAgentRequest] 
     * @param {module:apis/UserAgentAPI~parseBulkUserAgentStringsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:models/UserAgentData>}
     */
    parseBulkUserAgentStrings(opts, callback) {
      opts = opts || {};
      let postBody = opts['BulkUserAgentRequest'];

      let pathParams = {
      };
      let queryParams = {
        'output': opts['output']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = [UserAgentData];
      return this.apiClient.callApi(
        '/user-agent-bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the parseUserAgentString operation.
     * @callback module:apis/UserAgentAPI~parseUserAgentStringCallback
     * @param {String} error Error message, if any.
     * @param {module:models/UserAgentData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Handle single User-Agent string
     * You can also provide custom User-Agent string to parse in JSON payload. This endpoint is meant to be called from server-side and is available for paid subscriptions only.
     * @param {Object} opts Optional parameters
     * @param {String} [output] Desired output format (json or xml).
     * @param {module:models/UserAgentRequest} [UserAgentRequest] 
     * @param {module:apis/UserAgentAPI~parseUserAgentStringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/UserAgentData}
     */
    parseUserAgentString(opts, callback) {
      opts = opts || {};
      let postBody = opts['UserAgentRequest'];

      let pathParams = {
      };
      let queryParams = {
        'output': opts['output']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = UserAgentData;
      return this.apiClient.callApi(
        '/user-agent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

module.exports = UserAgentAPI;
