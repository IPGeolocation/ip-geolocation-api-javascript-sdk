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
    instance = new TimezoneAirport();
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

  describe('TimezoneAirport', function() {
    it('should create an instance of TimezoneAirport', function() {
      // uncomment below and update the code to test TimezoneAirport
      //var instance = new TimezoneAirport();
      //expect(instance).to.be.a(TimezoneAirport);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property elevationFt (base name: "elevation_ft")', function() {
      // uncomment below and update the code to test the property elevationFt
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property continentCode (base name: "continent_code")', function() {
      // uncomment below and update the code to test the property continentCode
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "country_code")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property stateCode (base name: "state_code")', function() {
      // uncomment below and update the code to test the property stateCode
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property iataCode (base name: "iata_code")', function() {
      // uncomment below and update the code to test the property iataCode
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property icaoCode (base name: "icao_code")', function() {
      // uncomment below and update the code to test the property icaoCode
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

    it('should have the property faaCode (base name: "faa_code")', function() {
      // uncomment below and update the code to test the property faaCode
      //var instance = new TimezoneAirport();
      //expect(instance).to.be();
    });

  });

}));
