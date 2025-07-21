/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const Abuse = require('./Abuse.js');
const CountryMetadata = require('./CountryMetadata.js');
const Currency = require('./Currency.js');
const ErrorResponse = require('./ErrorResponse.js');
const GeolocationResponse = require('./GeolocationResponse.js');
const Location = require('./Location.js');
const Network = require('./Network.js');
const Security = require('./Security.js');
const TimeZone = require('./TimeZone.js');
const UserAgentData = require('./UserAgentData.js');
const SecurityAPIResponse = require("./SecurityAPIResponse");

/**
 * The BulkIPGeolocationResponse model module.
 * @module models/BulkIPGeolocationResponse
 * @version 2.0
 */
class BulkIPGeolocationResponse {
    /**
     * Constructs a new <code>BulkIPGeolocationResponse</code>.
     * @alias module:models/BulkIPGeolocationResponse
     * @param {(module:models/ErrorResponse|module:models/GeolocationResponse)} instance The actual instance to initialize BulkIPGeolocationResponse.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        let errorMessages = [];
        // Determine type by checking for specific property existence
        if (!instance.hasOwnProperty('message')) {
            // Looks like GeolocationResponse
            try {
                GeolocationResponse.validateJSON(instance);
                this.actualInstance = GeolocationResponse.constructFromObject(instance);
                return;
            } catch (err) {
                errorMessages.push("Failed to validate GeolocationResponse: " + err.message);
            }
        } else  {
            // Looks like ErrorResponse
            try {
                ErrorResponse.validateJSON(instance);
                this.actualInstance = ErrorResponse.constructFromObject(instance);
                return;
            } catch (err) {
                errorMessages.push("Failed to validate ErrorResponse: " + err.message);
            }
        }

        throw new Error(
            "No match found constructing `BulkIPGeolocationResponse`. Input: " + JSON.stringify(instance) + " Details: " + errorMessages.join(", ")
        );
    }

    /**
     * Constructs a <code>BulkIPGeolocationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BulkIPGeolocationResponse} obj Optional instance to populate.
     * @return {module:models/BulkIPGeolocationResponse} The populated <code>BulkIPGeolocationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        return new BulkIPGeolocationResponse(data);
    }

    /**
     * Gets the actual instance, which can be <code>ErrorResponse</code>, <code>GeolocationResponse</code>.
     * @return {(module:models/ErrorResponse|module:models/GeolocationResponse)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ErrorResponse</code>, <code>GeolocationResponse</code>.
     * @param {(module:models/ErrorResponse|module:models/GeolocationResponse)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = BulkIPGeolocationResponse.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of BulkIPGeolocationResponse from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:models/BulkIPGeolocationResponse} An instance of BulkIPGeolocationResponse.
     */
    static fromJSON = function(json_string){
        return BulkIPGeolocationResponse.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {String} message
 */
BulkIPGeolocationResponse.prototype['message'] = undefined;

/**
 * @member {String} ip
 */
BulkIPGeolocationResponse.prototype['ip'] = undefined;

/**
 * @member {String} hostname
 */
BulkIPGeolocationResponse.prototype['hostname'] = undefined;

/**
 * @member {String} domain
 */
BulkIPGeolocationResponse.prototype['domain'] = undefined;

/**
 * @member {module:models/Location} location
 */
BulkIPGeolocationResponse.prototype['location'] = undefined;

/**
 * @member {module:models/CountryMetadata} country_metadata
 */
BulkIPGeolocationResponse.prototype['country_metadata'] = undefined;

/**
 * @member {module:models/Network} network
 */
BulkIPGeolocationResponse.prototype['network'] = undefined;

/**
 * @member {module:models/Currency} currency
 */
BulkIPGeolocationResponse.prototype['currency'] = undefined;

/**
 * @member {module:models/Security} security
 */
BulkIPGeolocationResponse.prototype['security'] = undefined;

/**
 * @member {module:models/Abuse} abuse
 */
BulkIPGeolocationResponse.prototype['abuse'] = undefined;

/**
 * @member {module:models/TimeZone} time_zone
 */
BulkIPGeolocationResponse.prototype['time_zone'] = undefined;

/**
 * @member {module:models/UserAgentData} user_agent
 */
BulkIPGeolocationResponse.prototype['user_agent'] = undefined;


BulkIPGeolocationResponse.OneOf = ["ErrorResponse", "GeolocationResponse"];

module.exports = BulkIPGeolocationResponse;

