/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const TimezoneAirport = require('./TimezoneAirport');
const TimezoneDetail = require('./TimezoneDetail');
const TimezoneLocation = require('./TimezoneLocation');
const TimezoneLocode = require('./TimezoneLocode');

/**
 * The TimeZoneDetailedResponse model module.
 * @module models/TimeZoneDetailedResponse
 * @version 2.0
 */
class TimeZoneDetailedResponse {
    /**
     * Constructs a new <code>TimeZoneDetailedResponse</code>.
     * @alias module:models/TimeZoneDetailedResponse
     */
    constructor() { 
        
        TimeZoneDetailedResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeZoneDetailedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TimeZoneDetailedResponse} obj Optional instance to populate.
     * @return {module:models/TimeZoneDetailedResponse} The populated <code>TimeZoneDetailedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeZoneDetailedResponse();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = APIClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('airport_details')) {
                obj['airport_details'] = TimezoneAirport.constructFromObject(data['airport_details']);
            }
            if (data.hasOwnProperty('lo_code_details')) {
                obj['lo_code_details'] = TimezoneLocode.constructFromObject(data['lo_code_details']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = TimezoneLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = TimezoneDetail.constructFromObject(data['time_zone']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeZoneDetailedResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeZoneDetailedResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // validate the optional field `airport_details`
        if (data['airport_details']) { // data not null
          TimezoneAirport.validateJSON(data['airport_details']);
        }
        // validate the optional field `lo_code_details`
        if (data['lo_code_details']) { // data not null
          TimezoneLocode.validateJSON(data['lo_code_details']);
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          TimezoneLocation.validateJSON(data['location']);
        }
        // validate the optional field `time_zone`
        if (data['time_zone']) { // data not null
          TimezoneDetail.validateJSON(data['time_zone']);
        }

        return true;
    }


}



/**
 * @member {String} ip
 */
TimeZoneDetailedResponse.prototype['ip'] = undefined;

/**
 * @member {module:models/TimezoneAirport} airport_details
 */
TimeZoneDetailedResponse.prototype['airport_details'] = undefined;

/**
 * @member {module:models/TimezoneLocode} lo_code_details
 */
TimeZoneDetailedResponse.prototype['lo_code_details'] = undefined;

/**
 * @member {module:models/TimezoneLocation} location
 */
TimeZoneDetailedResponse.prototype['location'] = undefined;

/**
 * @member {module:models/TimezoneDetail} time_zone
 */
TimeZoneDetailedResponse.prototype['time_zone'] = undefined;






module.exports = TimeZoneDetailedResponse;

