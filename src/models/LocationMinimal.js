/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The LocationMinimal model module.
 * @module models/LocationMinimal
 * @version 2.0
 */
class LocationMinimal {
    /**
     * Constructs a new <code>LocationMinimal</code>.
     * @alias module:models/LocationMinimal
     */
    constructor() { 
        
        LocationMinimal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocationMinimal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LocationMinimal} obj Optional instance to populate.
     * @return {module:models/LocationMinimal} The populated <code>LocationMinimal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationMinimal();

            if (data.hasOwnProperty('continent_code')) {
                obj['continent_code'] = APIClient.convertToType(data['continent_code'], 'String');
            }
            if (data.hasOwnProperty('continent_name')) {
                obj['continent_name'] = APIClient.convertToType(data['continent_name'], 'String');
            }
            if (data.hasOwnProperty('country_code2')) {
                obj['country_code2'] = APIClient.convertToType(data['country_code2'], 'String');
            }
            if (data.hasOwnProperty('country_code3')) {
                obj['country_code3'] = APIClient.convertToType(data['country_code3'], 'String');
            }
            if (data.hasOwnProperty('country_name')) {
                obj['country_name'] = APIClient.convertToType(data['country_name'], 'String');
            }
            if (data.hasOwnProperty('country_name_official')) {
                obj['country_name_official'] = APIClient.convertToType(data['country_name_official'], 'String');
            }
            if (data.hasOwnProperty('country_capital')) {
                obj['country_capital'] = APIClient.convertToType(data['country_capital'], 'String');
            }
            if (data.hasOwnProperty('state_prov')) {
                obj['state_prov'] = APIClient.convertToType(data['state_prov'], 'String');
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = APIClient.convertToType(data['state_code'], 'String');
            }
            if (data.hasOwnProperty('district')) {
                obj['district'] = APIClient.convertToType(data['district'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = APIClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('zipcode')) {
                obj['zipcode'] = APIClient.convertToType(data['zipcode'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = APIClient.convertToType(data['latitude'], 'String');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = APIClient.convertToType(data['longitude'], 'String');
            }
            if (data.hasOwnProperty('is_eu')) {
                obj['is_eu'] = APIClient.convertToType(data['is_eu'], 'Boolean');
            }
            if (data.hasOwnProperty('country_flag')) {
                obj['country_flag'] = APIClient.convertToType(data['country_flag'], 'String');
            }
            if (data.hasOwnProperty('geoname_id')) {
                obj['geoname_id'] = APIClient.convertToType(data['geoname_id'], 'String');
            }
            if (data.hasOwnProperty('country_emoji')) {
                obj['country_emoji'] = APIClient.convertToType(data['country_emoji'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationMinimal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationMinimal</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['continent_code'] && !(typeof data['continent_code'] === 'string' || data['continent_code'] instanceof String)) {
            throw new Error("Expected the field `continent_code` to be a primitive type in the JSON string but got " + data['continent_code']);
        }
        // ensure the json data is a string
        if (data['continent_name'] && !(typeof data['continent_name'] === 'string' || data['continent_name'] instanceof String)) {
            throw new Error("Expected the field `continent_name` to be a primitive type in the JSON string but got " + data['continent_name']);
        }
        // ensure the json data is a string
        if (data['country_code2'] && !(typeof data['country_code2'] === 'string' || data['country_code2'] instanceof String)) {
            throw new Error("Expected the field `country_code2` to be a primitive type in the JSON string but got " + data['country_code2']);
        }
        // ensure the json data is a string
        if (data['country_code3'] && !(typeof data['country_code3'] === 'string' || data['country_code3'] instanceof String)) {
            throw new Error("Expected the field `country_code3` to be a primitive type in the JSON string but got " + data['country_code3']);
        }
        // ensure the json data is a string
        if (data['country_name'] && !(typeof data['country_name'] === 'string' || data['country_name'] instanceof String)) {
            throw new Error("Expected the field `country_name` to be a primitive type in the JSON string but got " + data['country_name']);
        }
        // ensure the json data is a string
        if (data['country_name_official'] && !(typeof data['country_name_official'] === 'string' || data['country_name_official'] instanceof String)) {
            throw new Error("Expected the field `country_name_official` to be a primitive type in the JSON string but got " + data['country_name_official']);
        }
        // ensure the json data is a string
        if (data['country_capital'] && !(typeof data['country_capital'] === 'string' || data['country_capital'] instanceof String)) {
            throw new Error("Expected the field `country_capital` to be a primitive type in the JSON string but got " + data['country_capital']);
        }
        // ensure the json data is a string
        if (data['state_prov'] && !(typeof data['state_prov'] === 'string' || data['state_prov'] instanceof String)) {
            throw new Error("Expected the field `state_prov` to be a primitive type in the JSON string but got " + data['state_prov']);
        }
        // ensure the json data is a string
        if (data['state_code'] && !(typeof data['state_code'] === 'string' || data['state_code'] instanceof String)) {
            throw new Error("Expected the field `state_code` to be a primitive type in the JSON string but got " + data['state_code']);
        }
        // ensure the json data is a string
        if (data['district'] && !(typeof data['district'] === 'string' || data['district'] instanceof String)) {
            throw new Error("Expected the field `district` to be a primitive type in the JSON string but got " + data['district']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['zipcode'] && !(typeof data['zipcode'] === 'string' || data['zipcode'] instanceof String)) {
            throw new Error("Expected the field `zipcode` to be a primitive type in the JSON string but got " + data['zipcode']);
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
        if (data['country_flag'] && !(typeof data['country_flag'] === 'string' || data['country_flag'] instanceof String)) {
            throw new Error("Expected the field `country_flag` to be a primitive type in the JSON string but got " + data['country_flag']);
        }
        // ensure the json data is a string
        if (data['geoname_id'] && !(typeof data['geoname_id'] === 'string' || data['geoname_id'] instanceof String)) {
            throw new Error("Expected the field `geoname_id` to be a primitive type in the JSON string but got " + data['geoname_id']);
        }
        // ensure the json data is a string
        if (data['country_emoji'] && !(typeof data['country_emoji'] === 'string' || data['country_emoji'] instanceof String)) {
            throw new Error("Expected the field `country_emoji` to be a primitive type in the JSON string but got " + data['country_emoji']);
        }

        return true;
    }


}



/**
 * @member {String} continent_code
 */
LocationMinimal.prototype['continent_code'] = undefined;

/**
 * @member {String} continent_name
 */
LocationMinimal.prototype['continent_name'] = undefined;

/**
 * @member {String} country_code2
 */
LocationMinimal.prototype['country_code2'] = undefined;

/**
 * @member {String} country_code3
 */
LocationMinimal.prototype['country_code3'] = undefined;

/**
 * @member {String} country_name
 */
LocationMinimal.prototype['country_name'] = undefined;

/**
 * @member {String} country_name_official
 */
LocationMinimal.prototype['country_name_official'] = undefined;

/**
 * @member {String} country_capital
 */
LocationMinimal.prototype['country_capital'] = undefined;

/**
 * @member {String} state_prov
 */
LocationMinimal.prototype['state_prov'] = undefined;

/**
 * @member {String} state_code
 */
LocationMinimal.prototype['state_code'] = undefined;

/**
 * @member {String} district
 */
LocationMinimal.prototype['district'] = undefined;

/**
 * @member {String} city
 */
LocationMinimal.prototype['city'] = undefined;

/**
 * @member {String} zipcode
 */
LocationMinimal.prototype['zipcode'] = undefined;

/**
 * @member {String} latitude
 */
LocationMinimal.prototype['latitude'] = undefined;

/**
 * @member {String} longitude
 */
LocationMinimal.prototype['longitude'] = undefined;

/**
 * @member {Boolean} is_eu
 */
LocationMinimal.prototype['is_eu'] = undefined;

/**
 * @member {String} country_flag
 */
LocationMinimal.prototype['country_flag'] = undefined;

/**
 * @member {String} geoname_id
 */
LocationMinimal.prototype['geoname_id'] = undefined;

/**
 * @member {String} country_emoji
 */
LocationMinimal.prototype['country_emoji'] = undefined;






module.exports = LocationMinimal;

