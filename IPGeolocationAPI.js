var GeolocationParams = require('./GeolocationParams.js');
var TimezoneParams = require('./TimezoneParams.js');

module.exports = class IPGeolocationAPI {

    constructor(apiKey = null, async = true) {
        this.apiKey = apiKey;
        this.async = async;
    }

    getGeolocation(callback, geolocationParams = null) {
        if(geolocationParams && geolocationParams.getIPAddresses()) {
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

    getApiKey() {
        return this.apiKey;
    }

    isAsync() {
        return this.async;
    }
}

function buildGeolocationUrlParams(apiKey = '', geolocationParams = null) {
    var urlParams = '';

    if(apiKey) {
        urlParams = urlParams.concat('apiKey=', apiKey);
    }

    if(geolocationParams) {
        if(geolocationParams.getIPAddress()) {
            if(urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('ip=', geolocationParams.getIPAddress());
        }
    
        if(geolocationParams.getFields()) {
            if(urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('fields=', geolocationParams.getFields());
        }
    
        if(geolocationParams.getExcludes()) {
            if(urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('excludes=', geolocationParams.getExcludes());
        }
    
        if(geolocationParams.getLang()) {
            if(urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('lang=', geolocationParams.getLang());
        }
    }
    return urlParams;
}

function buildTimezoneUrlParams(apiKey = '', timezoneParams = null) {
    var urlParams = '';

    if(apiKey) {
        urlParams = urlParams.concat('apiKey=', apiKey);
    }

    if(timezoneParams) {
        if(timezoneParams.getIPAddress()) {
            if(urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('ip=', timezoneParams.getIPAddress());
        }

        if(timezoneParams.getTimezone()) {
            if(urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('tz=', timezoneParams.getTimezone());
        }

        if(timezoneParams.getLatitude() !== '1000.0' && timezoneParams.getLongitude() !== '1000.0') {
            if(urlParams) {
                urlParams = urlParams.concat('&');
            }

            urlParams = urlParams.concat('lat=', timezoneParams.getLatitude(), '&long=', timezoneParams.getLongitude());
        }
    
        if(timezoneParams.getLang()) {
            if(urlParams) {
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

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status == 0){
                jsonData = {
                    'message': 'Internet is not connected!'
                };
            } else {
                jsonData = JSON.parse(this.responseText);
            }

            if (callback && typeof(callback) === typeof(Function)) {
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

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status == 0) {
                jsonData = {
                    'message': 'Internet is not connected!'
                };
            } else {
                  jsonData = JSON.parse(this.responseText);
            }
            
            if (callback && typeof(callback) === typeof(Function)) {
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
