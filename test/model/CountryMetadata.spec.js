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
    instance = new CountryMetadata();
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

  describe('CountryMetadata', function() {
    it('should create an instance of CountryMetadata', function() {
      // uncomment below and update the code to test CountryMetadata
      //var instance = new CountryMetadata();
      //expect(instance).to.be.a(CountryMetadata);
    });

    it('should have the property callingCode (base name: "calling_code")', function() {
      // uncomment below and update the code to test the property callingCode
      //var instance = new CountryMetadata();
      //expect(instance).to.be();
    });

    it('should have the property tld (base name: "tld")', function() {
      // uncomment below and update the code to test the property tld
      //var instance = new CountryMetadata();
      //expect(instance).to.be();
    });

    it('should have the property languages (base name: "languages")', function() {
      // uncomment below and update the code to test the property languages
      //var instance = new CountryMetadata();
      //expect(instance).to.be();
    });

  });

}));
