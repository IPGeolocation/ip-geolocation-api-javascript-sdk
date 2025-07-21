/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The TimezoneLocode model module.
 * @module models/TimezoneLocode
 * @version 2.0
 */
class TimezoneLocode {
    /**
     * Constructs a new <code>TimezoneLocode</code>.
     * @alias module:models/TimezoneLocode
     */
    constructor() { 
        
        TimezoneLocode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimezoneLocode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TimezoneLocode} obj Optional instance to populate.
     * @return {module:models/TimezoneLocode} The populated <code>TimezoneLocode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimezoneLocode();

            if (data.hasOwnProperty('lo_code')) {
                obj['lo_code'] = APIClient.convertToType(data['lo_code'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = APIClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = APIClient.convertToType(data['state_code'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = APIClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('country_name')) {
                obj['country_name'] = APIClient.convertToType(data['country_name'], 'String');
            }
            if (data.hasOwnProperty('location_type')) {
                obj['location_type'] = APIClient.convertToType(data['location_type'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = APIClient.convertToType(data['latitude'], 'String');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = APIClient.convertToType(data['longitude'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimezoneLocode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimezoneLocode</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['lo_code'] && !(typeof data['lo_code'] === 'string' || data['lo_code'] instanceof String)) {
            throw new Error("Expected the field `lo_code` to be a primitive type in the JSON string but got " + data['lo_code']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['state_code'] && !(typeof data['state_code'] === 'string' || data['state_code'] instanceof String)) {
            throw new Error("Expected the field `state_code` to be a primitive type in the JSON string but got " + data['state_code']);
        }
        // ensure the json data is a string
        if (data['country_code'] && !(typeof data['country_code'] === 'string' || data['country_code'] instanceof String)) {
            throw new Error("Expected the field `country_code` to be a primitive type in the JSON string but got " + data['country_code']);
        }
        // ensure the json data is a string
        if (data['country_name'] && !(typeof data['country_name'] === 'string' || data['country_name'] instanceof String)) {
            throw new Error("Expected the field `country_name` to be a primitive type in the JSON string but got " + data['country_name']);
        }
        // ensure the json data is a string
        if (data['location_type'] && !(typeof data['location_type'] === 'string' || data['location_type'] instanceof String)) {
            throw new Error("Expected the field `location_type` to be a primitive type in the JSON string but got " + data['location_type']);
        }
        // ensure the json data is a string
        if (data['latitude'] && !(typeof data['latitude'] === 'string' || data['latitude'] instanceof String)) {
            throw new Error("Expected the field `latitude` to be a primitive type in the JSON string but got " + data['latitude']);
        }
        // ensure the json data is a string
        if (data['longitude'] && !(typeof data['longitude'] === 'string' || data['longitude'] instanceof String)) {
            throw new Error("Expected the field `longitude` to be a primitive type in the JSON string but got " + data['longitude']);
        }

        return true;
    }


}



/**
 * @member {String} lo_code
 */
TimezoneLocode.prototype['lo_code'] = undefined;

/**
 * @member {String} city
 */
TimezoneLocode.prototype['city'] = undefined;

/**
 * @member {String} state_code
 */
TimezoneLocode.prototype['state_code'] = undefined;

/**
 * @member {String} country_code
 */
TimezoneLocode.prototype['country_code'] = undefined;

/**
 * @member {String} country_name
 */
TimezoneLocode.prototype['country_name'] = undefined;

/**
 * @member {String} location_type
 */
TimezoneLocode.prototype['location_type'] = undefined;

/**
 * @member {String} latitude
 */
TimezoneLocode.prototype['latitude'] = undefined;

/**
 * @member {String} longitude
 */
TimezoneLocode.prototype['longitude'] = undefined;






module.exports = TimezoneLocode;

