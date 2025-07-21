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
    instance = new TimezoneDetail();
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

  describe('TimezoneDetail', function() {
    it('should create an instance of TimezoneDetail', function() {
      // uncomment below and update the code to test TimezoneDetail
      //var instance = new TimezoneDetail();
      //expect(instance).to.be.a(TimezoneDetail);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property offset (base name: "offset")', function() {
      // uncomment below and update the code to test the property offset
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property offsetWithDst (base name: "offset_with_dst")', function() {
      // uncomment below and update the code to test the property offsetWithDst
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dateTime (base name: "date_time")', function() {
      // uncomment below and update the code to test the property dateTime
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeTxt (base name: "date_time_txt")', function() {
      // uncomment below and update the code to test the property dateTimeTxt
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeWti (base name: "date_time_wti")', function() {
      // uncomment below and update the code to test the property dateTimeWti
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeYmd (base name: "date_time_ymd")', function() {
      // uncomment below and update the code to test the property dateTimeYmd
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeUnix (base name: "date_time_unix")', function() {
      // uncomment below and update the code to test the property dateTimeUnix
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property time24 (base name: "time_24")', function() {
      // uncomment below and update the code to test the property time24
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property time12 (base name: "time_12")', function() {
      // uncomment below and update the code to test the property time12
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property week (base name: "week")', function() {
      // uncomment below and update the code to test the property week
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property month (base name: "month")', function() {
      // uncomment below and update the code to test the property month
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property yearAbbr (base name: "year_abbr")', function() {
      // uncomment below and update the code to test the property yearAbbr
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property isDst (base name: "is_dst")', function() {
      // uncomment below and update the code to test the property isDst
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dstSavings (base name: "dst_savings")', function() {
      // uncomment below and update the code to test the property dstSavings
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dstExists (base name: "dst_exists")', function() {
      // uncomment below and update the code to test the property dstExists
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dstStart (base name: "dst_start")', function() {
      // uncomment below and update the code to test the property dstStart
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

    it('should have the property dstEnd (base name: "dst_end")', function() {
      // uncomment below and update the code to test the property dstEnd
      //var instance = new TimezoneDetail();
      //expect(instance).to.be();
    });

  });

}));
