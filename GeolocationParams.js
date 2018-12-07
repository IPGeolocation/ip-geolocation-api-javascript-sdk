module.exports = class GeolocationParams  {

    constructor() {
        var ipAdress = '';
        var fields = '*';
        var excludes = '';
        var lang = 'en';
        var ipAdresses = [];
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
        if(ipAdresses.length > 50) {
            console.log("Max. number of IP addresses cannot be more than 50.");
        } else {
            this.ipAdresses = ipAdresses;
        }
    }

    getIPAddresses() {
        return this.ipAdresses;
    }
}

