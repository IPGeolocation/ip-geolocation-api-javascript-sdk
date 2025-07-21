/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const Abuse = require('./Abuse.js');
const CountryMetadata = require('./CountryMetadata.js');
const Currency = require('./Currency.js');
const ErrorXMLResponseArray = require('./ErrorXMLResponseArray.js');
const GeolocationXMLResponseArray = require('./GeolocationXMLResponseArray.js');
const Location = require('./Location.js');
const Network = require('./Network.js');
const Security = require('./Security.js');
const TimeZone = require('./TimeZone.js');
const UserAgentData = require('./UserAgentData.js');

/**
 * The BulkIPGeolocationResponse1 model module.
 * @module models/BulkIPGeolocationResponse1
 * @version 2.0
 */
class BulkIPGeolocationResponse1 {
    /**
     * Constructs a new <code>BulkIPGeolocationResponse1</code>.
     * @alias module:models/BulkIPGeolocationResponse1
     * @param {(module:models/ErrorXMLResponseArray|module:models/GeolocationXMLResponseArray)} instance The actual instance to initialize BulkIPGeolocationResponse1.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "GeolocationXMLResponseArray") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                GeolocationXMLResponseArray.validateJSON(instance); // throw an exception if no match
                // create GeolocationXMLResponseArray from JS object
                this.actualInstance = GeolocationXMLResponseArray.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into GeolocationXMLResponseArray
            errorMessages.push("Failed to construct GeolocationXMLResponseArray: " + err)
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
            throw new Error("Multiple matches found constructing `BulkIPGeolocationResponse1` with oneOf schemas ErrorXMLResponseArray, GeolocationXMLResponseArray. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `BulkIPGeolocationResponse1` with oneOf schemas ErrorXMLResponseArray, GeolocationXMLResponseArray. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>BulkIPGeolocationResponse1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BulkIPGeolocationResponse1} obj Optional instance to populate.
     * @return {module:models/BulkIPGeolocationResponse1} The populated <code>BulkIPGeolocationResponse1</code> instance.
     */
    static constructFromObject(data, obj) {
        return new BulkIPGeolocationResponse1(data);
    }

    /**
     * Gets the actual instance, which can be <code>ErrorXMLResponseArray</code>, <code>GeolocationXMLResponseArray</code>.
     * @return {(module:models/ErrorXMLResponseArray|module:models/GeolocationXMLResponseArray)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ErrorXMLResponseArray</code>, <code>GeolocationXMLResponseArray</code>.
     * @param {(module:models/ErrorXMLResponseArray|module:models/GeolocationXMLResponseArray)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = BulkIPGeolocationResponse1.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of BulkIPGeolocationResponse1 from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:models/BulkIPGeolocationResponse1} An instance of BulkIPGeolocationResponse1.
     */
    static fromJSON = function(json_string){
        return BulkIPGeolocationResponse1.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {String} ip
 */
BulkIPGeolocationResponse1.prototype['ip'] = undefined;

/**
 * @member {String} hostname
 */
BulkIPGeolocationResponse1.prototype['hostname'] = undefined;

/**
 * @member {String} domain
 */
BulkIPGeolocationResponse1.prototype['domain'] = undefined;

/**
 * @member {module:models/Location} location
 */
BulkIPGeolocationResponse1.prototype['location'] = undefined;

/**
 * @member {module:models/CountryMetadata} country_metadata
 */
BulkIPGeolocationResponse1.prototype['country_metadata'] = undefined;

/**
 * @member {module:models/Network} network
 */
BulkIPGeolocationResponse1.prototype['network'] = undefined;

/**
 * @member {module:models/Currency} currency
 */
BulkIPGeolocationResponse1.prototype['currency'] = undefined;

/**
 * @member {module:models/Security} security
 */
BulkIPGeolocationResponse1.prototype['security'] = undefined;

/**
 * @member {module:models/Abuse} abuse
 */
BulkIPGeolocationResponse1.prototype['abuse'] = undefined;

/**
 * @member {module:models/TimeZone} time_zone
 */
BulkIPGeolocationResponse1.prototype['time_zone'] = undefined;

/**
 * @member {module:models/UserAgentData} user_agent
 */
BulkIPGeolocationResponse1.prototype['user_agent'] = undefined;

/**
 * @member {String} message
 */
BulkIPGeolocationResponse1.prototype['message'] = undefined;


BulkIPGeolocationResponse1.OneOf = ["ErrorXMLResponseArray", "GeolocationXMLResponseArray"];

module.exports = BulkIPGeolocationResponse1;

