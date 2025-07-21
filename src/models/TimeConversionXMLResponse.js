/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The TimeConversionXMLResponse model module.
 * @module models/TimeConversionXMLResponse
 * @version 2.0
 */
class TimeConversionXMLResponse {
    /**
     * Constructs a new <code>TimeConversionXMLResponse</code>.
     * @alias module:models/TimeConversionXMLResponse
     */
    constructor() { 
        
        TimeConversionXMLResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeConversionXMLResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TimeConversionXMLResponse} obj Optional instance to populate.
     * @return {module:models/TimeConversionXMLResponse} The populated <code>TimeConversionXMLResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeConversionXMLResponse();

            if (data.hasOwnProperty('original_time')) {
                obj['original_time'] = APIClient.convertToType(data['original_time'], 'String');
            }
            if (data.hasOwnProperty('converted_time')) {
                obj['converted_time'] = APIClient.convertToType(data['converted_time'], 'String');
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
     * Validates the JSON data with respect to <code>TimeConversionXMLResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeConversionXMLResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['original_time'] && !(typeof data['original_time'] === 'string' || data['original_time'] instanceof String)) {
            throw new Error("Expected the field `original_time` to be a primitive type in the JSON string but got " + data['original_time']);
        }
        // ensure the json data is a string
        if (data['converted_time'] && !(typeof data['converted_time'] === 'string' || data['converted_time'] instanceof String)) {
            throw new Error("Expected the field `converted_time` to be a primitive type in the JSON string but got " + data['converted_time']);
        }

        return true;
    }


}



/**
 * @member {String} original_time
 */
TimeConversionXMLResponse.prototype['original_time'] = undefined;

/**
 * @member {String} converted_time
 */
TimeConversionXMLResponse.prototype['converted_time'] = undefined;

/**
 * @member {Number} diff_hour
 */
TimeConversionXMLResponse.prototype['diff_hour'] = undefined;

/**
 * @member {Number} diff_min
 */
TimeConversionXMLResponse.prototype['diff_min'] = undefined;






module.exports = TimeConversionXMLResponse;

