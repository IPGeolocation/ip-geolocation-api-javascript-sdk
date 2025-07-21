/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */


const APIClient = require('../APIClient.js');
const ErrorResponse = require('../models/ErrorResponse');
const ErrorXMLResponse = require('../models/ErrorXMLResponse');
const TimeConversionResponse = require('../models/TimeConversionResponse');
const TimeConversionXMLResponse = require('../models/TimeConversionXMLResponse');

/**
* TimeConversion service.
* @module apis/TimeConversionAPI
* @version 2.0
*/
class TimeConversionAPI {

    /**
    * Constructs a new TimeConversionAPI.
    * @alias module:apis/TimeConversionAPI
    * @class
    * @param {module:APIClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:APIClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || APIClient.instance;
    }


    /**
     * Callback function to receive the result of the convertTimeBetweenTimezones operation.
     * @callback module:apis/TimeConversionAPI~convertTimeBetweenTimezonesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TimeConversionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * You can convert a timestamp provided as a query paramter time from one time zone to another time zone.
     * @param {Object} opts Optional parameters
     * @param {String} [time] time parameter takes the input in the following two formats: i) 'yyyy-MM-dd HH:mm', and ii) 'yyyy-MM-dd HH:mm:ss'. This parameter is optional and you can omit it to convert the current time between two coordinates, time zones or locations.
     * @param {String} [tzFrom] timezone to convert from
     * @param {String} [tzTo] timezone to convert to
     * @param {Number} [latFrom] latitude to convert from
     * @param {Number} [longFrom] longitude to convert from
     * @param {Number} [latTo] latitude to convert to
     * @param {Number} [longTo] longitude to convert to
     * @param {String} [locationFrom] location to convert from
     * @param {String} [locationTo] location to convert to
     * @param {String} [icaoFrom] location to convert from
     * @param {String} [icaoTo] location to convert to
     * @param {String} [iataFrom] location to convert from
     * @param {String} [iataTo] location to convert to
     * @param {String} [locodeFrom] location to convert from
     * @param {String} [locodeTo] location to convert to
     * @param {module:apis/TimeConversionAPI~convertTimeBetweenTimezonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:models/TimeConversionResponse}
     */
    convertTimeBetweenTimezones(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'time': opts['time'],
        'tz_from': opts['tzFrom'],
        'tz_to': opts['tzTo'],
        'lat_from': opts['latFrom'],
        'long_from': opts['longFrom'],
        'lat_to': opts['latTo'],
        'long_to': opts['longTo'],
        'location_from': opts['locationFrom'],
        'location_to': opts['locationTo'],
        'icao_from': opts['icaoFrom'],
        'icao_to': opts['icaoTo'],
        'iata_from': opts['iataFrom'],
        'iata_to': opts['iataTo'],
        'locode_from': opts['locodeFrom'],
        'locode_to': opts['locodeTo']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = TimeConversionResponse;
      return this.apiClient.callApi(
        '/timezone/convert', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

module.exports = TimeConversionAPI;
