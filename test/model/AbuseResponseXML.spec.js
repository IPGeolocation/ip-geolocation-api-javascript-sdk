/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *

 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IpGeolocationIoIpIntelligenceProducts);
  }
}(this, function(expect, IpGeolocationIoIpIntelligenceProducts) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AbuseResponseXML();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AbuseResponseXML', function() {
    it('should create an instance of AbuseResponseXML', function() {
      // uncomment below and update the code to test AbuseResponseXML
      //var instance = new AbuseResponseXML();
      //expect(instance).to.be.a(AbuseResponseXML);
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new AbuseResponseXML();
      //expect(instance).to.be();
    });

    it('should have the property abuse (base name: "abuse")', function() {
      // uncomment below and update the code to test the property abuse
      //var instance = new AbuseResponseXML();
      //expect(instance).to.be();
    });

  });

}));
