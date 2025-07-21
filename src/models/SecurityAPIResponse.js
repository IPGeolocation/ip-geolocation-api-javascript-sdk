/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const CountryMetadata = require('./CountryMetadata.js');
const Currency = require('./Currency.js');
const LocationMinimal = require('./LocationMinimal');
const NetworkMinimal = require('./NetworkMinimal');
const Security = require('./Security.js');
const TimeZone = require('./TimeZone.js');
const UserAgentData = require('./UserAgentData.js');

/**
 * The SecurityAPIResponse model module.
 * @module models/SecurityAPIResponse
 * @version 2.0
 */
class SecurityAPIResponse {
    /**
     * Constructs a new <code>SecurityAPIResponse</code>.
     * @alias module:models/SecurityAPIResponse
     */
    constructor() { 
        
        SecurityAPIResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecurityAPIResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SecurityAPIResponse} obj Optional instance to populate.
     * @return {module:models/SecurityAPIResponse} The populated <code>SecurityAPIResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecurityAPIResponse();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = APIClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = APIClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = Security.constructFromObject(data['security']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = LocationMinimal.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = NetworkMinimal.constructFromObject(data['network']);
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = TimeZone.constructFromObject(data['time_zone']);
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = UserAgentData.constructFromObject(data['user_agent']);
            }
            if (data.hasOwnProperty('country_metadata')) {
                obj['country_metadata'] = CountryMetadata.constructFromObject(data['country_metadata']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecurityAPIResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecurityAPIResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // ensure the json data is a string
        if (data['hostname'] && !(typeof data['hostname'] === 'string' || data['hostname'] instanceof String)) {
            throw new Error("Expected the field `hostname` to be a primitive type in the JSON string but got " + data['hostname']);
        }
        // validate the optional field `security`
        if (data['security']) { // data not null
          Security.validateJSON(data['security']);
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          LocationMinimal.validateJSON(data['location']);
        }
        // validate the optional field `network`
        if (data['network']) { // data not null
          NetworkMinimal.validateJSON(data['network']);
        }
        // validate the optional field `time_zone`
        if (data['time_zone']) { // data not null
          TimeZone.validateJSON(data['time_zone']);
        }
        // validate the optional field `user_agent`
        if (data['user_agent']) { // data not null
          UserAgentData.validateJSON(data['user_agent']);
        }
        // validate the optional field `country_metadata`
        if (data['country_metadata']) { // data not null
          CountryMetadata.validateJSON(data['country_metadata']);
        }
        // validate the optional field `currency`
        if (data['currency']) { // data not null
          Currency.validateJSON(data['currency']);
        }

        return true;
    }


}



/**
 * @member {String} ip
 */
SecurityAPIResponse.prototype['ip'] = undefined;

/**
 * @member {String} hostname
 */
SecurityAPIResponse.prototype['hostname'] = undefined;

/**
 * @member {module:models/Security} security
 */
SecurityAPIResponse.prototype['security'] = undefined;

/**
 * @member {module:models/LocationMinimal} location
 */
SecurityAPIResponse.prototype['location'] = undefined;

/**
 * @member {module:models/NetworkMinimal} network
 */
SecurityAPIResponse.prototype['network'] = undefined;

/**
 * @member {module:models/TimeZone} time_zone
 */
SecurityAPIResponse.prototype['time_zone'] = undefined;

/**
 * @member {module:models/UserAgentData} user_agent
 */
SecurityAPIResponse.prototype['user_agent'] = undefined;

/**
 * @member {module:models/CountryMetadata} country_metadata
 */
SecurityAPIResponse.prototype['country_metadata'] = undefined;

/**
 * @member {module:models/Currency} currency
 */
SecurityAPIResponse.prototype['currency'] = undefined;






module.exports = SecurityAPIResponse;

