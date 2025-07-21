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
    instance = new TimeZoneDetailedResponse();
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

  describe('TimeZoneDetailedResponse', function() {
    it('should create an instance of TimeZoneDetailedResponse', function() {
      // uncomment below and update the code to test TimeZoneDetailedResponse
      //var instance = new TimeZoneDetailedResponse();
      //expect(instance).to.be.a(TimeZoneDetailedResponse);
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new TimeZoneDetailedResponse();
      //expect(instance).to.be();
    });

    it('should have the property airportDetails (base name: "airport_details")', function() {
      // uncomment below and update the code to test the property airportDetails
      //var instance = new TimeZoneDetailedResponse();
      //expect(instance).to.be();
    });

    it('should have the property loCodeDetails (base name: "lo_code_details")', function() {
      // uncomment below and update the code to test the property loCodeDetails
      //var instance = new TimeZoneDetailedResponse();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new TimeZoneDetailedResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "time_zone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new TimeZoneDetailedResponse();
      //expect(instance).to.be();
    });

  });

}));
