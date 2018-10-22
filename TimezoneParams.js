module.exports = class TimezoneParams {

    constructor() {
        var timezone = "";
        var ip = "";
        var latitude = 1000.0;
        var longitude = 1000.0;
    }

    setTimezone(timezone = "") {
        this.timezone = timezone;
    }

    getTimezone() {
        return this.timezone;
    }

    setIP(ip = "") {
        this.ip = ip;
    }

    getIP() {
        return this.ip;
    }

    setLocation(latitude = "", longitude = "") {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
    }
}


