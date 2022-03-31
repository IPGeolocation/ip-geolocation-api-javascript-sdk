module.exports = class TimezoneParams {

    constructor() {
        var tz = '';
        var ipAddress = '';
        var lang = 'en';
        var latitude = '1000.0';
        var longitude = '1000.0';
        var location = "";
    }

    setTimezone(tz = '') {
        this.tz = tz;
    }

    getTimezone() {
        return this.tz;
    }

    setIPAddress(ipAddress = '') {
        this.ipAdress = ipAddress;
    }

    getIPAddress() {
        return this.ipAdress;
    }

    setLang(lang = 'en') {
        this.lang = lang;
    }

    getLang() {
        return this.lang;
    }

    setCoordinates(la = '1000.0', lo = '1000.0') {
        if ((la >= -90 && la <= 90) && (lo >= -180 && lo <= 180)) {
            this.latitude = la;
            this.longitude = lo;
        }
    }

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
    }
    getLocation() {
        return this.location;
    }
    setLocation(loc = "") {
        this.location = loc;
    }
}


