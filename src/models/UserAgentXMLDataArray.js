/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const UserAgentDataDevice = require('./UserAgentDataDevice.js');
const UserAgentDataEngine = require('./UserAgentDataEngine.js');
const UserAgentDataOperatingSystem = require('./UserAgentDataOperatingSystem.js');

/**
 * The UserAgentXMLDataArray model module.
 * @module models/UserAgentXMLDataArray
 * @version 2.0
 */
class UserAgentXMLDataArray {
    /**
     * Constructs a new <code>UserAgentXMLDataArray</code>.
     * @alias module:models/UserAgentXMLDataArray
     */
    constructor() { 
        
        UserAgentXMLDataArray.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAgentXMLDataArray</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserAgentXMLDataArray} obj Optional instance to populate.
     * @return {module:models/UserAgentXMLDataArray} The populated <code>UserAgentXMLDataArray</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAgentXMLDataArray();

            if (data.hasOwnProperty('user_agent_string')) {
                obj['user_agent_string'] = APIClient.convertToType(data['user_agent_string'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = APIClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = APIClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = APIClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('version_major')) {
                obj['version_major'] = APIClient.convertToType(data['version_major'], 'String');
            }
            if (data.hasOwnProperty('device')) {
                obj['device'] = UserAgentDataDevice.constructFromObject(data['device']);
            }
            if (data.hasOwnProperty('engine')) {
                obj['engine'] = UserAgentDataEngine.constructFromObject(data['engine']);
            }
            if (data.hasOwnProperty('operating_system')) {
                obj['operating_system'] = UserAgentDataOperatingSystem.constructFromObject(data['operating_system']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserAgentXMLDataArray</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserAgentXMLDataArray</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['user_agent_string'] && !(typeof data['user_agent_string'] === 'string' || data['user_agent_string'] instanceof String)) {
            throw new Error("Expected the field `user_agent_string` to be a primitive type in the JSON string but got " + data['user_agent_string']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['version_major'] && !(typeof data['version_major'] === 'string' || data['version_major'] instanceof String)) {
            throw new Error("Expected the field `version_major` to be a primitive type in the JSON string but got " + data['version_major']);
        }
        // validate the optional field `device`
        if (data['device']) { // data not null
          UserAgentDataDevice.validateJSON(data['device']);
        }
        // validate the optional field `engine`
        if (data['engine']) { // data not null
          UserAgentDataEngine.validateJSON(data['engine']);
        }
        // validate the optional field `operating_system`
        if (data['operating_system']) { // data not null
          UserAgentDataOperatingSystem.validateJSON(data['operating_system']);
        }

        return true;
    }


}



/**
 * @member {String} user_agent_string
 */
UserAgentXMLDataArray.prototype['user_agent_string'] = undefined;

/**
 * @member {String} name
 */
UserAgentXMLDataArray.prototype['name'] = undefined;

/**
 * @member {String} type
 */
UserAgentXMLDataArray.prototype['type'] = undefined;

/**
 * @member {String} version
 */
UserAgentXMLDataArray.prototype['version'] = undefined;

/**
 * @member {String} version_major
 */
UserAgentXMLDataArray.prototype['version_major'] = undefined;

/**
 * @member {module:models/UserAgentDataDevice} device
 */
UserAgentXMLDataArray.prototype['device'] = undefined;

/**
 * @member {module:models/UserAgentDataEngine} engine
 */
UserAgentXMLDataArray.prototype['engine'] = undefined;

/**
 * @member {module:models/UserAgentDataOperatingSystem} operating_system
 */
UserAgentXMLDataArray.prototype['operating_system'] = undefined;






module.exports = UserAgentXMLDataArray;

