/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The TimezoneDetailDstStart model module.
 * @module models/TimezoneDetailDstStart
 * @version 2.0
 */
class TimezoneDetailDstStart {
    /**
     * Constructs a new <code>TimezoneDetailDstStart</code>.
     * @alias module:models/TimezoneDetailDstStart
     */
    constructor() { 
        
        TimezoneDetailDstStart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimezoneDetailDstStart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TimezoneDetailDstStart} obj Optional instance to populate.
     * @return {module:models/TimezoneDetailDstStart} The populated <code>TimezoneDetailDstStart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimezoneDetailDstStart();

            if (data.hasOwnProperty('utc_time')) {
                obj['utc_time'] = APIClient.convertToType(data['utc_time'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = APIClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('gap')) {
                obj['gap'] = APIClient.convertToType(data['gap'], 'Boolean');
            }
            if (data.hasOwnProperty('date_time_after')) {
                obj['date_time_after'] = APIClient.convertToType(data['date_time_after'], 'String');
            }
            if (data.hasOwnProperty('date_time_before')) {
                obj['date_time_before'] = APIClient.convertToType(data['date_time_before'], 'String');
            }
            if (data.hasOwnProperty('overlap')) {
                obj['overlap'] = APIClient.convertToType(data['overlap'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimezoneDetailDstStart</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimezoneDetailDstStart</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['utc_time'] && !(typeof data['utc_time'] === 'string' || data['utc_time'] instanceof String)) {
            throw new Error("Expected the field `utc_time` to be a primitive type in the JSON string but got " + data['utc_time']);
        }
        // ensure the json data is a string
        if (data['duration'] && !(typeof data['duration'] === 'string' || data['duration'] instanceof String)) {
            throw new Error("Expected the field `duration` to be a primitive type in the JSON string but got " + data['duration']);
        }
        // ensure the json data is a string
        if (data['date_time_after'] && !(typeof data['date_time_after'] === 'string' || data['date_time_after'] instanceof String)) {
            throw new Error("Expected the field `date_time_after` to be a primitive type in the JSON string but got " + data['date_time_after']);
        }
        // ensure the json data is a string
        if (data['date_time_before'] && !(typeof data['date_time_before'] === 'string' || data['date_time_before'] instanceof String)) {
            throw new Error("Expected the field `date_time_before` to be a primitive type in the JSON string but got " + data['date_time_before']);
        }

        return true;
    }


}



/**
 * @member {String} utc_time
 */
TimezoneDetailDstStart.prototype['utc_time'] = undefined;

/**
 * @member {String} duration
 */
TimezoneDetailDstStart.prototype['duration'] = undefined;

/**
 * @member {Boolean} gap
 */
TimezoneDetailDstStart.prototype['gap'] = undefined;

/**
 * @member {String} date_time_after
 */
TimezoneDetailDstStart.prototype['date_time_after'] = undefined;

/**
 * @member {String} date_time_before
 */
TimezoneDetailDstStart.prototype['date_time_before'] = undefined;

/**
 * @member {Boolean} overlap
 */
TimezoneDetailDstStart.prototype['overlap'] = undefined;






module.exports = TimezoneDetailDstStart;

