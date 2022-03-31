module.exports = class GeolocationParams {

    constructor() {
        var ipAdress = '';
        var ipAdresses = [];
        var fields = '*';
        var excludes = '';
        var lang = 'en';
        var includeHostname = false;
        var includeLiveHostname = false;
        var includeHostnameFallbackLive = false;
        var includeSecurity = false;
        var includeUserAgent = false;
    }

    setIPAddress(ipAddress = '') {
        this.ipAdress = ipAddress;
    }

    getIPAddress() {
        return this.ipAdress;
    }

    setFields(fields = '*') {
        this.fields = fields;
    }

    getFields() {
        return this.fields;
    }

    setExcludes(excludes = '') {
        this.excludes = excludes;
    }

    getExcludes() {
        return this.excludes;
    }

    setLang(lang = 'en') {
        this.lang = lang;
    }

    getLang() {
        return this.lang;
    }

    setIPAddresses(ipAdresses = []) {
        if (ipAdresses.length > 50) {
            console.log("Max. number of IP addresses cannot be more than 50.");
        } else {
            this.ipAdresses = ipAdresses;
        }
    }

    getIPAddresses() {
        return this.ipAdresses;
    }

    setIncludeHostname(b = false) {
        this.includeHostname = b;
    }
    
    setIncludeHostnameFallbackLive(b = false) {
        this.includeHostnameFallbackLive = b;
    }

    setIncludeLiveHostname(b = false) {
        this.includeLiveHostname = b;
    }

    setIncludeSecurity(b = false) {
        this.includeSecurity = b;
    }

    setIncludeUserAgent(b = false) {
        this.includeUserAgent = b;
    }

    isIncludeHostname() {
        return this.includeHostname;
    }

    isIncludeHostnameFallbackLive() {
        return this.includeHostnameFallbackLive;
    }

    isIncludeLiveHostname() {
        return this.includeLiveHostname;
    }

    isIncludeSecurity() {
        return this.includeSecurity;
    }

    isIncludeUserAgent() {
        return this.includeUserAgent;
    }
}

