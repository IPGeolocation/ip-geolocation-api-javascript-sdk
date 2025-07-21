/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const ASNDetails = require('./ASNDetails');

/**
 * The ASNResponse model module.
 * @module models/ASNResponse
 * @version 2.0
 */
class ASNResponse {
    /**
     * Constructs a new <code>ASNResponse</code>.
     * @alias module:models/ASNResponse
     */
    constructor() { 
        
        ASNResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ASNResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ASNResponse} obj Optional instance to populate.
     * @return {module:models/ASNResponse} The populated <code>ASNResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ASNResponse();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = APIClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('asn')) {
                obj['asn'] = ASNDetails.constructFromObject(data['asn']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ASNResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ASNResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // validate the optional field `asn`
        if (data['asn']) { // data not null
          ASNDetails.validateJSON(data['asn']);
        }

        return true;
    }


}



/**
 * IP address for which ASN information is returned. Present if the 'ip' query parameter is used or no IP is specified (defaults to requester's IP).
 * @member {String} ip
 */
ASNResponse.prototype['ip'] = undefined;

/**
 * @member {module:models/ASNDetails} asn
 */
ASNResponse.prototype['asn'] = undefined;






module.exports = ASNResponse;

