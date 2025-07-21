/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const CountryMetadata = require('./CountryMetadata.js');
const Currency = require('./Currency.js');
const ErrorXMLResponseArray = require('./ErrorXMLResponseArray.js');
const LocationMinimal = require('./LocationMinimal');
const NetworkMinimal = require('./NetworkMinimal');
const Security = require('./Security.js');
const SecurityAPIXMLResponseArray = require('./SecurityAPIXMLResponseArray');
const TimeZone = require('./TimeZone.js');
const UserAgentData = require('./UserAgentData.js');

/**
 * The BulkIPSecurityResponse1 model module.
 * @module models/BulkIPSecurityResponse1
 * @version 2.0
 */
class BulkIPSecurityResponse1 {
    /**
     * Constructs a new <code>BulkIPSecurityResponse1</code>.
     * @alias module:models/BulkIPSecurityResponse1
     * @param {(module:models/ErrorXMLResponseArray|module:models/SecurityAPIXMLResponseArray)} instance The actual instance to initialize BulkIPSecurityResponse1.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "SecurityAPIXMLResponseArray") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SecurityAPIXMLResponseArray.validateJSON(instance); // throw an exception if no match
                // create SecurityAPIXMLResponseArray from JS object
                this.actualInstance = SecurityAPIXMLResponseArray.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SecurityAPIXMLResponseArray
            errorMessages.push("Failed to construct SecurityAPIXMLResponseArray: " + err)
        }

        try {
            if (typeof instance === "ErrorXMLResponseArray") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ErrorXMLResponseArray.validateJSON(instance); // throw an exception if no match
                // create ErrorXMLResponseArray from JS object
                this.actualInstance = ErrorXMLResponseArray.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ErrorXMLResponseArray
            errorMessages.push("Failed to construct ErrorXMLResponseArray: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `BulkIPSecurityResponse1` with oneOf schemas ErrorXMLResponseArray, SecurityAPIXMLResponseArray. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `BulkIPSecurityResponse1` with oneOf schemas ErrorXMLResponseArray, SecurityAPIXMLResponseArray. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>BulkIPSecurityResponse1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BulkIPSecurityResponse1} obj Optional instance to populate.
     * @return {module:models/BulkIPSecurityResponse1} The populated <code>BulkIPSecurityResponse1</code> instance.
     */
    static constructFromObject(data, obj) {
        return new BulkIPSecurityResponse1(data);
    }

    /**
     * Gets the actual instance, which can be <code>ErrorXMLResponseArray</code>, <code>SecurityAPIXMLResponseArray</code>.
     * @return {(module:models/ErrorXMLResponseArray|module:models/SecurityAPIXMLResponseArray)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ErrorXMLResponseArray</code>, <code>SecurityAPIXMLResponseArray</code>.
     * @param {(module:models/ErrorXMLResponseArray|module:models/SecurityAPIXMLResponseArray)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = BulkIPSecurityResponse1.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of BulkIPSecurityResponse1 from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:models/BulkIPSecurityResponse1} An instance of BulkIPSecurityResponse1.
     */
    static fromJSON = function(json_string){
        return BulkIPSecurityResponse1.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {String} ip
 */
BulkIPSecurityResponse1.prototype['ip'] = undefined;

/**
 * @member {String} hostname
 */
BulkIPSecurityResponse1.prototype['hostname'] = undefined;

/**
 * @member {module:models/Security} security
 */
BulkIPSecurityResponse1.prototype['security'] = undefined;

/**
 * @member {module:models/LocationMinimal} location
 */
BulkIPSecurityResponse1.prototype['location'] = undefined;

/**
 * @member {module:models/NetworkMinimal} network
 */
BulkIPSecurityResponse1.prototype['network'] = undefined;

/**
 * @member {module:models/TimeZone} time_zone
 */
BulkIPSecurityResponse1.prototype['time_zone'] = undefined;

/**
 * @member {module:models/UserAgentData} user_agent
 */
BulkIPSecurityResponse1.prototype['user_agent'] = undefined;

/**
 * @member {module:models/CountryMetadata} country_metadata
 */
BulkIPSecurityResponse1.prototype['country_metadata'] = undefined;

/**
 * @member {module:models/Currency} currency
 */
BulkIPSecurityResponse1.prototype['currency'] = undefined;

/**
 * @member {String} message
 */
BulkIPSecurityResponse1.prototype['message'] = undefined;


BulkIPSecurityResponse1.OneOf = ["ErrorXMLResponseArray", "SecurityAPIXMLResponseArray"];

module.exports = BulkIPSecurityResponse1;

