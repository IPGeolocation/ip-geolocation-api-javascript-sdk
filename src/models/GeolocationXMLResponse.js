/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const Abuse = require('./Abuse.js');
const CountryMetadata = require('./CountryMetadata.js');
const Currency = require('./Currency.js');
const Location = require('./Location.js');
const Network = require('./Network.js');
const Security = require('./Security.js');
const TimeZone = require('./TimeZone.js');
const UserAgentData = require('./UserAgentData.js');

/**
 * The GeolocationXMLResponse model module.
 * @module models/GeolocationXMLResponse
 * @version 2.0
 */
class GeolocationXMLResponse {
    /**
     * Constructs a new <code>GeolocationXMLResponse</code>.
     * @alias module:models/GeolocationXMLResponse
     */
    constructor() { 
        
        GeolocationXMLResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeolocationXMLResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GeolocationXMLResponse} obj Optional instance to populate.
     * @return {module:models/GeolocationXMLResponse} The populated <code>GeolocationXMLResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeolocationXMLResponse();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = APIClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = APIClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = APIClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = Location.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('country_metadata')) {
                obj['country_metadata'] = CountryMetadata.constructFromObject(data['country_metadata']);
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = Network.constructFromObject(data['network']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = Security.constructFromObject(data['security']);
            }
            if (data.hasOwnProperty('abuse')) {
                obj['abuse'] = Abuse.constructFromObject(data['abuse']);
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = TimeZone.constructFromObject(data['time_zone']);
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = UserAgentData.constructFromObject(data['user_agent']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GeolocationXMLResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GeolocationXMLResponse</code>.
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
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          Location.validateJSON(data['location']);
        }
        // validate the optional field `country_metadata`
        if (data['country_metadata']) { // data not null
          CountryMetadata.validateJSON(data['country_metadata']);
        }
        // validate the optional field `network`
        if (data['network']) { // data not null
          Network.validateJSON(data['network']);
        }
        // validate the optional field `currency`
        if (data['currency']) { // data not null
          Currency.validateJSON(data['currency']);
        }
        // validate the optional field `security`
        if (data['security']) { // data not null
          Security.validateJSON(data['security']);
        }
        // validate the optional field `abuse`
        if (data['abuse']) { // data not null
          Abuse.validateJSON(data['abuse']);
        }
        // validate the optional field `time_zone`
        if (data['time_zone']) { // data not null
          TimeZone.validateJSON(data['time_zone']);
        }
        // validate the optional field `user_agent`
        if (data['user_agent']) { // data not null
          UserAgentData.validateJSON(data['user_agent']);
        }

        return true;
    }


}



/**
 * @member {String} ip
 */
GeolocationXMLResponse.prototype['ip'] = undefined;

/**
 * @member {String} hostname
 */
GeolocationXMLResponse.prototype['hostname'] = undefined;

/**
 * @member {String} domain
 */
GeolocationXMLResponse.prototype['domain'] = undefined;

/**
 * @member {module:models/Location} location
 */
GeolocationXMLResponse.prototype['location'] = undefined;

/**
 * @member {module:models/CountryMetadata} country_metadata
 */
GeolocationXMLResponse.prototype['country_metadata'] = undefined;

/**
 * @member {module:models/Network} network
 */
GeolocationXMLResponse.prototype['network'] = undefined;

/**
 * @member {module:models/Currency} currency
 */
GeolocationXMLResponse.prototype['currency'] = undefined;

/**
 * @member {module:models/Security} security
 */
GeolocationXMLResponse.prototype['security'] = undefined;

/**
 * @member {module:models/Abuse} abuse
 */
GeolocationXMLResponse.prototype['abuse'] = undefined;

/**
 * @member {module:models/TimeZone} time_zone
 */
GeolocationXMLResponse.prototype['time_zone'] = undefined;

/**
 * @member {module:models/UserAgentData} user_agent
 */
GeolocationXMLResponse.prototype['user_agent'] = undefined;






module.exports = GeolocationXMLResponse;

