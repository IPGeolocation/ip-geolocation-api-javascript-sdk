/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

const APIClient = require('../APIClient.js');
const Astronomy = require('./Astronomy');
const TimezoneLocation = require('./TimezoneLocation');

/**
 * The AstronomyXMLResponse model module.
 * @module models/AstronomyXMLResponse
 * @version 2.0
 */
class AstronomyXMLResponse {
    /**
     * Constructs a new <code>AstronomyXMLResponse</code>.
     * @alias module:models/AstronomyXMLResponse
     */
    constructor() { 
        
        AstronomyXMLResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AstronomyXMLResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AstronomyXMLResponse} obj Optional instance to populate.
     * @return {module:models/AstronomyXMLResponse} The populated <code>AstronomyXMLResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AstronomyXMLResponse();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = APIClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = TimezoneLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('astronomy')) {
                obj['astronomy'] = Astronomy.constructFromObject(data['astronomy']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AstronomyXMLResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AstronomyXMLResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          TimezoneLocation.validateJSON(data['location']);
        }
        // validate the optional field `astronomy`
        if (data['astronomy']) { // data not null
          Astronomy.validateJSON(data['astronomy']);
        }

        return true;
    }


}



/**
 * @member {String} ip
 */
AstronomyXMLResponse.prototype['ip'] = undefined;

/**
 * @member {module:models/TimezoneLocation} location
 */
AstronomyXMLResponse.prototype['location'] = undefined;

/**
 * @member {module:models/Astronomy} astronomy
 */
AstronomyXMLResponse.prototype['astronomy'] = undefined;






module.exports = AstronomyXMLResponse;

