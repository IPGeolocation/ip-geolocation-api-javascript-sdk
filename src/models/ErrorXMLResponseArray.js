/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The ErrorXMLResponseArray model module.
 * @module models/ErrorXMLResponseArray
 * @version 2.0
 */
class ErrorXMLResponseArray {
    /**
     * Constructs a new <code>ErrorXMLResponseArray</code>.
     * @alias module:models/ErrorXMLResponseArray
     */
    constructor() { 
        
        ErrorXMLResponseArray.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorXMLResponseArray</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ErrorXMLResponseArray} obj Optional instance to populate.
     * @return {module:models/ErrorXMLResponseArray} The populated <code>ErrorXMLResponseArray</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorXMLResponseArray();

            if (data.hasOwnProperty('message')) {
                obj['message'] = APIClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorXMLResponseArray</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorXMLResponseArray</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
ErrorXMLResponseArray.prototype['message'] = undefined;






module.exports = ErrorXMLResponseArray;

