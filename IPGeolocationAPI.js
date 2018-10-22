var GeolocationParams = require('./GeolocationParams.js');
var TimezoneParams = require('./TimezoneParams.js');

module.exports = class IPGeolocationAPI {

    constructor(apiKey = "") {
        this.apiKey = apiKey;
    }

    getApiKey() {
        return this.apiKey;
    }

    getGeolocation(params = null, callback) {
        if(params && params.getIPList()) {
            return postRequest("ipgeo-bulk", params, this.apiKey, callback);
        } else {
            return getRequest("ipgeo", buildGeolocationUrlParams(params, this.apiKey), callback);
        }
    }
     
    getTimezone(params = null, callback) {
        return getRequest("timezone", buildTimezoneUrlParams(params, this.apiKey), callback);
    }
}

function buildTimezoneUrlParams(params = null, apiKey = "") {
    var urlParams = "";

    if(apiKey) {
        urlParams = urlParams.concat("apiKey=", apiKey);
    }

    if(params) {
        var ip = params.getIP();

        if(ip) {
            if(urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("ip=", ip);
        }

        var tz = params.getTimezone();

        if(tz) {
            if(urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("tz=", tz);
        }

        var latitude = params.getLatitude();
        var longitude = params.getLongitude();

        if(latitude && latitude !== 1000.0 && longitude && longitude !== 1000.0) {
            if(urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("lat=", latitude, "&long=", longitude);
        }
    }
    return urlParams;
}

function buildGeolocationUrlParams(params = null, apiKey = "") {
    var urlParams = "";

    if(apiKey) {
        urlParams = urlParams.concat("apiKey=", apiKey);
    }

    if(params) {
        var ip = params.getIP();
        
        if(ip) {
            if(urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("ip=", ip);
        }

        var fields = params.getFields();
    
        if(fields) {
            if(urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("fields=", fields);
        }
    }
    return urlParams;
}

function getRequest(subUrl = "", params = "", callback) {
    var jsonData = null;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();

    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            jsonData = JSON.parse(this.responseText);

            if (callback && typeof(callback) === typeof(Function)) {
                callback(jsonData);
            }
        }
    };
    xhttp.open("GET", "https://api.ipgeolocation.io/".concat(subUrl, "?", params, ""), true);
    xhttp.send();
}

function postRequest(subUrl = "", params = "", apiKey = "", callback) {
    var jsonData = null; 
    var data = JSON.stringify({
        "ips": params.getIPList()
    });
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();

    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            jsonData = JSON.parse(this.responseText);
            
            if (callback && typeof(callback) === typeof(Function)) {
                callback(jsonData);
            }
        }
    };
    xhttp.open("POST", "https://api.ipgeolocation.io/".concat(subUrl, "?apiKey=", apiKey, ""), true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(data);
}
