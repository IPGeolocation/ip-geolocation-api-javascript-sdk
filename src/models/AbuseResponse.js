/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const Abuse = require('./Abuse.js');

/**
 * The AbuseResponse model module.
 * @module models/AbuseResponse
 * @version 2.0
 */
class AbuseResponse {
    /**
     * Constructs a new <code>AbuseResponse</code>.
     * @alias module:models/AbuseResponse
     */
    constructor() { 
        
        AbuseResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AbuseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AbuseResponse} obj Optional instance to populate.
     * @return {module:models/AbuseResponse} The populated <code>AbuseResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AbuseResponse();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = APIClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('abuse')) {
                obj['abuse'] = Abuse.constructFromObject(data['abuse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AbuseResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AbuseResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // validate the optional field `abuse`
        if (data['abuse']) { // data not null
          Abuse.validateJSON(data['abuse']);
        }

        return true;
    }


}



/**
 * @member {String} ip
 */
AbuseResponse.prototype['ip'] = undefined;

/**
 * @member {module:models/Abuse} abuse
 */
AbuseResponse.prototype['abuse'] = undefined;






module.exports = AbuseResponse;

