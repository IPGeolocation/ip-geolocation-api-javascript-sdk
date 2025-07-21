/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const TimeZoneDstEnd = require('./TimeZoneDstEnd.js');
const TimeZoneDstStart = require('./TimeZoneDstStart.js');

/**
 * The TimeZone model module.
 * @module models/TimeZone
 * @version 2.0
 */
class TimeZone {
    /**
     * Constructs a new <code>TimeZone</code>.
     * @alias module:models/TimeZone
     */
    constructor() { 
        
        TimeZone.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeZone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TimeZone} obj Optional instance to populate.
     * @return {module:models/TimeZone} The populated <code>TimeZone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeZone();

            if (data.hasOwnProperty('name')) {
                obj['name'] = APIClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = APIClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('offset_with_dst')) {
                obj['offset_with_dst'] = APIClient.convertToType(data['offset_with_dst'], 'Number');
            }
            if (data.hasOwnProperty('current_time')) {
                obj['current_time'] = APIClient.convertToType(data['current_time'], 'String');
            }
            if (data.hasOwnProperty('current_time_unix')) {
                obj['current_time_unix'] = APIClient.convertToType(data['current_time_unix'], 'Number');
            }
            if (data.hasOwnProperty('is_dst')) {
                obj['is_dst'] = APIClient.convertToType(data['is_dst'], 'Boolean');
            }
            if (data.hasOwnProperty('dst_savings')) {
                obj['dst_savings'] = APIClient.convertToType(data['dst_savings'], 'Number');
            }
            if (data.hasOwnProperty('dst_exists')) {
                obj['dst_exists'] = APIClient.convertToType(data['dst_exists'], 'Boolean');
            }
            if (data.hasOwnProperty('dst_start')) {
                obj['dst_start'] = TimeZoneDstStart.constructFromObject(data['dst_start']);
            }
            if (data.hasOwnProperty('dst_end')) {
                obj['dst_end'] = TimeZoneDstEnd.constructFromObject(data['dst_end']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeZone</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeZone</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['current_time'] && !(typeof data['current_time'] === 'string' || data['current_time'] instanceof String)) {
            throw new Error("Expected the field `current_time` to be a primitive type in the JSON string but got " + data['current_time']);
        }
        // validate the optional field `dst_start`
        if (data['dst_start']) { // data not null
          TimeZoneDstStart.validateJSON(data['dst_start']);
        }
        // validate the optional field `dst_end`
        if (data['dst_end']) { // data not null
          TimeZoneDstEnd.validateJSON(data['dst_end']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
TimeZone.prototype['name'] = undefined;

/**
 * @member {Number} offset
 */
TimeZone.prototype['offset'] = undefined;

/**
 * @member {Number} offset_with_dst
 */
TimeZone.prototype['offset_with_dst'] = undefined;

/**
 * @member {String} current_time
 */
TimeZone.prototype['current_time'] = undefined;

/**
 * @member {Number} current_time_unix
 */
TimeZone.prototype['current_time_unix'] = undefined;

/**
 * @member {Boolean} is_dst
 */
TimeZone.prototype['is_dst'] = undefined;

/**
 * @member {Number} dst_savings
 */
TimeZone.prototype['dst_savings'] = undefined;

/**
 * @member {Boolean} dst_exists
 */
TimeZone.prototype['dst_exists'] = undefined;

/**
 * @member {module:models/TimeZoneDstStart} dst_start
 */
TimeZone.prototype['dst_start'] = undefined;

/**
 * @member {module:models/TimeZoneDstEnd} dst_end
 */
TimeZone.prototype['dst_end'] = undefined;






module.exports = TimeZone;

