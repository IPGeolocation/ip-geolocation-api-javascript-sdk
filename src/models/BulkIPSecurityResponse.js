/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const CountryMetadata = require('./CountryMetadata.js');
const Currency = require('./Currency.js');
const ErrorResponse = require('./ErrorResponse.js');
const LocationMinimal = require('./LocationMinimal');
const NetworkMinimal = require('./NetworkMinimal');
const Security = require('./Security.js');
const SecurityAPIResponse = require('./SecurityAPIResponse');
const TimeZone = require('./TimeZone.js');
const UserAgentData = require('./UserAgentData.js');

/**
 * The BulkIPSecurityResponse model module.
 * @module models/BulkIPSecurityResponse
 * @version 2.0
 */
class BulkIPSecurityResponse {
    /**
     * Constructs a new <code>BulkIPSecurityResponse</code>.
     * @alias module:models/BulkIPSecurityResponse
     * @param {(module:models/ErrorResponse|module:models/SecurityAPIResponse)} instance The actual instance to initialize BulkIPSecurityResponse.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        let errorMessages = [];
        // Determine type by checking for specific property existence
        if (!instance.hasOwnProperty('message')) {
            // Looks like SecurityAPIResponse
            try {
                SecurityAPIResponse.validateJSON(instance);
                this.actualInstance = SecurityAPIResponse.constructFromObject(instance);
                return;
            } catch (err) {
                errorMessages.push("Failed to validate SecurityAPIResponse: " + err.message);
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
            "No match found constructing `BulkIPSecurityResponse`. Input: " + JSON.stringify(instance) + " Details: " + errorMessages.join(", ")
        );
    }

    /**
     * Constructs a <code>BulkIPSecurityResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BulkIPSecurityResponse} obj Optional instance to populate.
     * @return {module:models/BulkIPSecurityResponse} The populated <code>BulkIPSecurityResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        return new BulkIPSecurityResponse(data);
    }

    /**
     * Gets the actual instance, which can be <code>ErrorResponse</code>, <code>SecurityAPIResponse</code>.
     * @return {(module:models/ErrorResponse|module:models/SecurityAPIResponse)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ErrorResponse</code>, <code>SecurityAPIResponse</code>.
     * @param {(module:models/ErrorResponse|module:models/SecurityAPIResponse)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = BulkIPSecurityResponse.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of BulkIPSecurityResponse from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:models/BulkIPSecurityResponse} An instance of BulkIPSecurityResponse.
     */
    static fromJSON = function(json_string){
        return BulkIPSecurityResponse.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {String} ip
 */
BulkIPSecurityResponse.prototype['ip'] = undefined;

/**
 * @member {String} hostname
 */
BulkIPSecurityResponse.prototype['hostname'] = undefined;

/**
 * @member {module:models/Security} security
 */
BulkIPSecurityResponse.prototype['security'] = undefined;

/**
 * @member {module:models/LocationMinimal} location
 */
BulkIPSecurityResponse.prototype['location'] = undefined;

/**
 * @member {module:models/NetworkMinimal} network
 */
BulkIPSecurityResponse.prototype['network'] = undefined;

/**
 * @member {module:models/TimeZone} time_zone
 */
BulkIPSecurityResponse.prototype['time_zone'] = undefined;

/**
 * @member {module:models/UserAgentData} user_agent
 */
BulkIPSecurityResponse.prototype['user_agent'] = undefined;

/**
 * @member {module:models/CountryMetadata} country_metadata
 */
BulkIPSecurityResponse.prototype['country_metadata'] = undefined;

/**
 * @member {module:models/Currency} currency
 */
BulkIPSecurityResponse.prototype['currency'] = undefined;

/**
 * @member {String} message
 */
BulkIPSecurityResponse.prototype['message'] = undefined;


BulkIPSecurityResponse.OneOf = ["ErrorResponse", "SecurityAPIResponse"];

module.exports = BulkIPSecurityResponse;

