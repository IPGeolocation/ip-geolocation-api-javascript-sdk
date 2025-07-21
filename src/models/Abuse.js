/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The Abuse model module.
 * @module models/Abuse
 * @version 2.0
 */
class Abuse {
    /**
     * Constructs a new <code>Abuse</code>.
     * @alias module:models/Abuse
     */
    constructor() { 
        
        Abuse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Abuse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Abuse} obj Optional instance to populate.
     * @return {module:models/Abuse} The populated <code>Abuse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Abuse();

            if (data.hasOwnProperty('route')) {
                obj['route'] = APIClient.convertToType(data['route'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = APIClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('handle')) {
                obj['handle'] = APIClient.convertToType(data['handle'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = APIClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = APIClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = APIClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = APIClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = APIClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = APIClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('phone_numbers')) {
                obj['phone_numbers'] = APIClient.convertToType(data['phone_numbers'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Abuse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Abuse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['route'] && !(typeof data['route'] === 'string' || data['route'] instanceof String)) {
            throw new Error("Expected the field `route` to be a primitive type in the JSON string but got " + data['route']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['handle'] && !(typeof data['handle'] === 'string' || data['handle'] instanceof String)) {
            throw new Error("Expected the field `handle` to be a primitive type in the JSON string but got " + data['handle']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['organization'] && !(typeof data['organization'] === 'string' || data['organization'] instanceof String)) {
            throw new Error("Expected the field `organization` to be a primitive type in the JSON string but got " + data['organization']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['emails'])) {
            throw new Error("Expected the field `emails` to be an array in the JSON data but got " + data['emails']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['phone_numbers'])) {
            throw new Error("Expected the field `phone_numbers` to be an array in the JSON data but got " + data['phone_numbers']);
        }

        return true;
    }


}



/**
 * @member {String} route
 */
Abuse.prototype['route'] = undefined;

/**
 * @member {String} country
 */
Abuse.prototype['country'] = undefined;

/**
 * @member {String} handle
 */
Abuse.prototype['handle'] = undefined;

/**
 * @member {String} name
 */
Abuse.prototype['name'] = undefined;

/**
 * @member {String} organization
 */
Abuse.prototype['organization'] = undefined;

/**
 * @member {String} role
 */
Abuse.prototype['role'] = undefined;

/**
 * @member {String} kind
 */
Abuse.prototype['kind'] = undefined;

/**
 * @member {String} address
 */
Abuse.prototype['address'] = undefined;

/**
 * @member {Array.<String>} emails
 */
Abuse.prototype['emails'] = undefined;

/**
 * @member {Array.<String>} phone_numbers
 */
Abuse.prototype['phone_numbers'] = undefined;






module.exports = Abuse;

