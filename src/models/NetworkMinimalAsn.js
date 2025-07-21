/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The NetworkMinimalAsn model module.
 * @module models/NetworkMinimalAsn
 * @version 2.0
 */
class NetworkMinimalAsn {
    /**
     * Constructs a new <code>NetworkMinimalAsn</code>.
     * @alias module:models/NetworkMinimalAsn
     */
    constructor() { 
        
        NetworkMinimalAsn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkMinimalAsn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/NetworkMinimalAsn} obj Optional instance to populate.
     * @return {module:models/NetworkMinimalAsn} The populated <code>NetworkMinimalAsn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkMinimalAsn();

            if (data.hasOwnProperty('as_number')) {
                obj['as_number'] = APIClient.convertToType(data['as_number'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = APIClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = APIClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NetworkMinimalAsn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkMinimalAsn</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['as_number'] && !(typeof data['as_number'] === 'string' || data['as_number'] instanceof String)) {
            throw new Error("Expected the field `as_number` to be a primitive type in the JSON string but got " + data['as_number']);
        }
        // ensure the json data is a string
        if (data['organization'] && !(typeof data['organization'] === 'string' || data['organization'] instanceof String)) {
            throw new Error("Expected the field `organization` to be a primitive type in the JSON string but got " + data['organization']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }

        return true;
    }


}



/**
 * @member {String} as_number
 */
NetworkMinimalAsn.prototype['as_number'] = undefined;

/**
 * @member {String} organization
 */
NetworkMinimalAsn.prototype['organization'] = undefined;

/**
 * @member {String} country
 */
NetworkMinimalAsn.prototype['country'] = undefined;






module.exports = NetworkMinimalAsn;

