/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The Security model module.
 * @module models/Security
 * @version 2.0
 */
class Security {
    /**
     * Constructs a new <code>Security</code>.
     * @alias module:models/Security
     */
    constructor() { 
        
        Security.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Security</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Security} obj Optional instance to populate.
     * @return {module:models/Security} The populated <code>Security</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Security();

            if (data.hasOwnProperty('threat_score')) {
                obj['threat_score'] = APIClient.convertToType(data['threat_score'], 'Number');
            }
            if (data.hasOwnProperty('is_tor')) {
                obj['is_tor'] = APIClient.convertToType(data['is_tor'], 'Boolean');
            }
            if (data.hasOwnProperty('is_proxy')) {
                obj['is_proxy'] = APIClient.convertToType(data['is_proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('proxy_type')) {
                obj['proxy_type'] = APIClient.convertToType(data['proxy_type'], 'String');
            }
            if (data.hasOwnProperty('proxy_provider')) {
                obj['proxy_provider'] = APIClient.convertToType(data['proxy_provider'], 'String');
            }
            if (data.hasOwnProperty('is_anonymous')) {
                obj['is_anonymous'] = APIClient.convertToType(data['is_anonymous'], 'Boolean');
            }
            if (data.hasOwnProperty('is_known_attacker')) {
                obj['is_known_attacker'] = APIClient.convertToType(data['is_known_attacker'], 'Boolean');
            }
            if (data.hasOwnProperty('is_spam')) {
                obj['is_spam'] = APIClient.convertToType(data['is_spam'], 'Boolean');
            }
            if (data.hasOwnProperty('is_bot')) {
                obj['is_bot'] = APIClient.convertToType(data['is_bot'], 'Boolean');
            }
            if (data.hasOwnProperty('is_cloud_provider')) {
                obj['is_cloud_provider'] = APIClient.convertToType(data['is_cloud_provider'], 'Boolean');
            }
            if (data.hasOwnProperty('cloud_provider')) {
                obj['cloud_provider'] = APIClient.convertToType(data['cloud_provider'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Security</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Security</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['proxy_type'] && !(typeof data['proxy_type'] === 'string' || data['proxy_type'] instanceof String)) {
            throw new Error("Expected the field `proxy_type` to be a primitive type in the JSON string but got " + data['proxy_type']);
        }
        // ensure the json data is a string
        if (data['proxy_provider'] && !(typeof data['proxy_provider'] === 'string' || data['proxy_provider'] instanceof String)) {
            throw new Error("Expected the field `proxy_provider` to be a primitive type in the JSON string but got " + data['proxy_provider']);
        }
        // ensure the json data is a string
        if (data['cloud_provider'] && !(typeof data['cloud_provider'] === 'string' || data['cloud_provider'] instanceof String)) {
            throw new Error("Expected the field `cloud_provider` to be a primitive type in the JSON string but got " + data['cloud_provider']);
        }

        return true;
    }


}



/**
 * @member {Number} threat_score
 */
Security.prototype['threat_score'] = undefined;

/**
 * @member {Boolean} is_tor
 */
Security.prototype['is_tor'] = undefined;

/**
 * @member {Boolean} is_proxy
 */
Security.prototype['is_proxy'] = undefined;

/**
 * @member {String} proxy_type
 */
Security.prototype['proxy_type'] = undefined;

/**
 * @member {String} proxy_provider
 */
Security.prototype['proxy_provider'] = undefined;

/**
 * @member {Boolean} is_anonymous
 */
Security.prototype['is_anonymous'] = undefined;

/**
 * @member {Boolean} is_known_attacker
 */
Security.prototype['is_known_attacker'] = undefined;

/**
 * @member {Boolean} is_spam
 */
Security.prototype['is_spam'] = undefined;

/**
 * @member {Boolean} is_bot
 */
Security.prototype['is_bot'] = undefined;

/**
 * @member {Boolean} is_cloud_provider
 */
Security.prototype['is_cloud_provider'] = undefined;

/**
 * @member {String} cloud_provider
 */
Security.prototype['cloud_provider'] = undefined;






module.exports = Security;

