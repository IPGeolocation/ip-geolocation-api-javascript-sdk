/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const NetworkMinimalAsn = require('./NetworkMinimalAsn');
const NetworkMinimalCompany = require('./NetworkMinimalCompany');

/**
 * The NetworkMinimal model module.
 * @module models/NetworkMinimal
 * @version 2.0
 */
class NetworkMinimal {
    /**
     * Constructs a new <code>NetworkMinimal</code>.
     * @alias module:models/NetworkMinimal
     */
    constructor() { 
        
        NetworkMinimal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkMinimal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/NetworkMinimal} obj Optional instance to populate.
     * @return {module:models/NetworkMinimal} The populated <code>NetworkMinimal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkMinimal();

            if (data.hasOwnProperty('asn')) {
                obj['asn'] = NetworkMinimalAsn.constructFromObject(data['asn']);
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = NetworkMinimalCompany.constructFromObject(data['company']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NetworkMinimal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkMinimal</code>.
     */
    static validateJSON(data) {
        // validate the optional field `asn`
        if (data['asn']) { // data not null
          NetworkMinimalAsn.validateJSON(data['asn']);
        }
        // validate the optional field `company`
        if (data['company']) { // data not null
          NetworkMinimalCompany.validateJSON(data['company']);
        }

        return true;
    }


}



/**
 * @member {module:models/NetworkMinimalAsn} asn
 */
NetworkMinimal.prototype['asn'] = undefined;

/**
 * @member {module:models/NetworkMinimalCompany} company
 */
NetworkMinimal.prototype['company'] = undefined;






module.exports = NetworkMinimal;

