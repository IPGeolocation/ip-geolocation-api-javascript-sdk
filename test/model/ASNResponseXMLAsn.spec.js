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
    instance = new ASNResponseXMLAsn();
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

  describe('ASNResponseXMLAsn', function() {
    it('should create an instance of ASNResponseXMLAsn', function() {
      // uncomment below and update the code to test ASNResponseXMLAsn
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be.a(ASNResponseXMLAsn);
    });

    it('should have the property asNumber (base name: "as_number")', function() {
      // uncomment below and update the code to test the property asNumber
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property asnName (base name: "asn_name")', function() {
      // uncomment below and update the code to test the property asnName
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property dateAllocated (base name: "date_allocated")', function() {
      // uncomment below and update the code to test the property dateAllocated
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property allocationStatus (base name: "allocation_status")', function() {
      // uncomment below and update the code to test the property allocationStatus
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property numOfIpv4Routes (base name: "num_of_ipv4_routes")', function() {
      // uncomment below and update the code to test the property numOfIpv4Routes
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property numOfIpv6Routes (base name: "num_of_ipv6_routes")', function() {
      // uncomment below and update the code to test the property numOfIpv6Routes
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property rir (base name: "rir")', function() {
      // uncomment below and update the code to test the property rir
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property routes (base name: "routes")', function() {
      // uncomment below and update the code to test the property routes
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property upstreams (base name: "upstreams")', function() {
      // uncomment below and update the code to test the property upstreams
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property downstreams (base name: "downstreams")', function() {
      // uncomment below and update the code to test the property downstreams
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property peers (base name: "peers")', function() {
      // uncomment below and update the code to test the property peers
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

    it('should have the property whoisResponse (base name: "whois_response")', function() {
      // uncomment below and update the code to test the property whoisResponse
      //var instance = new ASNResponseXMLAsn();
      //expect(instance).to.be();
    });

  });

}));
