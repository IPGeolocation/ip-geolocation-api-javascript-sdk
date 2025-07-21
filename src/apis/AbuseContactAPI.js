/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */


const APIClient = require('../APIClient.js');
const AbuseResponse = require('../models/AbuseResponse.js');
const AbuseResponseXML = require('../models/AbuseResponseXML.js');
const ErrorResponse = require('../models/ErrorResponse.js');
const ErrorXMLResponse = require('../models/ErrorXMLResponse.js');

/**
* AbuseContact service.
* @module apis/AbuseContactAPI
* @version 2.0
*/
class AbuseContactAPI {

    /**
    * Constructs a new AbuseContactAPI.
    * @alias module:apis/AbuseContactAPI
    * @class
    * @param {module:APIClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:APIClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || APIClient.instance;
    }


    /**
     * Callback function to receive the result of the getAbuseContactInfo operation.
     * @callback module:apis/AbuseContactAPI~getAbuseContactInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AbuseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The Abuse Contact API provides essential contact information to report abusive activity associated with IP addresses. By querying an IP address (IPv4 or IPv6), users receive detailed abuse contact data, including the responsible organization, abuse handling role, contact emails, phone numbers, and registered address. This enables users to swiftly take action to report and mitigate threats such as spam, DDoS attacks, and phishing.     In addition to abuse-specific contacts, the API also includes registration metadata like the registered country and abuse handle. This empowers cybersecurity teams, hosting providers, and compliance entities to take appropriate legal or administrative action. 
     * @param {Object} opts Optional parameters
     * @param {String} [ip] query parameter 'ip'.
     * @param {String} [excludes] You can exclude specific fields from the API response (except the ip field) by listing them in the excludes parameter as a comma-separated list. For example, you want to remove emails and handle from api response, you can put the keys in excludes parameter like this.
     * @param {String} [fields] You can customize the API response by using the fields parameter to include only the specific data you need. For example, to retrieve only the role and emails, specify these keys in the fields parameter as shown below.
     * @param {module:apis/AbuseContactAPI~getAbuseContactInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/AbuseResponse}
     */
    getAbuseContactInfo(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ip': opts['ip'],
        'excludes': opts['excludes'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = AbuseResponse;
      return this.apiClient.callApi(
        '/abuse', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

module.exports = AbuseContactAPI;
