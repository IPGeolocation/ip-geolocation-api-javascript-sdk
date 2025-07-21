/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The TimeConversionResponse model module.
 * @module models/TimeConversionResponse
 * @version 2.0
 */
class TimeConversionResponse {
    /**
     * Constructs a new <code>TimeConversionResponse</code>.
     * @alias module:models/TimeConversionResponse
     */
    constructor() { 
        
        TimeConversionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeConversionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TimeConversionResponse} obj Optional instance to populate.
     * @return {module:models/TimeConversionResponse} The populated <code>TimeConversionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeConversionResponse();

            if (data.hasOwnProperty('original_time')) {
                obj['original_time'] = APIClient.convertToType(data['original_time'], 'Date');
            }
            if (data.hasOwnProperty('converted_time')) {
                obj['converted_time'] = APIClient.convertToType(data['converted_time'], 'Date');
            }
            if (data.hasOwnProperty('diff_hour')) {
                obj['diff_hour'] = APIClient.convertToType(data['diff_hour'], 'Number');
            }
            if (data.hasOwnProperty('diff_min')) {
                obj['diff_min'] = APIClient.convertToType(data['diff_min'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeConversionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeConversionResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Date} original_time
 */
TimeConversionResponse.prototype['original_time'] = undefined;

/**
 * @member {Date} converted_time
 */
TimeConversionResponse.prototype['converted_time'] = undefined;

/**
 * @member {Number} diff_hour
 */
TimeConversionResponse.prototype['diff_hour'] = undefined;

/**
 * @member {Number} diff_min
 */
TimeConversionResponse.prototype['diff_min'] = undefined;






module.exports = TimeConversionResponse;

