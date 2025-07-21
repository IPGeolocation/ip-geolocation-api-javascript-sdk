/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const ASNConnection = require('./ASNConnection');

/**
 * The ASNDetails model module.
 * @module models/ASNDetails
 * @version 2.0
 */
class ASNDetails {
    /**
     * Constructs a new <code>ASNDetails</code>.
     * @alias module:models/ASNDetails
     */
    constructor() { 
        
        ASNDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ASNDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ASNDetails} obj Optional instance to populate.
     * @return {module:models/ASNDetails} The populated <code>ASNDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ASNDetails();

            if (data.hasOwnProperty('as_number')) {
                obj['as_number'] = APIClient.convertToType(data['as_number'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = APIClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = APIClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('asn_name')) {
                obj['asn_name'] = APIClient.convertToType(data['asn_name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = APIClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = APIClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('date_allocated')) {
                obj['date_allocated'] = APIClient.convertToType(data['date_allocated'], 'String');
            }
            if (data.hasOwnProperty('allocation_status')) {
                obj['allocation_status'] = APIClient.convertToType(data['allocation_status'], 'String');
            }
            if (data.hasOwnProperty('num_of_ipv4_routes')) {
                obj['num_of_ipv4_routes'] = APIClient.convertToType(data['num_of_ipv4_routes'], 'Number');
            }
            if (data.hasOwnProperty('num_of_ipv6_routes')) {
                obj['num_of_ipv6_routes'] = APIClient.convertToType(data['num_of_ipv6_routes'], 'Number');
            }
            if (data.hasOwnProperty('rir')) {
                obj['rir'] = APIClient.convertToType(data['rir'], 'String');
            }
            if (data.hasOwnProperty('routes')) {
                obj['routes'] = APIClient.convertToType(data['routes'], ['String']);
            }
            if (data.hasOwnProperty('upstreams')) {
                obj['upstreams'] = APIClient.convertToType(data['upstreams'], [ASNConnection]);
            }
            if (data.hasOwnProperty('downstreams')) {
                obj['downstreams'] = APIClient.convertToType(data['downstreams'], [ASNConnection]);
            }
            if (data.hasOwnProperty('peers')) {
                obj['peers'] = APIClient.convertToType(data['peers'], [ASNConnection]);
            }
            if (data.hasOwnProperty('whois_response')) {
                obj['whois_response'] = APIClient.convertToType(data['whois_response'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ASNDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ASNDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['as_number'] && !(typeof data['as_number'] === 'string' || data['as_number'] instanceof String)) {
            throw new Error("Expected the field `as_number` to be a primitive type in the JSON string but got " + data['as_number']);
        }
        // ensure the json data is a string
        if (data['organization'] && !(typeof data['organization'] === 'string' || data['organization'] instanceof String)) {
            throw new Error("Expected the field `organization` to be a primitive type in the JSON string but got " + data['organization']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['asn_name'] && !(typeof data['asn_name'] === 'string' || data['asn_name'] instanceof String)) {
            throw new Error("Expected the field `asn_name` to be a primitive type in the JSON string but got " + data['asn_name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // ensure the json data is a string
        if (data['date_allocated'] && !(typeof data['date_allocated'] === 'string' || data['date_allocated'] instanceof String)) {
            throw new Error("Expected the field `date_allocated` to be a primitive type in the JSON string but got " + data['date_allocated']);
        }
        // ensure the json data is a string
        if (data['allocation_status'] && !(typeof data['allocation_status'] === 'string' || data['allocation_status'] instanceof String)) {
            throw new Error("Expected the field `allocation_status` to be a primitive type in the JSON string but got " + data['allocation_status']);
        }
        // ensure the json data is a string
        if (data['rir'] && !(typeof data['rir'] === 'string' || data['rir'] instanceof String)) {
            throw new Error("Expected the field `rir` to be a primitive type in the JSON string but got " + data['rir']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['routes'])) {
            throw new Error("Expected the field `routes` to be an array in the JSON data but got " + data['routes']);
        }
        if (data['upstreams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['upstreams'])) {
                throw new Error("Expected the field `upstreams` to be an array in the JSON data but got " + data['upstreams']);
            }
            // validate the optional field `upstreams` (array)
            for (const item of data['upstreams']) {
                ASNConnection.validateJSON(item);
            };
        }
        if (data['downstreams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['downstreams'])) {
                throw new Error("Expected the field `downstreams` to be an array in the JSON data but got " + data['downstreams']);
            }
            // validate the optional field `downstreams` (array)
            for (const item of data['downstreams']) {
                ASNConnection.validateJSON(item);
            };
        }
        if (data['peers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['peers'])) {
                throw new Error("Expected the field `peers` to be an array in the JSON data but got " + data['peers']);
            }
            // validate the optional field `peers` (array)
            for (const item of data['peers']) {
                ASNConnection.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['whois_response'] && !(typeof data['whois_response'] === 'string' || data['whois_response'] instanceof String)) {
            throw new Error("Expected the field `whois_response` to be a primitive type in the JSON string but got " + data['whois_response']);
        }

        return true;
    }


}



/**
 * @member {String} as_number
 */
ASNDetails.prototype['as_number'] = undefined;

/**
 * @member {String} organization
 */
ASNDetails.prototype['organization'] = undefined;

/**
 * @member {String} country
 */
ASNDetails.prototype['country'] = undefined;

/**
 * @member {String} asn_name
 */
ASNDetails.prototype['asn_name'] = undefined;

/**
 * @member {String} type
 */
ASNDetails.prototype['type'] = undefined;

/**
 * @member {String} domain
 */
ASNDetails.prototype['domain'] = undefined;

/**
 * @member {String} date_allocated
 */
ASNDetails.prototype['date_allocated'] = undefined;

/**
 * @member {String} allocation_status
 */
ASNDetails.prototype['allocation_status'] = undefined;

/**
 * @member {Number} num_of_ipv4_routes
 */
ASNDetails.prototype['num_of_ipv4_routes'] = undefined;

/**
 * @member {Number} num_of_ipv6_routes
 */
ASNDetails.prototype['num_of_ipv6_routes'] = undefined;

/**
 * @member {String} rir
 */
ASNDetails.prototype['rir'] = undefined;

/**
 * It will only be included in the response, if you set include=routes in the request
 * @member {Array.<String>} routes
 */
ASNDetails.prototype['routes'] = undefined;

/**
 * It will only be included in the response, if you set include=upstreams in the request
 * @member {Array.<module:models/ASNConnection>} upstreams
 */
ASNDetails.prototype['upstreams'] = undefined;

/**
 * It will only be included in the response, if you set include=downstreams in the request
 * @member {Array.<module:models/ASNConnection>} downstreams
 */
ASNDetails.prototype['downstreams'] = undefined;

/**
 * It will only be included in the response, if you set include=peers in the request
 * @member {Array.<module:models/ASNConnection>} peers
 */
ASNDetails.prototype['peers'] = undefined;

/**
 * It will only be included in the response, if you set include=whois_response in the request
 * @member {String} whois_response
 */
ASNDetails.prototype['whois_response'] = undefined;






module.exports = ASNDetails;

