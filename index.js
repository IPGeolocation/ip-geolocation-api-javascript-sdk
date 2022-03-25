var GeolocationParams = require('./GeolocationParams.js');
var TimezoneParams = require('./TimezoneParams.js');
var IPGeolocationAPI = require('./IPGeolocationAPI.js');

var ipgeolocationApi = new IPGeolocationAPI("YOUR_API_KEY", false); 

// Geolocation API
// var geolocationParams = new GeolocationParams();
// geolocationParams.setIPAddress('1.1.1.1');
// geolocationParams.setIncludeHostname(true);
// geolocationParams.setIncludeHostnameFallbackLive(true);
// geolocationParams.setIncludeLiveHostname(true);
// geolocationParams.setIncludeSecurity(true);
// geolocationParams.setIncludeUserAgent(true);
// ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

// Timezone API
// var timezoneParams = new TimezoneParams();
// timezoneParams.setIPAddress('1.1.1.1');
// timezoneParams.setLocation("Amman, Jordan");
// timezoneParams.setTimezone("America/Los_Angeles");
// timezoneParams.setCoordinates("25.9406805", "50.3073933");
// ipgeolocationApi.getTimezone(handleResponse, timezoneParams);

// UserAgent API
// Single user-agent string lookup
// ipgeolocationApi.getUserAgent(handleResponse, "AppleTV6,2/11.1");
// Bulk user-agent strings lookup
// const uaStrings = ["AppleTV6,2/11.1", "Roku4640X/DVP-7.70 (297.70E04154A)", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"];
// ipgeolocationApi.getBulkUserAgent(handleResponse, uaStrings);

function handleResponse(json) {
    console.log(json);
}
