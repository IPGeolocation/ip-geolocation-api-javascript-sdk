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
    instance = new SecurityAPIXMLResponseArray();
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

  describe('SecurityAPIXMLResponseArray', function() {
    it('should create an instance of SecurityAPIXMLResponseArray', function() {
      // uncomment below and update the code to test SecurityAPIXMLResponseArray
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be.a(SecurityAPIXMLResponseArray);
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "time_zone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

    it('should have the property userAgent (base name: "user_agent")', function() {
      // uncomment below and update the code to test the property userAgent
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

    it('should have the property countryMetadata (base name: "country_metadata")', function() {
      // uncomment below and update the code to test the property countryMetadata
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new SecurityAPIXMLResponseArray();
      //expect(instance).to.be();
    });

  });

}));
