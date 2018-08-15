# ip-geolocation-api-javascript-sdk

## Installation
------------

    npm i ip-geolocation-api-javascript-sdk
    
## Usage
```js
var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');
var TimezoneParams = require('ip-geolocation-api-javascript-sdk/TimezoneParams.js');
```
### Setup API
```js
var api = new IPGeolocationAPI("YOUR_API_KEY");
```

### Geolocation Lookup
```js
// Query geolocation for IP address (1.1.1.1) and fields (geo, time_zone and currency)
var geolocationParams = new GeolocationParams();
geolocationParams.setIp("1.1.1.1"); 
geolocationParams.setFields("geo,time_zone,currency");

console.log(api.getGeolocation(geolocationParams));

// Query geolocation for IP address (1.1.1.1) and all fields
GeolocationParams geoParams = new GeolocationParams();
geoParams.SetIp("1.1.1.1");

console.log(api.getGeolocation(geolocationParams));

// Query geolocation for the calling machine's IP address for all fields
console.log(api.getGeolocation());
```

### Bulk Geolocations Lookup
```js
// Query geolocations for multiple IP addresses and all fields
var geolocationParams = new GeolocationParams();
geolocationParams.setIps(['1.1.1.1','2.2.22.2','34.1.1.3']);

console.log(api.getGeolocation(geolocationParams));
```
