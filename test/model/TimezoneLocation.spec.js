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
    instance = new TimezoneLocation();
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

  describe('TimezoneLocation', function() {
    it('should create an instance of TimezoneLocation', function() {
      // uncomment below and update the code to test TimezoneLocation
      //var instance = new TimezoneLocation();
      //expect(instance).to.be.a(TimezoneLocation);
    });

    it('should have the property locationString (base name: "location_string")', function() {
      // uncomment below and update the code to test the property locationString
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property continentCode (base name: "continent_code")', function() {
      // uncomment below and update the code to test the property continentCode
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property continentName (base name: "continent_name")', function() {
      // uncomment below and update the code to test the property continentName
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property countryCode2 (base name: "country_code2")', function() {
      // uncomment below and update the code to test the property countryCode2
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property countryCode3 (base name: "country_code3")', function() {
      // uncomment below and update the code to test the property countryCode3
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property countryName (base name: "country_name")', function() {
      // uncomment below and update the code to test the property countryName
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property countryNameOfficial (base name: "country_name_official")', function() {
      // uncomment below and update the code to test the property countryNameOfficial
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property isEu (base name: "is_eu")', function() {
      // uncomment below and update the code to test the property isEu
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property stateProv (base name: "state_prov")', function() {
      // uncomment below and update the code to test the property stateProv
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property stateCode (base name: "state_code")', function() {
      // uncomment below and update the code to test the property stateCode
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property district (base name: "district")', function() {
      // uncomment below and update the code to test the property district
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property locality (base name: "locality")', function() {
      // uncomment below and update the code to test the property locality
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property zipcode (base name: "zipcode")', function() {
      // uncomment below and update the code to test the property zipcode
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new TimezoneLocation();
      //expect(instance).to.be();
    });

  });

}));
