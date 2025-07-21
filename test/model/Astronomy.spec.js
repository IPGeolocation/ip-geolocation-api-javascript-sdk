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
    instance = new Astronomy();
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

  describe('Astronomy', function() {
    it('should create an instance of Astronomy', function() {
      // uncomment below and update the code to test Astronomy
      //var instance = new Astronomy();
      //expect(instance).to.be.a(Astronomy);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property currentTime (base name: "current_time")', function() {
      // uncomment below and update the code to test the property currentTime
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property sunrise (base name: "sunrise")', function() {
      // uncomment below and update the code to test the property sunrise
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property sunset (base name: "sunset")', function() {
      // uncomment below and update the code to test the property sunset
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property sunStatus (base name: "sun_status")', function() {
      // uncomment below and update the code to test the property sunStatus
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property solarNoon (base name: "solar_noon")', function() {
      // uncomment below and update the code to test the property solarNoon
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property dayLength (base name: "day_length")', function() {
      // uncomment below and update the code to test the property dayLength
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property sunAltitude (base name: "sun_altitude")', function() {
      // uncomment below and update the code to test the property sunAltitude
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property sunDistance (base name: "sun_distance")', function() {
      // uncomment below and update the code to test the property sunDistance
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property sunAzimuth (base name: "sun_azimuth")', function() {
      // uncomment below and update the code to test the property sunAzimuth
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonrise (base name: "moonrise")', function() {
      // uncomment below and update the code to test the property moonrise
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonset (base name: "moonset")', function() {
      // uncomment below and update the code to test the property moonset
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonStatus (base name: "moon_status")', function() {
      // uncomment below and update the code to test the property moonStatus
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonAltitude (base name: "moon_altitude")', function() {
      // uncomment below and update the code to test the property moonAltitude
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonDistance (base name: "moon_distance")', function() {
      // uncomment below and update the code to test the property moonDistance
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonAzimuth (base name: "moon_azimuth")', function() {
      // uncomment below and update the code to test the property moonAzimuth
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonParallacticAngle (base name: "moon_parallactic_angle")', function() {
      // uncomment below and update the code to test the property moonParallacticAngle
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonPhase (base name: "moon_phase")', function() {
      // uncomment below and update the code to test the property moonPhase
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonIlluminationPercentage (base name: "moon_illumination_percentage")', function() {
      // uncomment below and update the code to test the property moonIlluminationPercentage
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

    it('should have the property moonAngle (base name: "moon_angle")', function() {
      // uncomment below and update the code to test the property moonAngle
      //var instance = new Astronomy();
      //expect(instance).to.be();
    });

  });

}));
