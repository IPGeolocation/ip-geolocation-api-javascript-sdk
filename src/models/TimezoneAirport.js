/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The TimezoneAirport model module.
 * @module models/TimezoneAirport
 * @version 2.0
 */
class TimezoneAirport {
    /**
     * Constructs a new <code>TimezoneAirport</code>.
     * @alias module:models/TimezoneAirport
     */
    constructor() { 
        
        TimezoneAirport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimezoneAirport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TimezoneAirport} obj Optional instance to populate.
     * @return {module:models/TimezoneAirport} The populated <code>TimezoneAirport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimezoneAirport();

            if (data.hasOwnProperty('type')) {
                obj['type'] = APIClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = APIClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = APIClient.convertToType(data['latitude'], 'String');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = APIClient.convertToType(data['longitude'], 'String');
            }
            if (data.hasOwnProperty('elevation_ft')) {
                obj['elevation_ft'] = APIClient.convertToType(data['elevation_ft'], 'Number');
            }
            if (data.hasOwnProperty('continent_code')) {
                obj['continent_code'] = APIClient.convertToType(data['continent_code'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = APIClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = APIClient.convertToType(data['state_code'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = APIClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('iata_code')) {
                obj['iata_code'] = APIClient.convertToType(data['iata_code'], 'String');
            }
            if (data.hasOwnProperty('icao_code')) {
                obj['icao_code'] = APIClient.convertToType(data['icao_code'], 'String');
            }
            if (data.hasOwnProperty('faa_code')) {
                obj['faa_code'] = APIClient.convertToType(data['faa_code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimezoneAirport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimezoneAirport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['latitude'] && !(typeof data['latitude'] === 'string' || data['latitude'] instanceof String)) {
            throw new Error("Expected the field `latitude` to be a primitive type in the JSON string but got " + data['latitude']);
        }
        // ensure the json data is a string
        if (data['longitude'] && !(typeof data['longitude'] === 'string' || data['longitude'] instanceof String)) {
            throw new Error("Expected the field `longitude` to be a primitive type in the JSON string but got " + data['longitude']);
        }
        // ensure the json data is a string
        if (data['continent_code'] && !(typeof data['continent_code'] === 'string' || data['continent_code'] instanceof String)) {
            throw new Error("Expected the field `continent_code` to be a primitive type in the JSON string but got " + data['continent_code']);
        }
        // ensure the json data is a string
        if (data['country_code'] && !(typeof data['country_code'] === 'string' || data['country_code'] instanceof String)) {
            throw new Error("Expected the field `country_code` to be a primitive type in the JSON string but got " + data['country_code']);
        }
        // ensure the json data is a string
        if (data['state_code'] && !(typeof data['state_code'] === 'string' || data['state_code'] instanceof String)) {
            throw new Error("Expected the field `state_code` to be a primitive type in the JSON string but got " + data['state_code']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['iata_code'] && !(typeof data['iata_code'] === 'string' || data['iata_code'] instanceof String)) {
            throw new Error("Expected the field `iata_code` to be a primitive type in the JSON string but got " + data['iata_code']);
        }
        // ensure the json data is a string
        if (data['icao_code'] && !(typeof data['icao_code'] === 'string' || data['icao_code'] instanceof String)) {
            throw new Error("Expected the field `icao_code` to be a primitive type in the JSON string but got " + data['icao_code']);
        }
        // ensure the json data is a string
        if (data['faa_code'] && !(typeof data['faa_code'] === 'string' || data['faa_code'] instanceof String)) {
            throw new Error("Expected the field `faa_code` to be a primitive type in the JSON string but got " + data['faa_code']);
        }

        return true;
    }


}



/**
 * @member {String} type
 */
TimezoneAirport.prototype['type'] = undefined;

/**
 * @member {String} name
 */
TimezoneAirport.prototype['name'] = undefined;

/**
 * @member {String} latitude
 */
TimezoneAirport.prototype['latitude'] = undefined;

/**
 * @member {String} longitude
 */
TimezoneAirport.prototype['longitude'] = undefined;

/**
 * @member {Number} elevation_ft
 */
TimezoneAirport.prototype['elevation_ft'] = undefined;

/**
 * @member {String} continent_code
 */
TimezoneAirport.prototype['continent_code'] = undefined;

/**
 * @member {String} country_code
 */
TimezoneAirport.prototype['country_code'] = undefined;

/**
 * @member {String} state_code
 */
TimezoneAirport.prototype['state_code'] = undefined;

/**
 * @member {String} city
 */
TimezoneAirport.prototype['city'] = undefined;

/**
 * @member {String} iata_code
 */
TimezoneAirport.prototype['iata_code'] = undefined;

/**
 * @member {String} icao_code
 */
TimezoneAirport.prototype['icao_code'] = undefined;

/**
 * @member {String} faa_code
 */
TimezoneAirport.prototype['faa_code'] = undefined;






module.exports = TimezoneAirport;

