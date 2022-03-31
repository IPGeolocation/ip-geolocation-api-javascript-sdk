var GeolocationParams = require('./GeolocationParams.js');
var TimezoneParams = require('./TimezoneParams.js');

module.exports = class IPGeolocationAPI {

    constructor(apiKey = null, async = true) {
        this.apiKey = apiKey;
        this.async = async;
    }

    getGeolocation(callback, geolocationParams = null) {
        if (geolocationParams && geolocationParams.getIPAddresses()) {
            var jsonData = JSON.stringify({
                'ips': geolocationParams.getIPAddresses()
            });

            postRequest('ipgeo-bulk', buildGeolocationUrlParams(this.apiKey, geolocationParams), jsonData, callback);
        } else {
            getRequest('ipgeo', buildGeolocationUrlParams(this.apiKey, geolocationParams), callback);
        }
    }

    getTimezone(callback, timezoneParams = null) {
        return getRequest('timezone', buildTimezoneUrlParams(this.apiKey, timezoneParams), callback);
    }

    getUserAgent(callback, uaString ="") {
        var jsonData = JSON.stringify({
            "uaString": uaString
        });

        postRequest('user-agent', "apiKey=" + this.apiKey, jsonData, callback);
    }

    getBulkUserAgent(callback, uaStrings = []) {
        var jsonData = JSON.stringify({
            "uaStrings": uaStrings
        });

        postRequest('user-agent-bulk', "apiKey=" + this.apiKey, jsonData, callback);
    }

    getApiKey() {
        return this.apiKey;
    }

    isAsync() {
        return this.async;
    }
}

function buildGeolocationUrlParams(apiKey = '', geolocationParams = null) {
    var urlParams = '';

    if (apiKey) {
        urlParams = urlParams.concat('apiKey=', apiKey);
    }

    if (geolocationParams) {
        if (geolocationParams.getIPAddress()) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('ip=', geolocationParams.getIPAddress());
        }

        if (geolocationParams.getFields()) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('fields=', geolocationParams.getFields());
        }

        if (geolocationParams.getExcludes()) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('excludes=', geolocationParams.getExcludes());
        }

        if (geolocationParams.getLang()) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('lang=', geolocationParams.getLang());
        }

        if (geolocationParams.isIncludeHostname() || geolocationParams.isIncludeHostnameFallbackLive() || geolocationParams.isIncludeLiveHostname() || geolocationParams.isIncludeSecurity() || geolocationParams.isIncludeUserAgent()) {
            var val = "";
            var includeHost = false;

            if (geolocationParams.isIncludeHostname()) {
                val = "hostname";
                includeHost = true;
            } else if (geolocationParams.isIncludeHostnameFallbackLive()) {
                val = "hostnameFallbackLive";
                includeHost = true;
            } else if (geolocationParams.isIncludeLiveHostname()) {
                val = "liveHostname";
                includeHost = true;
            }
            
            if (geolocationParams.isIncludeSecurity()) {
                if (includeHost) {
                    val = val + ",security";
                } else {
                    val = "security";
                }
            }
            
            if (geolocationParams.isIncludeUserAgent()) {
                if (includeHost || geolocationParams.isIncludeSecurity()) {
                    val = val + ",useragent";
                } else {
                    val = "useragent";
                }
            }
            
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }
            
            urlParams = urlParams.concat('include=', val);

        }

    }

    return urlParams;
}

function buildTimezoneUrlParams(apiKey = '', timezoneParams = null) {
    var urlParams = '';

    if (apiKey) {
        urlParams = urlParams.concat('apiKey=', apiKey);
    }

    if (timezoneParams) {
        if (timezoneParams.getIPAddress()) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('ip=', timezoneParams.getIPAddress());
        }

        if (timezoneParams.getTimezone()) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('tz=', timezoneParams.getTimezone());
        }

        if (timezoneParams.getLocation()) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('location=', timezoneParams.getLocation());
        }

        if ((timezoneParams.getLatitude() >= -90 && timezoneParams.getLatitude() <= 90) && (timezoneParams.getLongitude() >= -180 && timezoneParams.getLongitude() <= 180)) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }
            
            urlParams = urlParams.concat('lat=', timezoneParams.getLatitude(), '&long=', timezoneParams.getLongitude());
        }

        if (timezoneParams.getLang()) {
            if (urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('lang=', timezoneParams.getLang());
        }
    }
    return urlParams;
}

function getRequest(subUrl, urlParams = '', callback) {
    var jsonData = {};
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status == 0) {
                jsonData = {
                    'message': 'Internet is not connected!'
                };
            } else {
                jsonData = JSON.parse(this.responseText);
            }

            if (callback && typeof (callback) === typeof (Function)) {
                callback(jsonData);
            } else {
                console.error(`Passed callback '${callback}' is not a valid Function.`)
            }
        }
    };
    xhr.withCredentials = true;
    xhr.open('GET', 'https://api.ipgeolocation.io/'.concat(subUrl, '?', urlParams, ''), this.async);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
}

function postRequest(subUrl, urlParams = '', requestData = {}, callback) {
    var jsonData = {};
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status == 0) {
                jsonData = {
                    'message': 'Internet is not connected!'
                };
            } else {
                jsonData = JSON.parse(this.responseText);
            }

            if (callback && typeof (callback) === typeof (Function)) {
                callback(jsonData);
            } else {
                console.error(`Passed callback '${callback}' is not a valid Function.`)
            }
        }
    };
    xhr.withCredentials = true;
    xhr.open('POST', 'https://api.ipgeolocation.io/'.concat(subUrl, '?', urlParams, ''), this.async);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(requestData);
}
