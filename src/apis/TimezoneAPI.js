/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */


const APIClient = require('../APIClient.js');
const ErrorResponse = require('../models/ErrorResponse');
const ErrorXMLResponse = require('../models/ErrorXMLResponse');
const TimeZoneDetailedResponse = require('../models/TimeZoneDetailedResponse');
const TimeZoneDetailedXMLResponse = require('../models/TimeZoneDetailedXMLResponse');

/**
* Timezone service.
* @module apis/TimezoneAPI
* @version 2.0
*/
class TimezoneAPI {

    /**
    * Constructs a new TimezoneAPI.
    * @alias module:apis/TimezoneAPI
    * @class
    * @param {module:APIClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:APIClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || APIClient.instance;
    }


    /**
     * Callback function to receive the result of the getTimezoneInfo operation.
     * @callback module:apis/TimezoneAPI~getTimezoneInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TimeZoneDetailedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Timezone information details
     * The Time Zone API provides current time, date, and time zone-related information. It supports various input types including time zone name, geographic coordinates, addresses, IPs, and location codes.  The API determines the time zone based on the following priority order if multiple parameters are provided:   1. Time Zone Name   2. Geographic Coordinates (latitude & longitude)   3. Location Address   4. IP Address   5. IATA Code   6. ICAO Code   7. UN/LOCODE  Enriched response data is returned based on the type of input: - IP: includes geolocation info - Address: includes location metadata - IATA/ICAO: includes airport info - UN/LOCODE: includes city details  You can call the time zone API without passing any time zone, coordinates, IATA, ICAO, LO code or IP address as well. It will use the calling machine's IP address to return the regional time zone information. 
     * @param {Object} opts Optional parameters
     * @param {String} [tz] pass a valid time zone name as a query parameter tz to get the time zone information.
     * @param {String} [location] pass any address of a location as the query parameter location to get the time zone information.
     * @param {Number} [lat] pass the latitude of a location as query parameters to get the time zone information.
     * @param {Number} [_long] pass the longitude of a location as query parameters to get the time zone information.
     * @param {String} [ip] You can pass any IPv4 or IPv6 address as a query parameter ip to get the regional timezone information.
     * @param {String} [iataCode] pass any 3 letter IATA code as a query paramter iata_code to get the comprehensive airport details along with the time zone information, in which that airport exists.
     * @param {String} [icaoCode] pass any 4 letter ICAO code as a query paramter icao_code to get the comprehensive airport details along with the time zone information, in which that airport exists.
     * @param {String} [loCode] pass any 5 letter UNLOCODE as a query paramter lo_code to get the comprehensive lo code/city details along with the time zone information of the concerned city.
     * @param {String} [output] Desired output format (json or xml).
     * @param {module:models/String} [lang] By default, the API responds in English. You can change the response language by passing the language code as a query parameter `lang`. Multi language feature is available only for `paid users`.
     * @param {module:apis/TimezoneAPI~getTimezoneInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/TimeZoneDetailedResponse}
     */
    getTimezoneInfo(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'tz': opts['tz'],
        'location': opts['location'],
        'lat': opts['lat'],
        'long': opts['_long'],
        'ip': opts['ip'],
        'iata_code': opts['iataCode'],
        'icao_code': opts['icaoCode'],
        'lo_code': opts['loCode'],
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
      let returnType = TimeZoneDetailedResponse;
      return this.apiClient.callApi(
        '/timezone', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

module.exports = TimezoneAPI;
