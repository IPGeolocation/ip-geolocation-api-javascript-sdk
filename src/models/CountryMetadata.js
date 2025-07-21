/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The CountryMetadata model module.
 * @module models/CountryMetadata
 * @version 2.0
 */
class CountryMetadata {
    /**
     * Constructs a new <code>CountryMetadata</code>.
     * @alias module:models/CountryMetadata
     */
    constructor() { 
        
        CountryMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CountryMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CountryMetadata} obj Optional instance to populate.
     * @return {module:models/CountryMetadata} The populated <code>CountryMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountryMetadata();

            if (data.hasOwnProperty('calling_code')) {
                obj['calling_code'] = APIClient.convertToType(data['calling_code'], 'String');
            }
            if (data.hasOwnProperty('tld')) {
                obj['tld'] = APIClient.convertToType(data['tld'], 'String');
            }
            if (data.hasOwnProperty('languages')) {
                obj['languages'] = APIClient.convertToType(data['languages'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CountryMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CountryMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['calling_code'] && !(typeof data['calling_code'] === 'string' || data['calling_code'] instanceof String)) {
            throw new Error("Expected the field `calling_code` to be a primitive type in the JSON string but got " + data['calling_code']);
        }
        // ensure the json data is a string
        if (data['tld'] && !(typeof data['tld'] === 'string' || data['tld'] instanceof String)) {
            throw new Error("Expected the field `tld` to be a primitive type in the JSON string but got " + data['tld']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['languages'])) {
            throw new Error("Expected the field `languages` to be an array in the JSON data but got " + data['languages']);
        }

        return true;
    }


}



/**
 * @member {String} calling_code
 */
CountryMetadata.prototype['calling_code'] = undefined;

/**
 * @member {String} tld
 */
CountryMetadata.prototype['tld'] = undefined;

/**
 * @member {Array.<String>} languages
 */
CountryMetadata.prototype['languages'] = undefined;






module.exports = CountryMetadata;

