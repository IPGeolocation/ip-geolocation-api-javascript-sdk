/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The UserAgentDataOperatingSystem model module.
 * @module models/UserAgentDataOperatingSystem
 * @version 2.0
 */
class UserAgentDataOperatingSystem {
    /**
     * Constructs a new <code>UserAgentDataOperatingSystem</code>.
     * @alias module:models/UserAgentDataOperatingSystem
     */
    constructor() { 
        
        UserAgentDataOperatingSystem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAgentDataOperatingSystem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserAgentDataOperatingSystem} obj Optional instance to populate.
     * @return {module:models/UserAgentDataOperatingSystem} The populated <code>UserAgentDataOperatingSystem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAgentDataOperatingSystem();

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
            if (data.hasOwnProperty('build')) {
                obj['build'] = APIClient.convertToType(data['build'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserAgentDataOperatingSystem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserAgentDataOperatingSystem</code>.
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
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['version_major'] && !(typeof data['version_major'] === 'string' || data['version_major'] instanceof String)) {
            throw new Error("Expected the field `version_major` to be a primitive type in the JSON string but got " + data['version_major']);
        }
        // ensure the json data is a string
        if (data['build'] && !(typeof data['build'] === 'string' || data['build'] instanceof String)) {
            throw new Error("Expected the field `build` to be a primitive type in the JSON string but got " + data['build']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
UserAgentDataOperatingSystem.prototype['name'] = undefined;

/**
 * @member {String} type
 */
UserAgentDataOperatingSystem.prototype['type'] = undefined;

/**
 * @member {String} version
 */
UserAgentDataOperatingSystem.prototype['version'] = undefined;

/**
 * @member {String} version_major
 */
UserAgentDataOperatingSystem.prototype['version_major'] = undefined;

/**
 * @member {String} build
 */
UserAgentDataOperatingSystem.prototype['build'] = undefined;






module.exports = UserAgentDataOperatingSystem;

