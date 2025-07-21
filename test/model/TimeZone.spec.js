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
    instance = new TimeZone();
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

  describe('TimeZone', function() {
    it('should create an instance of TimeZone', function() {
      // uncomment below and update the code to test TimeZone
      //var instance = new TimeZone();
      //expect(instance).to.be.a(TimeZone);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property offset (base name: "offset")', function() {
      // uncomment below and update the code to test the property offset
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property offsetWithDst (base name: "offset_with_dst")', function() {
      // uncomment below and update the code to test the property offsetWithDst
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property currentTime (base name: "current_time")', function() {
      // uncomment below and update the code to test the property currentTime
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property currentTimeUnix (base name: "current_time_unix")', function() {
      // uncomment below and update the code to test the property currentTimeUnix
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property isDst (base name: "is_dst")', function() {
      // uncomment below and update the code to test the property isDst
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property dstSavings (base name: "dst_savings")', function() {
      // uncomment below and update the code to test the property dstSavings
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property dstExists (base name: "dst_exists")', function() {
      // uncomment below and update the code to test the property dstExists
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property dstStart (base name: "dst_start")', function() {
      // uncomment below and update the code to test the property dstStart
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

    it('should have the property dstEnd (base name: "dst_end")', function() {
      // uncomment below and update the code to test the property dstEnd
      //var instance = new TimeZone();
      //expect(instance).to.be();
    });

  });

}));
