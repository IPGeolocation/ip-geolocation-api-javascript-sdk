/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const ASNResponseXMLAsn = require('./ASNResponseXMLAsn');

/**
 * The ASNResponseXML model module.
 * @module models/ASNResponseXML
 * @version 2.0
 */
class ASNResponseXML {
    /**
     * Constructs a new <code>ASNResponseXML</code>.
     * @alias module:models/ASNResponseXML
     */
    constructor() { 
        
        ASNResponseXML.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ASNResponseXML</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ASNResponseXML} obj Optional instance to populate.
     * @return {module:models/ASNResponseXML} The populated <code>ASNResponseXML</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ASNResponseXML();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = APIClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('asn')) {
                obj['asn'] = ASNResponseXMLAsn.constructFromObject(data['asn']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ASNResponseXML</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ASNResponseXML</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // validate the optional field `asn`
        if (data['asn']) { // data not null
          ASNResponseXMLAsn.validateJSON(data['asn']);
        }

        return true;
    }


}



/**
 * @member {String} ip
 */
ASNResponseXML.prototype['ip'] = undefined;

/**
 * @member {module:models/ASNResponseXMLAsn} asn
 */
ASNResponseXML.prototype['asn'] = undefined;






module.exports = ASNResponseXML;

