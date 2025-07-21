/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */


const APIClient = require('../APIClient.js');
const ASNResponse = require('../models/ASNResponse');
const ASNResponseXML = require('../models/ASNResponseXML');
const ErrorResponse = require('../models/ErrorResponse');
const ErrorXMLResponse = require('../models/ErrorXMLResponse');

/**
* ASNLookup service.
* @module apis/ASNLookupAPI
* @version 2.0
*/
class ASNLookupAPI {

    /**
    * Constructs a new ASNLookupAPI.
    * @alias module:apis/ASNLookupAPI
    * @class
    * @param {module:APIClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:APIClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || APIClient.instance;
    }


    /**
     * Callback function to receive the result of the getAsnInfo operation.
     * @callback module:apis/ASNLookupAPI~getAsnInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ASNResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ASN API provides comprehensive details for an ASN including the as name,  organization name, the country of registration, associated domain, and its  type (ISP, host provider, or business). The API also shows the allocation  date of provided ASN and if it is currently allocated or not. It also contains  the routing information including peering, upstreams, and downstreams to help  understand the relationship between different ASNs.  Example Use Cases:  - Looking up ASN information for an IP address (e.g., `GET /asn?ip=8.8.8.8`)  - Retrieving ASN information for a specific ASN number (e.g., `GET /asn?asn=12345`)  - Getting peering relationships for an ASN (e.g., `GET /asn?asn=12345&include=peers`) 
     * @param {Object} opts Optional parameters
     * @param {String} [ip] query parameter 'ip'.
     * @param {Number} [asn] query paramter 'asn'.
     * @param {String} [include] This parameter can have four options: a) peers b) downstreams c) upstreams d) routes e) whois_response. You may add any of them in comma-separated way. In order to get the ASN details with peering data, pass peers string in the include parameter like mentioned below.
     * @param {String} [excludes] You can exclude fields from the response according to you requirement with the exception of ip field. For example, you want to remove date_allocated and allocation_status from api response, you can put the keys in excludes parameter like this.
     * @param {String} [fields] You can filter out only those fields which you want to see in the response by using the fields parameter. To retrieve only the AS organization, its country and downstreams in api response, you can put the keys in fields parameter like this. API will combine these fields with the default ASN response. Note: Parameters `peers, downstreams, upstreams, routes, whois_response` can be used in both `include` , and `fields`. If you use include and fields at the same time, fields parameter will be considered only.
     * @param {module:apis/ASNLookupAPI~getAsnInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/ASNResponse}
     */
    getAsnInfo(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ip': opts['ip'],
        'asn': opts['asn'],
        'include': opts['include'],
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
      let returnType = ASNResponse;
      return this.apiClient.callApi(
        '/asn', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
module.exports = ASNLookupAPI;