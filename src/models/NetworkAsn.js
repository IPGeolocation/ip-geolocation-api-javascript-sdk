/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');

/**
 * The NetworkAsn model module.
 * @module models/NetworkAsn
 * @version 2.0
 */
class NetworkAsn {
    /**
     * Constructs a new <code>NetworkAsn</code>.
     * @alias module:models/NetworkAsn
     */
    constructor() { 
        
        NetworkAsn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkAsn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/NetworkAsn} obj Optional instance to populate.
     * @return {module:models/NetworkAsn} The populated <code>NetworkAsn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkAsn();

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
                obj['num_of_ipv4_routes'] = APIClient.convertToType(data['num_of_ipv4_routes'], 'String');
            }
            if (data.hasOwnProperty('num_of_ipv6_routes')) {
                obj['num_of_ipv6_routes'] = APIClient.convertToType(data['num_of_ipv6_routes'], 'String');
            }
            if (data.hasOwnProperty('rir')) {
                obj['rir'] = APIClient.convertToType(data['rir'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NetworkAsn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkAsn</code>.
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
        if (data['num_of_ipv4_routes'] && !(typeof data['num_of_ipv4_routes'] === 'string' || data['num_of_ipv4_routes'] instanceof String)) {
            throw new Error("Expected the field `num_of_ipv4_routes` to be a primitive type in the JSON string but got " + data['num_of_ipv4_routes']);
        }
        // ensure the json data is a string
        if (data['num_of_ipv6_routes'] && !(typeof data['num_of_ipv6_routes'] === 'string' || data['num_of_ipv6_routes'] instanceof String)) {
            throw new Error("Expected the field `num_of_ipv6_routes` to be a primitive type in the JSON string but got " + data['num_of_ipv6_routes']);
        }
        // ensure the json data is a string
        if (data['rir'] && !(typeof data['rir'] === 'string' || data['rir'] instanceof String)) {
            throw new Error("Expected the field `rir` to be a primitive type in the JSON string but got " + data['rir']);
        }

        return true;
    }


}



/**
 * @member {String} as_number
 */
NetworkAsn.prototype['as_number'] = undefined;

/**
 * @member {String} organization
 */
NetworkAsn.prototype['organization'] = undefined;

/**
 * @member {String} country
 */
NetworkAsn.prototype['country'] = undefined;

/**
 * @member {String} asn_name
 */
NetworkAsn.prototype['asn_name'] = undefined;

/**
 * @member {String} type
 */
NetworkAsn.prototype['type'] = undefined;

/**
 * @member {String} domain
 */
NetworkAsn.prototype['domain'] = undefined;

/**
 * @member {String} date_allocated
 */
NetworkAsn.prototype['date_allocated'] = undefined;

/**
 * @member {String} allocation_status
 */
NetworkAsn.prototype['allocation_status'] = undefined;

/**
 * @member {String} num_of_ipv4_routes
 */
NetworkAsn.prototype['num_of_ipv4_routes'] = undefined;

/**
 * @member {String} num_of_ipv6_routes
 */
NetworkAsn.prototype['num_of_ipv6_routes'] = undefined;

/**
 * @member {String} rir
 */
NetworkAsn.prototype['rir'] = undefined;






module.exports = NetworkAsn;

