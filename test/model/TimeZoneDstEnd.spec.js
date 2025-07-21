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
    instance = new TimeZoneDstEnd();
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

  describe('TimeZoneDstEnd', function() {
    it('should create an instance of TimeZoneDstEnd', function() {
      // uncomment below and update the code to test TimeZoneDstEnd
      //var instance = new TimeZoneDstEnd();
      //expect(instance).to.be.a(TimeZoneDstEnd);
    });

    it('should have the property utcTime (base name: "utc_time")', function() {
      // uncomment below and update the code to test the property utcTime
      //var instance = new TimeZoneDstEnd();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new TimeZoneDstEnd();
      //expect(instance).to.be();
    });

    it('should have the property gap (base name: "gap")', function() {
      // uncomment below and update the code to test the property gap
      //var instance = new TimeZoneDstEnd();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeAfter (base name: "date_time_after")', function() {
      // uncomment below and update the code to test the property dateTimeAfter
      //var instance = new TimeZoneDstEnd();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeBefore (base name: "date_time_before")', function() {
      // uncomment below and update the code to test the property dateTimeBefore
      //var instance = new TimeZoneDstEnd();
      //expect(instance).to.be();
    });

    it('should have the property overlap (base name: "overlap")', function() {
      // uncomment below and update the code to test the property overlap
      //var instance = new TimeZoneDstEnd();
      //expect(instance).to.be();
    });

  });

}));
