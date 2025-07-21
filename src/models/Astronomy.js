/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The Astronomy model module.
 * @module models/Astronomy
 * @version 2.0
 */
class Astronomy {
    /**
     * Constructs a new <code>Astronomy</code>.
     * @alias module:models/Astronomy
     */
    constructor() { 
        
        Astronomy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Astronomy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Astronomy} obj Optional instance to populate.
     * @return {module:models/Astronomy} The populated <code>Astronomy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Astronomy();

            if (data.hasOwnProperty('date')) {
                obj['date'] = APIClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('current_time')) {
                obj['current_time'] = APIClient.convertToType(data['current_time'], 'String');
            }
            if (data.hasOwnProperty('sunrise')) {
                obj['sunrise'] = APIClient.convertToType(data['sunrise'], 'String');
            }
            if (data.hasOwnProperty('sunset')) {
                obj['sunset'] = APIClient.convertToType(data['sunset'], 'String');
            }
            if (data.hasOwnProperty('sun_status')) {
                obj['sun_status'] = APIClient.convertToType(data['sun_status'], 'String');
            }
            if (data.hasOwnProperty('solar_noon')) {
                obj['solar_noon'] = APIClient.convertToType(data['solar_noon'], 'String');
            }
            if (data.hasOwnProperty('day_length')) {
                obj['day_length'] = APIClient.convertToType(data['day_length'], 'String');
            }
            if (data.hasOwnProperty('sun_altitude')) {
                obj['sun_altitude'] = APIClient.convertToType(data['sun_altitude'], 'Number');
            }
            if (data.hasOwnProperty('sun_distance')) {
                obj['sun_distance'] = APIClient.convertToType(data['sun_distance'], 'Number');
            }
            if (data.hasOwnProperty('sun_azimuth')) {
                obj['sun_azimuth'] = APIClient.convertToType(data['sun_azimuth'], 'Number');
            }
            if (data.hasOwnProperty('moonrise')) {
                obj['moonrise'] = APIClient.convertToType(data['moonrise'], 'String');
            }
            if (data.hasOwnProperty('moonset')) {
                obj['moonset'] = APIClient.convertToType(data['moonset'], 'String');
            }
            if (data.hasOwnProperty('moon_status')) {
                obj['moon_status'] = APIClient.convertToType(data['moon_status'], 'String');
            }
            if (data.hasOwnProperty('moon_altitude')) {
                obj['moon_altitude'] = APIClient.convertToType(data['moon_altitude'], 'Number');
            }
            if (data.hasOwnProperty('moon_distance')) {
                obj['moon_distance'] = APIClient.convertToType(data['moon_distance'], 'Number');
            }
            if (data.hasOwnProperty('moon_azimuth')) {
                obj['moon_azimuth'] = APIClient.convertToType(data['moon_azimuth'], 'Number');
            }
            if (data.hasOwnProperty('moon_parallactic_angle')) {
                obj['moon_parallactic_angle'] = APIClient.convertToType(data['moon_parallactic_angle'], 'Number');
            }
            if (data.hasOwnProperty('moon_phase')) {
                obj['moon_phase'] = APIClient.convertToType(data['moon_phase'], 'String');
            }
            if (data.hasOwnProperty('moon_illumination_percentage')) {
                obj['moon_illumination_percentage'] = APIClient.convertToType(data['moon_illumination_percentage'], 'String');
            }
            if (data.hasOwnProperty('moon_angle')) {
                obj['moon_angle'] = APIClient.convertToType(data['moon_angle'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Astronomy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Astronomy</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['current_time'] && !(typeof data['current_time'] === 'string' || data['current_time'] instanceof String)) {
            throw new Error("Expected the field `current_time` to be a primitive type in the JSON string but got " + data['current_time']);
        }
        // ensure the json data is a string
        if (data['sunrise'] && !(typeof data['sunrise'] === 'string' || data['sunrise'] instanceof String)) {
            throw new Error("Expected the field `sunrise` to be a primitive type in the JSON string but got " + data['sunrise']);
        }
        // ensure the json data is a string
        if (data['sunset'] && !(typeof data['sunset'] === 'string' || data['sunset'] instanceof String)) {
            throw new Error("Expected the field `sunset` to be a primitive type in the JSON string but got " + data['sunset']);
        }
        // ensure the json data is a string
        if (data['sun_status'] && !(typeof data['sun_status'] === 'string' || data['sun_status'] instanceof String)) {
            throw new Error("Expected the field `sun_status` to be a primitive type in the JSON string but got " + data['sun_status']);
        }
        // ensure the json data is a string
        if (data['solar_noon'] && !(typeof data['solar_noon'] === 'string' || data['solar_noon'] instanceof String)) {
            throw new Error("Expected the field `solar_noon` to be a primitive type in the JSON string but got " + data['solar_noon']);
        }
        // ensure the json data is a string
        if (data['day_length'] && !(typeof data['day_length'] === 'string' || data['day_length'] instanceof String)) {
            throw new Error("Expected the field `day_length` to be a primitive type in the JSON string but got " + data['day_length']);
        }
        // ensure the json data is a string
        if (data['moonrise'] && !(typeof data['moonrise'] === 'string' || data['moonrise'] instanceof String)) {
            throw new Error("Expected the field `moonrise` to be a primitive type in the JSON string but got " + data['moonrise']);
        }
        // ensure the json data is a string
        if (data['moonset'] && !(typeof data['moonset'] === 'string' || data['moonset'] instanceof String)) {
            throw new Error("Expected the field `moonset` to be a primitive type in the JSON string but got " + data['moonset']);
        }
        // ensure the json data is a string
        if (data['moon_status'] && !(typeof data['moon_status'] === 'string' || data['moon_status'] instanceof String)) {
            throw new Error("Expected the field `moon_status` to be a primitive type in the JSON string but got " + data['moon_status']);
        }
        // ensure the json data is a string
        if (data['moon_phase'] && !(typeof data['moon_phase'] === 'string' || data['moon_phase'] instanceof String)) {
            throw new Error("Expected the field `moon_phase` to be a primitive type in the JSON string but got " + data['moon_phase']);
        }
        // ensure the json data is a string
        if (data['moon_illumination_percentage'] && !(typeof data['moon_illumination_percentage'] === 'string' || data['moon_illumination_percentage'] instanceof String)) {
            throw new Error("Expected the field `moon_illumination_percentage` to be a primitive type in the JSON string but got " + data['moon_illumination_percentage']);
        }

        return true;
    }


}



/**
 * @member {Date} date
 */
Astronomy.prototype['date'] = undefined;

/**
 * @member {String} current_time
 */
Astronomy.prototype['current_time'] = undefined;

/**
 * @member {String} sunrise
 */
Astronomy.prototype['sunrise'] = undefined;

/**
 * @member {String} sunset
 */
Astronomy.prototype['sunset'] = undefined;

/**
 * @member {String} sun_status
 */
Astronomy.prototype['sun_status'] = undefined;

/**
 * @member {String} solar_noon
 */
Astronomy.prototype['solar_noon'] = undefined;

/**
 * @member {String} day_length
 */
Astronomy.prototype['day_length'] = undefined;

/**
 * @member {Number} sun_altitude
 */
Astronomy.prototype['sun_altitude'] = undefined;

/**
 * @member {Number} sun_distance
 */
Astronomy.prototype['sun_distance'] = undefined;

/**
 * @member {Number} sun_azimuth
 */
Astronomy.prototype['sun_azimuth'] = undefined;

/**
 * @member {String} moonrise
 */
Astronomy.prototype['moonrise'] = undefined;

/**
 * @member {String} moonset
 */
Astronomy.prototype['moonset'] = undefined;

/**
 * @member {String} moon_status
 */
Astronomy.prototype['moon_status'] = undefined;

/**
 * @member {Number} moon_altitude
 */
Astronomy.prototype['moon_altitude'] = undefined;

/**
 * @member {Number} moon_distance
 */
Astronomy.prototype['moon_distance'] = undefined;

/**
 * @member {Number} moon_azimuth
 */
Astronomy.prototype['moon_azimuth'] = undefined;

/**
 * @member {Number} moon_parallactic_angle
 */
Astronomy.prototype['moon_parallactic_angle'] = undefined;

/**
 * @member {String} moon_phase
 */
Astronomy.prototype['moon_phase'] = undefined;

/**
 * @member {String} moon_illumination_percentage
 */
Astronomy.prototype['moon_illumination_percentage'] = undefined;

/**
 * @member {Number} moon_angle
 */
Astronomy.prototype['moon_angle'] = undefined;






module.exports = Astronomy;

