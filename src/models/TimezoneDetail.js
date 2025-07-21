/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const TimezoneDetailDstEnd = require('./TimezoneDetailDstEnd');
const TimezoneDetailDstStart = require('./TimezoneDetailDstStart');

/**
 * The TimezoneDetail model module.
 * @module models/TimezoneDetail
 * @version 2.0
 */
class TimezoneDetail {
    /**
     * Constructs a new <code>TimezoneDetail</code>.
     * @alias module:models/TimezoneDetail
     */
    constructor() { 
        
        TimezoneDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimezoneDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TimezoneDetail} obj Optional instance to populate.
     * @return {module:models/TimezoneDetail} The populated <code>TimezoneDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimezoneDetail();

            if (data.hasOwnProperty('name')) {
                obj['name'] = APIClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = APIClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('offset_with_dst')) {
                obj['offset_with_dst'] = APIClient.convertToType(data['offset_with_dst'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = APIClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('date_time')) {
                obj['date_time'] = APIClient.convertToType(data['date_time'], 'String');
            }
            if (data.hasOwnProperty('date_time_txt')) {
                obj['date_time_txt'] = APIClient.convertToType(data['date_time_txt'], 'String');
            }
            if (data.hasOwnProperty('date_time_wti')) {
                obj['date_time_wti'] = APIClient.convertToType(data['date_time_wti'], 'String');
            }
            if (data.hasOwnProperty('date_time_ymd')) {
                obj['date_time_ymd'] = APIClient.convertToType(data['date_time_ymd'], 'Date');
            }
            if (data.hasOwnProperty('date_time_unix')) {
                obj['date_time_unix'] = APIClient.convertToType(data['date_time_unix'], 'Number');
            }
            if (data.hasOwnProperty('time_24')) {
                obj['time_24'] = APIClient.convertToType(data['time_24'], 'String');
            }
            if (data.hasOwnProperty('time_12')) {
                obj['time_12'] = APIClient.convertToType(data['time_12'], 'String');
            }
            if (data.hasOwnProperty('week')) {
                obj['week'] = APIClient.convertToType(data['week'], 'Number');
            }
            if (data.hasOwnProperty('month')) {
                obj['month'] = APIClient.convertToType(data['month'], 'Number');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = APIClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('year_abbr')) {
                obj['year_abbr'] = APIClient.convertToType(data['year_abbr'], 'String');
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
                obj['dst_start'] = TimezoneDetailDstStart.constructFromObject(data['dst_start']);
            }
            if (data.hasOwnProperty('dst_end')) {
                obj['dst_end'] = TimezoneDetailDstEnd.constructFromObject(data['dst_end']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimezoneDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimezoneDetail</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['date_time'] && !(typeof data['date_time'] === 'string' || data['date_time'] instanceof String)) {
            throw new Error("Expected the field `date_time` to be a primitive type in the JSON string but got " + data['date_time']);
        }
        // ensure the json data is a string
        if (data['date_time_txt'] && !(typeof data['date_time_txt'] === 'string' || data['date_time_txt'] instanceof String)) {
            throw new Error("Expected the field `date_time_txt` to be a primitive type in the JSON string but got " + data['date_time_txt']);
        }
        // ensure the json data is a string
        if (data['date_time_wti'] && !(typeof data['date_time_wti'] === 'string' || data['date_time_wti'] instanceof String)) {
            throw new Error("Expected the field `date_time_wti` to be a primitive type in the JSON string but got " + data['date_time_wti']);
        }
        // ensure the json data is a string
        if (data['time_24'] && !(typeof data['time_24'] === 'string' || data['time_24'] instanceof String)) {
            throw new Error("Expected the field `time_24` to be a primitive type in the JSON string but got " + data['time_24']);
        }
        // ensure the json data is a string
        if (data['time_12'] && !(typeof data['time_12'] === 'string' || data['time_12'] instanceof String)) {
            throw new Error("Expected the field `time_12` to be a primitive type in the JSON string but got " + data['time_12']);
        }
        // ensure the json data is a string
        if (data['year_abbr'] && !(typeof data['year_abbr'] === 'string' || data['year_abbr'] instanceof String)) {
            throw new Error("Expected the field `year_abbr` to be a primitive type in the JSON string but got " + data['year_abbr']);
        }
        // validate the optional field `dst_start`
        if (data['dst_start']) { // data not null
          TimezoneDetailDstStart.validateJSON(data['dst_start']);
        }
        // validate the optional field `dst_end`
        if (data['dst_end']) { // data not null
          TimezoneDetailDstEnd.validateJSON(data['dst_end']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
TimezoneDetail.prototype['name'] = undefined;

/**
 * @member {Number} offset
 */
TimezoneDetail.prototype['offset'] = undefined;

/**
 * @member {Number} offset_with_dst
 */
TimezoneDetail.prototype['offset_with_dst'] = undefined;

/**
 * @member {Date} date
 */
TimezoneDetail.prototype['date'] = undefined;

/**
 * @member {String} date_time
 */
TimezoneDetail.prototype['date_time'] = undefined;

/**
 * @member {String} date_time_txt
 */
TimezoneDetail.prototype['date_time_txt'] = undefined;

/**
 * @member {String} date_time_wti
 */
TimezoneDetail.prototype['date_time_wti'] = undefined;

/**
 * @member {Date} date_time_ymd
 */
TimezoneDetail.prototype['date_time_ymd'] = undefined;

/**
 * @member {Number} date_time_unix
 */
TimezoneDetail.prototype['date_time_unix'] = undefined;

/**
 * @member {String} time_24
 */
TimezoneDetail.prototype['time_24'] = undefined;

/**
 * @member {String} time_12
 */
TimezoneDetail.prototype['time_12'] = undefined;

/**
 * @member {Number} week
 */
TimezoneDetail.prototype['week'] = undefined;

/**
 * @member {Number} month
 */
TimezoneDetail.prototype['month'] = undefined;

/**
 * @member {Number} year
 */
TimezoneDetail.prototype['year'] = undefined;

/**
 * @member {String} year_abbr
 */
TimezoneDetail.prototype['year_abbr'] = undefined;

/**
 * @member {Boolean} is_dst
 */
TimezoneDetail.prototype['is_dst'] = undefined;

/**
 * @member {Number} dst_savings
 */
TimezoneDetail.prototype['dst_savings'] = undefined;

/**
 * @member {Boolean} dst_exists
 */
TimezoneDetail.prototype['dst_exists'] = undefined;

/**
 * @member {module:models/TimezoneDetailDstStart} dst_start
 */
TimezoneDetail.prototype['dst_start'] = undefined;

/**
 * @member {module:models/TimezoneDetailDstEnd} dst_end
 */
TimezoneDetail.prototype['dst_end'] = undefined;






module.exports = TimezoneDetail;

