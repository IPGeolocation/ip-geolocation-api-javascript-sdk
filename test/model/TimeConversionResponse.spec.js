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
    instance = new TimeConversionResponse();
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

  describe('TimeConversionResponse', function() {
    it('should create an instance of TimeConversionResponse', function() {
      // uncomment below and update the code to test TimeConversionResponse
      //var instance = new TimeConversionResponse();
      //expect(instance).to.be.a(TimeConversionResponse);
    });

    it('should have the property originalTime (base name: "original_time")', function() {
      // uncomment below and update the code to test the property originalTime
      //var instance = new TimeConversionResponse();
      //expect(instance).to.be();
    });

    it('should have the property convertedTime (base name: "converted_time")', function() {
      // uncomment below and update the code to test the property convertedTime
      //var instance = new TimeConversionResponse();
      //expect(instance).to.be();
    });

    it('should have the property diffHour (base name: "diff_hour")', function() {
      // uncomment below and update the code to test the property diffHour
      //var instance = new TimeConversionResponse();
      //expect(instance).to.be();
    });

    it('should have the property diffMin (base name: "diff_min")', function() {
      // uncomment below and update the code to test the property diffMin
      //var instance = new TimeConversionResponse();
      //expect(instance).to.be();
    });

  });

}));
