/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The BulkIPRequest model module.
 * @module models/BulkIPRequest
 * @version 2.0
 */
class BulkIPRequest {
    /**
     * Constructs a new <code>BulkIPRequest</code>.
     * @alias module:models/BulkIPRequest
     */
    constructor() { 
        
        BulkIPRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkIPRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BulkIPRequest} obj Optional instance to populate.
     * @return {module:models/BulkIPRequest} The populated <code>BulkIPRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkIPRequest();

            if (data.hasOwnProperty('ips')) {
                obj['ips'] = APIClient.convertToType(data['ips'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BulkIPRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BulkIPRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['ips'])) {
            throw new Error("Expected the field `ips` to be an array in the JSON data but got " + data['ips']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} ips
 */
BulkIPRequest.prototype['ips'] = undefined;






module.exports = BulkIPRequest;

