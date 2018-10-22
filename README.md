# IP Geolocation API Javascript SDK

## Introduction

[IPGeolocation API](https://ipgeolocation.io) is the solution to identify country code (ISO2 and ISO3 standard), country name, continent code, continent name, country capital, state/province, district, city, zip code, latitude and longitude of city, is country belongs to Europian Union, calling code, top level domain (TLD), languages, country flag, internet service provider (ISP), connection type, organization, geoname ID, currency code, currency name, time zone ID, time zone offset, current time in the time zone, is time zone in daylight saving time, and total daylight savings. This document provides important information to help you get up to speed with IPGeolocation API using IP Geolocation API Javascript SDK.

Developers can use this Javascript SDK for software and web projects related to, but not limited to:

1. Display native language and currency
2. Redirect based on the country
3. Digital rights management
4. Web log stats and analysis
5. Auto-selection of country, state/province and city on forms
6. Filter access from countries you do not do business with
7. Geo-targeting for increased sales and click-through

## Quick Start Guide

You need a valid 'IPGeolocation API key' to use this SDK. [Sign up](https://ipgeolocation.io/signup) here and get your free API key if you don't have one.

**Note:** Complete documentation to use this SDK is also available at [IP Geolocation API JavaScript SDK Documentation](https://ipgeolocation.io/documentation/ip-geolocation-api-javascript-sdk-201809051421).

## System Requirements

Internet connection is required to run this component.

## Installation

### NPM
```cli
$ npm install ip-geolocation-api-javascript-sdk
```

## Basic Usage

### Setup API

```javascript
var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');

// Create IPGeolocationAPI object, passing your valid API key
var ipgeolocationApi = new IPGeolocationAPI("YOUR_API_KEY");

**Note:** If you want to authorize your requests by your _Request Origin_, you can create IPGeolocationAPI object without an API key.
var ipgeolocationApi = new IPGeolocationAPI();
```

### Geolocation Lookup

```javascript
var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');

// Query geolocation for the calling machine's IP address for all fields
ipgeolocationApi.getGeolocation(null, geoResponse);
function geoResponse(json) {
    console.log(json);
}

// Query geolocation for IP address (1.1.1.1) and all fields
var geolocationParams = new GeolocationParams();
geolocationParams.setIp("1.1.1.1");

ipgeolocationApi.getGeolocation(geolocationParams, geoResponse);
function geoResponse(json) {
    console.log(json);
}

// Query geolocation for IP address (1.1.1.1) and fields (geo, time_zone and currency)
var geolocationParams = new GeolocationParams();
geolocationParams.setIp("1.1.1.1"); 
geolocationParams.setFields("geo,time_zone,currency");

ipgeolocationApi.getGeolocation(geolocationParams, geoResponse);
function geoResponse(json) {
    console.log(json);
}
```

### Bulk Geolocations Lookup

```ts
// Query geolocations for multiple IP addresses and all fields
var geolocationParams = new GeolocationParams();
geolocationParams.setIPList(['1.1.1.1', '2.2.2.2', '3.3.3.3']);

ipgeolocationApi.getGeolocation(geolocationParams, geoResponse);
function geoResponse(json) {
    console.log(json);
}

// Query geolocations for multiple IP addresses but only 'geo' field
var geolocationParams = new GeolocationParams();
geolocationParams.setIPList(['1.1.1.1', '2.2.2.2', '3.3.3.3']);
geolocationParams.setFields("geo");

ipgeolocationApi.getGeolocation(geolocationParams, geoResponse);
function geoResponse(json) {
    console.log(json);
}
```

### Time Zone API

```ts
var TimezoneParams = require('ip-geolocation-api-javascript-sdk/TimezoneParams.js');

// Query time zone information by time zone ID
var timezoneParams = new TimezoneParams();
timezoneParams.setTimezone("America/New_York");

ipgeolocationApi.getTimezone(timezoneParams, geoResponse);
function geoResponse(json) {
    console.log(json);
}

// Query time zone information by latitude and longitude of the location
var timezoneParams = new TimezoneParams();
timezoneParams.setLocation(37.1838139, -123.8105225);

ipgeolocationApi.getTimezone(timezoneParams, geoResponse);
function geoResponse(json) {
    console.log(json);
}

// Query time zone information for IP address (1.1.1.1)
var timezoneParams = new TimezoneParams();
timezoneParams.setIp("1.1.1.1");

ipgeolocationApi.getTimezone(timezoneParams, timeZoneResponse);
function timeZoneResponse(json) {
    console.log(json);
}

// Query time zone information for calling machine’s IP address
ipgeolocationApi.getTimezone(null, timeZoneResponse);
function timeZoneResponse(json) {
    console.log(json);
}
```
