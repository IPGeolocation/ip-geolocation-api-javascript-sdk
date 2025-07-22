/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 */

const APIClient = require('../APIClient');

/**
 * The AstronomyMorning model module.
 * @module models/AstronomyMorning
 * @version 2.0
 */
class AstronomyMorning {
    /**
     * Constructs a new <code>AstronomyMorning</code>.
     * @alias module:models/AstronomyMorning
     */
    constructor() { 
        
        AstronomyMorning.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AstronomyMorning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AstronomyMorning} obj Optional instance to populate.
     * @return {module:models/AstronomyMorning} The populated <code>AstronomyMorning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AstronomyMorning();

            if (data.hasOwnProperty('astronomical_twilight_begin')) {
                obj['astronomical_twilight_begin'] = APIClient.convertToType(data['astronomical_twilight_begin'], 'String');
            }
            if (data.hasOwnProperty('astronomical_twilight_end')) {
                obj['astronomical_twilight_end'] = APIClient.convertToType(data['astronomical_twilight_end'], 'String');
            }
            if (data.hasOwnProperty('nautical_twilight_begin')) {
                obj['nautical_twilight_begin'] = APIClient.convertToType(data['nautical_twilight_begin'], 'String');
            }
            if (data.hasOwnProperty('nautical_twilight_end')) {
                obj['nautical_twilight_end'] = APIClient.convertToType(data['nautical_twilight_end'], 'String');
            }
            if (data.hasOwnProperty('civil_twilight_begin')) {
                obj['civil_twilight_begin'] = APIClient.convertToType(data['civil_twilight_begin'], 'String');
            }
            if (data.hasOwnProperty('civil_twilight_end')) {
                obj['civil_twilight_end'] = APIClient.convertToType(data['civil_twilight_end'], 'String');
            }
            if (data.hasOwnProperty('blue_hour_begin')) {
                obj['blue_hour_begin'] = APIClient.convertToType(data['blue_hour_begin'], 'String');
            }
            if (data.hasOwnProperty('blue_hour_end')) {
                obj['blue_hour_end'] = APIClient.convertToType(data['blue_hour_end'], 'String');
            }
            if (data.hasOwnProperty('golden_hour_begin')) {
                obj['golden_hour_begin'] = APIClient.convertToType(data['golden_hour_begin'], 'String');
            }
            if (data.hasOwnProperty('golden_hour_end')) {
                obj['golden_hour_end'] = APIClient.convertToType(data['golden_hour_end'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AstronomyMorning</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AstronomyMorning</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['astronomical_twilight_begin'] && !(typeof data['astronomical_twilight_begin'] === 'string' || data['astronomical_twilight_begin'] instanceof String)) {
            throw new Error("Expected the field `astronomical_twilight_begin` to be a primitive type in the JSON string but got " + data['astronomical_twilight_begin']);
        }
        // ensure the json data is a string
        if (data['astronomical_twilight_end'] && !(typeof data['astronomical_twilight_end'] === 'string' || data['astronomical_twilight_end'] instanceof String)) {
            throw new Error("Expected the field `astronomical_twilight_end` to be a primitive type in the JSON string but got " + data['astronomical_twilight_end']);
        }
        // ensure the json data is a string
        if (data['nautical_twilight_begin'] && !(typeof data['nautical_twilight_begin'] === 'string' || data['nautical_twilight_begin'] instanceof String)) {
            throw new Error("Expected the field `nautical_twilight_begin` to be a primitive type in the JSON string but got " + data['nautical_twilight_begin']);
        }
        // ensure the json data is a string
        if (data['nautical_twilight_end'] && !(typeof data['nautical_twilight_end'] === 'string' || data['nautical_twilight_end'] instanceof String)) {
            throw new Error("Expected the field `nautical_twilight_end` to be a primitive type in the JSON string but got " + data['nautical_twilight_end']);
        }
        // ensure the json data is a string
        if (data['civil_twilight_begin'] && !(typeof data['civil_twilight_begin'] === 'string' || data['civil_twilight_begin'] instanceof String)) {
            throw new Error("Expected the field `civil_twilight_begin` to be a primitive type in the JSON string but got " + data['civil_twilight_begin']);
        }
        // ensure the json data is a string
        if (data['civil_twilight_end'] && !(typeof data['civil_twilight_end'] === 'string' || data['civil_twilight_end'] instanceof String)) {
            throw new Error("Expected the field `civil_twilight_end` to be a primitive type in the JSON string but got " + data['civil_twilight_end']);
        }
        // ensure the json data is a string
        if (data['blue_hour_begin'] && !(typeof data['blue_hour_begin'] === 'string' || data['blue_hour_begin'] instanceof String)) {
            throw new Error("Expected the field `blue_hour_begin` to be a primitive type in the JSON string but got " + data['blue_hour_begin']);
        }
        // ensure the json data is a string
        if (data['blue_hour_end'] && !(typeof data['blue_hour_end'] === 'string' || data['blue_hour_end'] instanceof String)) {
            throw new Error("Expected the field `blue_hour_end` to be a primitive type in the JSON string but got " + data['blue_hour_end']);
        }
        // ensure the json data is a string
        if (data['golden_hour_begin'] && !(typeof data['golden_hour_begin'] === 'string' || data['golden_hour_begin'] instanceof String)) {
            throw new Error("Expected the field `golden_hour_begin` to be a primitive type in the JSON string but got " + data['golden_hour_begin']);
        }
        // ensure the json data is a string
        if (data['golden_hour_end'] && !(typeof data['golden_hour_end'] === 'string' || data['golden_hour_end'] instanceof String)) {
            throw new Error("Expected the field `golden_hour_end` to be a primitive type in the JSON string but got " + data['golden_hour_end']);
        }

        return true;
    }


}



/**
 * @member {String} astronomical_twilight_begin
 */
AstronomyMorning.prototype['astronomical_twilight_begin'] = undefined;

/**
 * @member {String} astronomical_twilight_end
 */
AstronomyMorning.prototype['astronomical_twilight_end'] = undefined;

/**
 * @member {String} nautical_twilight_begin
 */
AstronomyMorning.prototype['nautical_twilight_begin'] = undefined;

/**
 * @member {String} nautical_twilight_end
 */
AstronomyMorning.prototype['nautical_twilight_end'] = undefined;

/**
 * @member {String} civil_twilight_begin
 */
AstronomyMorning.prototype['civil_twilight_begin'] = undefined;

/**
 * @member {String} civil_twilight_end
 */
AstronomyMorning.prototype['civil_twilight_end'] = undefined;

/**
 * @member {String} blue_hour_begin
 */
AstronomyMorning.prototype['blue_hour_begin'] = undefined;

/**
 * @member {String} blue_hour_end
 */
AstronomyMorning.prototype['blue_hour_end'] = undefined;

/**
 * @member {String} golden_hour_begin
 */
AstronomyMorning.prototype['golden_hour_begin'] = undefined;

/**
 * @member {String} golden_hour_end
 */
AstronomyMorning.prototype['golden_hour_end'] = undefined;






module.exports = AstronomyMorning;

