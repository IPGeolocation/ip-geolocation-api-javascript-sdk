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
    instance = new UserAgentDataOperatingSystem();
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

  describe('UserAgentDataOperatingSystem', function() {
    it('should create an instance of UserAgentDataOperatingSystem', function() {
      // uncomment below and update the code to test UserAgentDataOperatingSystem
      //var instance = new UserAgentDataOperatingSystem();
      //expect(instance).to.be.a(UserAgentDataOperatingSystem);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new UserAgentDataOperatingSystem();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new UserAgentDataOperatingSystem();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new UserAgentDataOperatingSystem();
      //expect(instance).to.be();
    });

    it('should have the property versionMajor (base name: "version_major")', function() {
      // uncomment below and update the code to test the property versionMajor
      //var instance = new UserAgentDataOperatingSystem();
      //expect(instance).to.be();
    });

    it('should have the property build (base name: "build")', function() {
      // uncomment below and update the code to test the property build
      //var instance = new UserAgentDataOperatingSystem();
      //expect(instance).to.be();
    });

  });

}));
