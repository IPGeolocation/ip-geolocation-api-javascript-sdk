/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The BulkUserAgentRequest model module.
 * @module models/BulkUserAgentRequest
 * @version 2.0
 */
class BulkUserAgentRequest {
    /**
     * Constructs a new <code>BulkUserAgentRequest</code>.
     * @alias module:models/BulkUserAgentRequest
     */
    constructor() { 
        
        BulkUserAgentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkUserAgentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BulkUserAgentRequest} obj Optional instance to populate.
     * @return {module:models/BulkUserAgentRequest} The populated <code>BulkUserAgentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkUserAgentRequest();

            if (data.hasOwnProperty('uaStrings')) {
                obj['uaStrings'] = APIClient.convertToType(data['uaStrings'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BulkUserAgentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BulkUserAgentRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['uaStrings'])) {
            throw new Error("Expected the field `uaStrings` to be an array in the JSON data but got " + data['uaStrings']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} uaStrings
 */
BulkUserAgentRequest.prototype['uaStrings'] = undefined;






module.exports = BulkUserAgentRequest;

