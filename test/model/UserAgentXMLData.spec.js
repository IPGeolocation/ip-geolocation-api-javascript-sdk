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
    instance = new UserAgentXMLData();
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

  describe('UserAgentXMLData', function() {
    it('should create an instance of UserAgentXMLData', function() {
      // uncomment below and update the code to test UserAgentXMLData
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be.a(UserAgentXMLData);
    });

    it('should have the property userAgentString (base name: "user_agent_string")', function() {
      // uncomment below and update the code to test the property userAgentString
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be();
    });

    it('should have the property versionMajor (base name: "version_major")', function() {
      // uncomment below and update the code to test the property versionMajor
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be();
    });

    it('should have the property device (base name: "device")', function() {
      // uncomment below and update the code to test the property device
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be();
    });

    it('should have the property engine (base name: "engine")', function() {
      // uncomment below and update the code to test the property engine
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be();
    });

    it('should have the property operatingSystem (base name: "operating_system")', function() {
      // uncomment below and update the code to test the property operatingSystem
      //var instance = new UserAgentXMLData();
      //expect(instance).to.be();
    });

  });

}));
