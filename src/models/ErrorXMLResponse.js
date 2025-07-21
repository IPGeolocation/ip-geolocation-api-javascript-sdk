/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The ErrorXMLResponse model module.
 * @module models/ErrorXMLResponse
 * @version 2.0
 */
class ErrorXMLResponse {
    /**
     * Constructs a new <code>ErrorXMLResponse</code>.
     * @alias module:models/ErrorXMLResponse
     */
    constructor() { 
        
        ErrorXMLResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorXMLResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ErrorXMLResponse} obj Optional instance to populate.
     * @return {module:models/ErrorXMLResponse} The populated <code>ErrorXMLResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorXMLResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = APIClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorXMLResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorXMLResponse</code>.
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
ErrorXMLResponse.prototype['message'] = undefined;






module.exports = ErrorXMLResponse;

