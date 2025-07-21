/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const NetworkAsn = require('./NetworkAsn.js');
const NetworkCompany = require('./NetworkCompany.js');

/**
 * The Network model module.
 * @module models/Network
 * @version 2.0
 */
class Network {
    /**
     * Constructs a new <code>Network</code>.
     * @alias module:models/Network
     */
    constructor() { 
        
        Network.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Network</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Network} obj Optional instance to populate.
     * @return {module:models/Network} The populated <code>Network</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Network();

            if (data.hasOwnProperty('asn')) {
                obj['asn'] = NetworkAsn.constructFromObject(data['asn']);
            }
            if (data.hasOwnProperty('connection_type')) {
                obj['connection_type'] = APIClient.convertToType(data['connection_type'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = NetworkCompany.constructFromObject(data['company']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Network</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Network</code>.
     */
    static validateJSON(data) {
        // validate the optional field `asn`
        if (data['asn']) { // data not null
          NetworkAsn.validateJSON(data['asn']);
        }
        // ensure the json data is a string
        if (data['connection_type'] && !(typeof data['connection_type'] === 'string' || data['connection_type'] instanceof String)) {
            throw new Error("Expected the field `connection_type` to be a primitive type in the JSON string but got " + data['connection_type']);
        }
        // validate the optional field `company`
        if (data['company']) { // data not null
          NetworkCompany.validateJSON(data['company']);
        }

        return true;
    }


}



/**
 * @member {module:models/NetworkAsn} asn
 */
Network.prototype['asn'] = undefined;

/**
 * @member {String} connection_type
 */
Network.prototype['connection_type'] = undefined;

/**
 * @member {module:models/NetworkCompany} company
 */
Network.prototype['company'] = undefined;






module.exports = Network;

