/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The UserAgentRequest model module.
 * @module models/UserAgentRequest
 * @version 2.0
 */
class UserAgentRequest {
    /**
     * Constructs a new <code>UserAgentRequest</code>.
     * @alias module:models/UserAgentRequest
     */
    constructor() { 
        
        UserAgentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAgentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserAgentRequest} obj Optional instance to populate.
     * @return {module:models/UserAgentRequest} The populated <code>UserAgentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAgentRequest();

            if (data.hasOwnProperty('uaString')) {
                obj['uaString'] = APIClient.convertToType(data['uaString'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserAgentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserAgentRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uaString'] && !(typeof data['uaString'] === 'string' || data['uaString'] instanceof String)) {
            throw new Error("Expected the field `uaString` to be a primitive type in the JSON string but got " + data['uaString']);
        }

        return true;
    }


}



/**
 * @member {String} uaString
 */
UserAgentRequest.prototype['uaString'] = undefined;






module.exports = UserAgentRequest;

