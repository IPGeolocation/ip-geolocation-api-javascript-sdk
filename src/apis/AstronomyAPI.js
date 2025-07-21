/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */


const APIClient = require('../APIClient.js');
const AstronomyResponse = require('../models/AstronomyResponse');
const AstronomyXMLResponse = require('../models/AstronomyXMLResponse');
const ErrorResponse = require('../models/ErrorResponse');
const ErrorXMLResponse = require('../models/ErrorXMLResponse');

/**
* Astronomy service.
* @module apis/AstronomyAPI
* @version 2.0
*/
class AstronomyAPI {

    /**
    * Constructs a new AstronomyAPI.
    * @alias module:apis/AstronomyAPI
    * @class
    * @param {module:APIClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:APIClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || APIClient.instance;
    }


    /**
     * Callback function to receive the result of the getAstronomyDetails operation.
     * @callback module:apis/AstronomyAPI~getAstronomyDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AstronomyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The Astronomy API provides the location-based rise and set times for the Sun and Moon along with the current position, distance from earth, and azimuth of the Sun and the Moon for a specific date at the queried time. 
     * @param {Object} opts Optional parameters
     * @param {String} [ip] query paramter 'ip'. If not provided, will be your network IP
     * @param {String} [location] query paramter 'location'. If not provided, will be your ip location
     * @param {String} [lat] query paramter 'lat'.
     * @param {String} [_long] query paramter 'long'.
     * @param {String} [date] The date (YYYY-MM-DD) to lookup for. default will be the current date
     * @param {String} [output] Desired output format.
     * @param {module:models/String} [lang] By default, the API responds in English. You can change the response language by passing the language code as a query parameter `lang`. Multi language feature is available only for `paid users`.
     * @param {module:apis/AstronomyAPI~getAstronomyDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/AstronomyResponse}
     */
    getAstronomyDetails(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ip': opts['ip'],
        'location': opts['location'],
        'lat': opts['lat'],
        'long': opts['_long'],
        'date': opts['date'],
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
      let returnType = AstronomyResponse;
      return this.apiClient.callApi(
        '/astronomy', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
module.exports = AstronomyAPI;
