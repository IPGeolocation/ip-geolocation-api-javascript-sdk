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
    instance = new Security();
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

  describe('Security', function() {
    it('should create an instance of Security', function() {
      // uncomment below and update the code to test Security
      //var instance = new Security();
      //expect(instance).to.be.a(Security);
    });

    it('should have the property threatScore (base name: "threat_score")', function() {
      // uncomment below and update the code to test the property threatScore
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property isTor (base name: "is_tor")', function() {
      // uncomment below and update the code to test the property isTor
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property isProxy (base name: "is_proxy")', function() {
      // uncomment below and update the code to test the property isProxy
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property proxyType (base name: "proxy_type")', function() {
      // uncomment below and update the code to test the property proxyType
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property proxyProvider (base name: "proxy_provider")', function() {
      // uncomment below and update the code to test the property proxyProvider
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property isAnonymous (base name: "is_anonymous")', function() {
      // uncomment below and update the code to test the property isAnonymous
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property isKnownAttacker (base name: "is_known_attacker")', function() {
      // uncomment below and update the code to test the property isKnownAttacker
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property isSpam (base name: "is_spam")', function() {
      // uncomment below and update the code to test the property isSpam
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property isBot (base name: "is_bot")', function() {
      // uncomment below and update the code to test the property isBot
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property isCloudProvider (base name: "is_cloud_provider")', function() {
      // uncomment below and update the code to test the property isCloudProvider
      //var instance = new Security();
      //expect(instance).to.be();
    });

    it('should have the property cloudProvider (base name: "cloud_provider")', function() {
      // uncomment below and update the code to test the property cloudProvider
      //var instance = new Security();
      //expect(instance).to.be();
    });

  });

}));
