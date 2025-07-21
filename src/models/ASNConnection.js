/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The ASNConnection model module.
 * @module models/ASNConnection
 * @version 2.0
 */
class ASNConnection {
    /**
     * Constructs a new <code>ASNConnection</code>.
     * @alias module:models/ASNConnection
     */
    constructor() { 
        
        ASNConnection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ASNConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ASNConnection} obj Optional instance to populate.
     * @return {module:models/ASNConnection} The populated <code>ASNConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ASNConnection();

            if (data.hasOwnProperty('as_number')) {
                obj['as_number'] = APIClient.convertToType(data['as_number'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = APIClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = APIClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ASNConnection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ASNConnection</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['as_number'] && !(typeof data['as_number'] === 'string' || data['as_number'] instanceof String)) {
            throw new Error("Expected the field `as_number` to be a primitive type in the JSON string but got " + data['as_number']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }

        return true;
    }


}



/**
 * @member {String} as_number
 */
ASNConnection.prototype['as_number'] = undefined;

/**
 * @member {String} description
 */
ASNConnection.prototype['description'] = undefined;

/**
 * @member {String} country
 */
ASNConnection.prototype['country'] = undefined;






module.exports = ASNConnection;

