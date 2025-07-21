/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The Currency model module.
 * @module models/Currency
 * @version 2.0
 */
class Currency {
    /**
     * Constructs a new <code>Currency</code>.
     * @alias module:models/Currency
     */
    constructor() { 
        
        Currency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Currency} obj Optional instance to populate.
     * @return {module:models/Currency} The populated <code>Currency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Currency();

            if (data.hasOwnProperty('code')) {
                obj['code'] = APIClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = APIClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = APIClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Currency</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Currency</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }

        return true;
    }


}



/**
 * @member {String} code
 */
Currency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
Currency.prototype['name'] = undefined;

/**
 * @member {String} symbol
 */
Currency.prototype['symbol'] = undefined;






module.exports = Currency;

