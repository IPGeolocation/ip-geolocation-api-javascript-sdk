/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The UserAgentDataDevice model module.
 * @module models/UserAgentDataDevice
 * @version 2.0
 */
class UserAgentDataDevice {
    /**
     * Constructs a new <code>UserAgentDataDevice</code>.
     * @alias module:models/UserAgentDataDevice
     */
    constructor() { 
        
        UserAgentDataDevice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAgentDataDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserAgentDataDevice} obj Optional instance to populate.
     * @return {module:models/UserAgentDataDevice} The populated <code>UserAgentDataDevice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAgentDataDevice();

            if (data.hasOwnProperty('name')) {
                obj['name'] = APIClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = APIClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = APIClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = APIClient.convertToType(data['cpu'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserAgentDataDevice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserAgentDataDevice</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
            throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
        }
        // ensure the json data is a string
        if (data['cpu'] && !(typeof data['cpu'] === 'string' || data['cpu'] instanceof String)) {
            throw new Error("Expected the field `cpu` to be a primitive type in the JSON string but got " + data['cpu']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
UserAgentDataDevice.prototype['name'] = undefined;

/**
 * @member {String} type
 */
UserAgentDataDevice.prototype['type'] = undefined;

/**
 * @member {String} brand
 */
UserAgentDataDevice.prototype['brand'] = undefined;

/**
 * @member {String} cpu
 */
UserAgentDataDevice.prototype['cpu'] = undefined;






module.exports = UserAgentDataDevice;

