module.exports = class GeolocationParams  {

    constructor() {
        var ip = "";
        var fields = "";
        var ips = "";
    }

    setIP(ip = "") {
        this.ip = ip;
    }

    getIP() {
        return this.ip;
    }

    setFields(fields = "") {
        this.fields = fields;
    }

    getFields() {
        return this.fields;
    }

    setIPList(ips = []) {
        if(ips.length > 50) {
            console.log("Max. number of IP addresses cannot be more than 50.");
        } else {
            this.ips = ips;
        }
    }

    getIPList() {
        return this.ips;
    }
}

