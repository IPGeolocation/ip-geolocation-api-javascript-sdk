# IP Geolocation API JavaScript SDK

**IPGeolocation** provides a set of APIs to make IP-based decisions and enrich your applications with real-time geolocation, timezone, user-agent, and threat intelligence data.

**API version**: 2.0  
**Package version**: 2.0.0  
**NPM package**: [`ip-geolocation-api-javascript-sdk`](https://www.npmjs.com/package/ip-geolocation-api-javascript-sdk)

## Table of Contents

- [Installation](#installation)
    - [Using NPM](#using-npm)
    - [Using Yarn](#using-yarn)
    - [Manual Installation](#manual-installation)
- [Authentication Setup](#authentication-setup)
- [API Endpoints](#api-endpoints)
- [Examples](#example-usage)
    - [IP Geolocation Examples](#ip-geolocation-examples)
    - [Bulk IP Geolocation Examples](#bulk-ip-geolocation-examples)
    - [IP Security Examples](#ip-security-examples)
    - [ASN API Examples](#asn-api-examples)
    - [Timezone API Examples](#timezone-api-examples)
    - [User Agent API Examples](#user-agent-api-examples)
    - [Astronomy API Examples](#astronomy-api-examples)
    - [Abuse Contact API Examples](#abuse-contact-api-examples)
- [Models](#models)



# Installation

## Using NPM

Install the SDK directly from NPM:

```bash
npm install ip-geolocation-api-javascript-sdk
```

## Using Yarn
Alternatively, if you use Yarn:
```bash
yarn add ip-geolocation-api-javascript-sdk
```

## Manual Installation
To include the SDK manually:
1. Clone this repository:
```bash
git clone https://github.com/ipgeolocation/ip-geolocation-api-javascript-sdk.git
```
2. Navigate to the project folder and install dependencies:
```bash
npm install
```
or with Yarn:
```bash
yarn install
```

# Authentication Setup
To authenticate API requests, you'll need an API key from [ipgeolocation.io](https://ipgeolocation.io). Once you have the key, initialize the SDK client with it:
```javascript
const { APIClient } = require('ip-geolocation-api-javascript-sdk');

const client = APIClient.instance;
client.authentications['ApiKeyAuth'].apiKey = 'YOUR_API_KEY_HERE';

```
## Request Origin (No API Key)
If you don't set an API key, the IPGeolocation API can still authenticate your request using **request origin**.
This is useful if:
- You're using the SDK from a **browser** or **server with allowed referrer/IP**
- Your keyless usage is enabled in the dashboard
  
In this case, just skip setting the API key, and the API will automatically detect your request origin:
```javascript
const { ApiClient } = require('ip-geolocation-api-javascript-sdk');
const client = ApiClient.instance;
// No API key set — will use request origin

```

# API Endpoints

All URIs are relative to *https://api.ipgeolocation.io/v2*

Class | Method                                                                                  | HTTP request | Description
------------ |-----------------------------------------------------------------------------------------| ------------- | -------------
*ASNLookupAPI* | [**getAsnInfo**](docs/ASNLookupAPI.md#getasninfo)                                       | **GET** /asn | Get details of any ASN number
*AbuseContactAPI* | [**getAbuseContactInfo**](docs/AbuseContactAPI.md#getabusecontactinfo)                  | **GET** /abuse | Retrieve abuse contact data for an IP address
*AstronomyAPI* | [**getAstronomyDetails**](docs/AstronomyAPI.md#getastronomydetails)                     | **GET** /astronomy | Get sun and moon timings and positions
*IPGeolocationAPI* | [**getBulkIpGeolocation**](docs/IPGeolocationAPI.md#getbulkipgeolocation)               | **POST** /ipgeo-bulk | Get geolocation data for multiple IP addresses
*IPGeolocationAPI* | [**getIpGeolocation**](docs/IPGeolocationAPI.md#getipgeolocation)                       | **GET** /ipgeo | Get geolocation data for a single IP address
*IPSecurityAPI* | [**getBulkIpSecurityInfo**](docs/IPSecurityAPI.md#getbulkipsecurityinfo)                | **POST** /security-bulk | Get threat intelligence for multiple IP addresses
*IPSecurityAPI* | [**getIpSecurityInfo**](docs/IPSecurityAPI.md#getipsecurityinfo)                        | **GET** /security | Get threat intelligence for a single IP address
*TimeConversionAPI* | [**convertTimeBetweenTimezones**](docs/TimeConversionAPI.md#converttimebetweentimezones) | **GET** /timezone/convert | Convert time from one timezone to another
*TimezoneAPI* | [**getTimezoneInfo**](docs/TimezoneAPI.md#gettimezoneinfo)                              | **GET** /timezone | Get timezone information based on IP, coordinates, or name
*UserAgentAPI* | [**getUserAgentDetails**](docs/UserAgentAPI.md#getuseragentdetails)                     | **GET** /user-agent | Parse a single user-agent string
*UserAgentAPI* | [**parseBulkUserAgentStrings**](docs/UserAgentAPI.md#parsebulkuseragentstrings)         | **POST** /user-agent-bulk | Parse multiple user-agent strings 
*UserAgentAPI* | [**parseUserAgentString**](docs/UserAgentAPI.md#parseuseragentstring)                   | **POST** /user-agent | Alternate method to parse a single user-agent string

# Example Usage

##  IP Geolocation Examples
This section shows how to use the getIpGeolocation() method from the JavaScript SDK across Free, Standard, and Advanced subscription tiers. Each example highlights different parameter combinations: fields, include, and excludes.

For the full list of supported fields/modules, refer to the [IP Geolocation API Docs](https://ipgeolocation.io/ip-location-api.html#documentation-overview).

### Developer (Free) Plan Examples
#### Default Fields
```javascript
const { IPGeolocationAPI }  = require('ip-geolocation-api-javascript-sdk');

const api = new IPGeolocationAPI();

api.getIpGeolocation({ ip: '8.8.8.8' }, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
If you don't provide an IP address, the API will use the request origin (IP of the request) to return geolocation data.

Sample Response:
```
{
  "ip": "8.8.8.8",
  "location": {
    "continent_code": "NA",
    "continent_name": "North America",
    "country_code2": "US",
    "country_code3": "USA",
    "country_name": "United States",
    "country_name_official": "United States of America",
    "country_capital": "Washington, D.C.",
    "state_prov": "California",
    "state_code": "US-CA",
    "district": "Santa Clara",
    "city": "Mountain View",
    "zipcode": "94043-1351",
    "latitude": "37.42240",
    "longitude": "-122.08421",
    "is_eu": false,
    "country_flag": "https://ipgeolocation.io/static/flags/us_64.png",
    "geoname_id": "6301403",
    "country_emoji": "🇺🇸"
  },
  "country_metadata": {
    "calling_code": "+1",
    "tld": ".us",
    "languages": [
      "en-US",
      "es-US",
      "haw",
      "fr"
    ]
  },
  "currency": {
    "code": "USD",
    "name": "US Dollar",
    "symbol": "$"
  }
}z
```
#### Filtering Fields and Exclusions
```javascript
api.getIpGeolocation({
  ip: '8.8.4.4',
  fields: 'location',
  excludes: 'location.continent_code,location.continent_name'
}, (error, data, response) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "8.8.4.4",
  "location": {
    "country_code2": "US",
    "country_code3": "USA",
    "country_name": "United States",
    "country_name_official": "United States of America",
    "country_capital": "Washington, D.C.",
    "state_prov": "California",
    "state_code": "US-CA",
    "district": "Santa Clara",
    "city": "Mountain View",
    "zipcode": "94043-1351",
    "latitude": "37.42240",
    "longitude": "-122.08421",
    "is_eu": false,
    "country_flag": "https://ipgeolocation.io/static/flags/us_64.png",
    "geoname_id": "6301403",
    "country_emoji": "🇺🇸"
  }
}
```
### Standard Plan Examples
#### Geolocation with Default Fields
```javascript
api.getIpGeolocation({ ip: '8.8.8.8' }, (error, data) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "8.8.8.8",
  "location": {
    "continent_code": "NA",
    "continent_name": "North America",
    "country_code2": "US",
    "country_code3": "USA",
    "country_name": "United States",
    "country_name_official": "United States of America",
    "country_capital": "Washington, D.C.",
    "state_prov": "California",
    "state_code": "US-CA",
    "district": "Santa Clara",
    "city": "Mountain View",
    "zipcode": "94043-1351",
    "latitude": "37.42240",
    "longitude": "-122.08421",
    "is_eu": false,
    "country_flag": "https://ipgeolocation.io/static/flags/us_64.png",
    "geoname_id": "6301403",
    "country_emoji": "🇺🇸"
  },
  "country_metadata": {
    "calling_code": "+1",
    "tld": ".us",
    "languages": [
      "en-US",
      "es-US",
      "haw",
      "fr"
    ]
  },
  "network": {
    "asn": {
      "as_number": "AS15169",
      "organization": "Google LLC",
      "country": "US"
    },
    "company": {
      "name": "Google LLC"
    }
  },
  "currency": {
    "code": "USD",
    "name": "US Dollar",
    "symbol": "$"
  }
}
```
### Language Support Example
Here is an example to get the geolocation data for IP address '2001:4230:4890::1' in French language:
```javascript
api.getIpGeolocation({
  ip: '2001:4230:4890::1',
  lang: 'fr'
}, (error, data) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "2001:4230:4890:0:0:0:0:1",
  "location": {
    "continent_code": "AF",
    "continent_name": "Afrique",
    "country_code2": "MU",
    "country_code3": "MUS",
    "country_name": "Maurice",
    "country_name_official": "",
    "country_capital": "Port Louis",
    "state_prov": "Wilhems des plaines",
    "state_code": "MU-PW",
    "district": "Quatre Bornes",
    "city": "Quatre Bornes",
    "zipcode": "72201",
    "latitude": "-20.24304",
    "longitude": "57.49631",
    "is_eu": false,
    "country_flag": "https://ipgeolocation.io/static/flags/mu_64.png",
    "geoname_id": "1106777",
    "country_emoji": "🇲🇺"
  },
  "country_metadata": {
    "calling_code": "+230",
    "tld": ".mu",
    "languages": [
      "en-MU",
      "bho",
      "fr"
    ]
  },
  "network": {
    "asn": {
      "as_number": "AS0",
      "organization": "",
      "country": ""
    },
    "company": {
      "name": "African Network Information Center AfriNIC Ltd"
    }
  },
  "currency": {
    "code": "MUR",
    "name": "Mauritius Rupee",
    "symbol": "₨"
  }
}
```
#### Include Hostname, Timezone, and User-Agent
```javascript
api.getIpGeolocation({
  ip: '4.5.6.7',
  fields: 'location.country_name,location.country_capital',
  include: 'user_agent,time_zone,hostnameFallbackLive'
}, (error, data) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "4.5.6.7",
  "hostname": "4.5.6.7",
  "location": {
    "country_name": "United States",
    "country_capital": "Washington, D.C."
  },
  "time_zone": {
    "name": "America/Chicago",
    "offset": -6,
    "offset_with_dst": -5,
    "current_time": "2025-07-11 04:50:39.537-0500",
    "current_time_unix": 1752227439.537,
    "is_dst": true,
    "dst_savings": 1,
    "dst_exists": true,
    "dst_start": {
      "utc_time": "2025-03-09 TIME 08",
      "duration": "+1H",
      "gap": true,
      "date_time_after": "2025-03-09 TIME 03",
      "date_time_before": "2025-03-09 TIME 02",
      "overlap": false
    },
    "dst_end": {
      "utc_time": "2025-11-02 TIME 07",
      "duration": "-1H",
      "gap": false,
      "date_time_after": "2025-11-02 TIME 01",
      "date_time_before": "2025-11-02 TIME 02",
      "overlap": true
    }
  },
  "user_agent": {
    "user_agent_string": "Ipgeolocation/2.0/Javascript",
    "name": "Ipgeolocation",
    "type": "Special",
    "version": "2.0",
    "version_major": "2",
    "device": {
      "name": "Unknown",
      "type": "Unknown",
      "brand": "Unknown",
      "cpu": "Unknown"
    },
    "engine": {
      "name": "Unknown",
      "type": "Unknown",
      "version": "??",
      "version_major": "??"
    },
    "operating_system": {
      "name": "Unknown",
      "type": "Unknown",
      "version": "??",
      "version_major": "??",
      "build": "??"
    }
  }
}
```
> **Note on Hostname Parameters**:
>
> The IP Geolocation API supports hostname lookup for all paid  subscriptions. However, this is not included by default. To enable hostname resolution, use the include parameter with one of the following options:
>  - `hostname`: Performs a quick lookup using the internal hostname database. If no match is found, the IP is returned as-is. This is fast but may produce incomplete results.
>  - `liveHostname`: Queries live sources for accurate hostname resolution. This may increase response time.
>  - `hostnameFallbackLive`: Attempts the internal database first, and falls back to live sources if no result is found. This option provides a balance of speed and reliability.

### Advanced Plan Example
#### Include DMA, Abuse, and Security
```javascript
api.getIpGeolocation({
  ip: '8.8.8.8',
  excludes: 'location.country_flag,location.country_emoji',
  include: 'dma,abuse,security'
}, (error, data) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "8.8.8.8",
  "location": {
    "continent_code": "NA",
    "continent_name": "North America",
    "country_code2": "US",
    "country_code3": "USA",
    "country_name": "United States",
    "country_name_official": "United States of America",
    "country_capital": "Washington, D.C.",
    "state_prov": "California",
    "state_code": "US-CA",
    "district": "Santa Clara",
    "city": "Mountain View",
    "zipcode": "94043-1351",
    "latitude": "37.42240",
    "longitude": "-122.08421",
    "is_eu": false,
    "geoname_id": "6301403",
    "accuracy_radius": "",
    "locality": "Mountain View",
    "dma_code": "807"
  },
  "country_metadata": {
    "calling_code": "+1",
    "tld": ".us",
    "languages": [
      "en-US",
      "es-US",
      "haw",
      "fr"
    ]
  },
  "network": {
    "asn": {
      "as_number": "AS15169",
      "organization": "Google LLC",
      "country": "US",
      "asn_name": "GOOGLE",
      "type": "BUSINESS",
      "domain": "about.google",
      "date_allocated": "",
      "allocation_status": "assigned",
      "num_of_ipv4_routes": "984",
      "num_of_ipv6_routes": "104",
      "rir": "ARIN"
    },
    "connection_type": "",
    "company": {
      "name": "Google LLC",
      "type": "Business",
      "domain": "googlellc.com"
    }
  },
  "currency": {
    "code": "USD",
    "name": "US Dollar",
    "symbol": "$"
  },
  "security": {
    "threat_score": 0,
    "is_tor": false,
    "is_proxy": false,
    "proxy_type": "",
    "proxy_provider": "",
    "is_anonymous": false,
    "is_known_attacker": false,
    "is_spam": false,
    "is_bot": false,
    "is_cloud_provider": false,
    "cloud_provider": ""
  },
  "abuse": {
    "route": "8.8.8.0/24",
    "country": "",
    "handle": "ABUSE5250-ARIN",
    "name": "Abuse",
    "organization": "Abuse",
    "role": "abuse",
    "kind": "group",
    "address": "1600 Amphitheatre Parkway\nMountain View\nCA\n94043\nUnited States",
    "emails": [
      "network-abuse@google.com"
    ],
    "phone_numbers": [
      "+1-650-253-0000"
    ]
  }
}
```
These examples demonstrate typical usage of the IP Geolocation API with different subscription tiers. Use fields to specify exactly which data to receive, include for optional data like security and user agent, and excludes to omit specific keys from the response.

> **Note**: All features available in the Free plan are also included in the Standard and Advanced plans. Similarly, all features of the Standard plan are available in the Advanced plan.
## Bulk IP Geolocation Example
The SDK supports bulk IP geolocation using getBulkIpGeolocation(). This is available for Standard and Advanced plans. All parameters like fields, include, and excludes can be used in bulk requests.
```javascript
const { BulkIPRequest } =  require('ip-geolocation-api-javascript-sdk');

const bulkRequest = new BulkIPRequest();
bulkRequest.ips = ['8.8.8.8', '1.1.1.1'];

api.getBulkIpGeolocation(bulkRequest, {
  fields: 'location.country_name,location.city',
  excludes: 'location.continent_code',
  include: 'security,timezone'
}, (error, data) => {
  if (error) console.error(error);
  else console.log(JSON.stringify(data, null, 2));
});

```
## IP Security Examples
The `getIpSecurityInfo()` method lets you query threat intelligence, proxy/VPN detection, and risk metadata for IPs.

For full endpoint specifications, refer to the [IP Security API documentation](https://ipgeolocation.io/ip-security-api.html#documentation-overview).

### Basic Request (Minimal Setup)
```javascript
const { APIClient, IPSecurityAPI } = require('ip-geolocation-api-javascript-sdk');

const client = APIClient.instance;
client.authentications['ApiKeyAuth'].apiKey = 'YOUR_API_KEY';

const api = new IPSecurityAPI(client);

api.getIpSecurityInfo({ ip: '2.56.188.34' }, (error, data) => {
  if (error) return console.error('API call failed:', error);
  console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "2.56.188.34",
  "security": {
    "threat_score": 80,
    "is_tor": false,
    "is_proxy": true,
    "proxy_type": "VPN",
    "proxy_provider": "Nord VPN",
    "is_anonymous": true,
    "is_known_attacker": true,
    "is_spam": false,
    "is_bot": false,
    "is_cloud_provider": true,
    "cloud_provider": "Packethub S.A."
  }
}
```
### Include Multiple Optional Fields
```javascript
api.getIpSecurityInfo({
  ip: '2.56.188.34',
  include: 'location,network,currency,time_zone,user_agent,country_metadata,hostname'
}, (error, data) => {
  if (error) return console.error('API call failed:', error);
  console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "2.56.188.34",
  "hostname": "2.56.188.34",
  "security": {
    "threat_score": 80,
    "is_tor": false,
    "is_proxy": true,
    "proxy_type": "VPN",
    "proxy_provider": "Nord VPN",
    "is_anonymous": true,
    "is_known_attacker": true,
    "is_spam": false,
    "is_bot": false,
    "is_cloud_provider": true,
    "cloud_provider": "Packethub S.A."
  },
  "location": {
    "continent_code": "NA",
    "continent_name": "North America",
    "country_code2": "US",
    "country_code3": "USA",
    "country_name": "United States",
    "country_name_official": "United States of America",
    "country_capital": "Washington, D.C.",
    "state_prov": "Texas",
    "state_code": "US-TX",
    "district": "Dallas",
    "city": "Dallas",
    "zipcode": "75201",
    "latitude": "32.77822",
    "longitude": "-96.79512",
    "is_eu": false,
    "country_flag": "https://ipgeolocation.io/static/flags/us_64.png",
    "geoname_id": "4684902",
    "country_emoji": "🇺🇸"
  },
  "network": {
    "asn": {
      "as_number": "AS62240",
      "organization": "Clouvider Limited",
      "country": "GB"
    },
    "company": {
      "name": "Packethub S.A."
    }
  },
  "time_zone": {
    "name": "America/Chicago",
    "offset": -6,
    "offset_with_dst": -5,
    "current_time": "2025-07-16 11:00:50.605-0500",
    "current_time_unix": 1752681650.605,
    "is_dst": true,
    "dst_savings": 1,
    "dst_exists": true,
    "dst_start": {
      "utc_time": "2025-03-09 TIME 08",
      "duration": "+1H",
      "gap": true,
      "date_time_after": "2025-03-09 TIME 03",
      "date_time_before": "2025-03-09 TIME 02",
      "overlap": false
    },
    "dst_end": {
      "utc_time": "2025-11-02 TIME 07",
      "duration": "-1H",
      "gap": false,
      "date_time_after": "2025-11-02 TIME 01",
      "date_time_before": "2025-11-02 TIME 02",
      "overlap": true
    }
  },
  "user_agent": {
    "user_agent_string": "Ipgeolocation/2.0/Javascript",
    "name": "Ipgeolocation",
    "type": "Special",
    "version": "2.0",
    "version_major": "2",
    "device": {
      "name": "Unknown",
      "type": "Unknown",
      "brand": "Unknown",
      "cpu": "Unknown"
    },
    "engine": {
      "name": "Unknown",
      "type": "Unknown",
      "version": "??",
      "version_major": "??"
    },
    "operating_system": {
      "name": "Unknown",
      "type": "Unknown",
      "version": "??",
      "version_major": "??",
      "build": "??"
    }
  },
  "country_metadata": {
    "calling_code": "+1",
    "tld": ".us",
    "languages": [
      "en-US",
      "es-US",
      "haw",
      "fr"
    ]
  },
  "currency": {
    "code": "USD",
    "name": "US Dollar",
    "symbol": "$"
  }
}
```
### Request with Field Filtering
```javascript
api.getIpSecurityInfo({
  ip: '195.154.221.54',
  fields: 'security.is_tor,security.is_proxy,security.is_bot,security.is_spam'
}, (error, data) => {
  if (error) return console.error('API call failed:', error);
  console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "195.154.221.54",
  "security": {
    "is_tor": false,
    "is_proxy": true,
    "is_spam": false,
    "is_bot": false
  }
}
```
## Bulk IP Security Lookup
The SDK also supports bulk IP Security requests using the `getBulkIpSecurityInfo()` method. All parameters like fields, include, and excludes can also be used in bulk requests.
```javascript
const { BulkIPRequest } = require('ip-geolocation-api-javascript-sdk');

const bulkRequest = new BulkIPRequest({ ips: ['2.56.188.34', '2.56.188.35'] });

api.getBulkIpSecurityInfo(bulkRequest, {
  include: 'location,network',
  fields: 'security.threat_score,location.country_name'
}, (error, data) => {
  if (error) return console.error('API call failed:', error);
  console.log(JSON.stringify(data, null, 2));
});
```

## ASN API Examples
This section provides usage examples of the `getAsnInfo()` method from the SDK. These methods allow developers to retrieve detailed ASN-level network data either by ASN number or by IP address.
> **Note:** ASN API is only available in the Advanced subscription plans.

Refer to the [ASN API documentation](https://ipgeolocation.io/asn-api.html#documentation-overview) for a detailed list of supported fields and behaviors.
### Get ASN Information by IP Address
```javascript
const { APIClient, ASNLookupAPI } = require('ip-geolocation-api-javascript-sdk');

const client = APIClient.instance;
client.authentications['ApiKeyAuth'].apiKey = 'YOUR_API_KEY';

const api = new ASNLookupAPI(client);

api.getAsnInfo(
  { ip: '8.8.8.8' }, // IP address
  (error, data, response) => {
    if (error) {
      console.error("API call failed:", error);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);

```
Sample Response:
```
{
  "ip": "8.8.8.8",
  "asn": {
    "as_number": "AS15169",
    "organization": "Google LLC",
    "country": "US",
    "asn_name": "GOOGLE",
    "type": "BUSINESS",
    "domain": "about.google",
    "date_allocated": "",
    "allocation_status": "assigned",
    "num_of_ipv4_routes": 983,
    "num_of_ipv6_routes": 104,
    "rir": "ARIN"
  }
}
```

### Get ASN Information by ASN Number
```javascript
api.getAsnInfo(
  { asn: 15169 }, // ASN number
  (error, data, response) => {
    if (error) {
      console.error("API call failed:", error);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);

```
Sample Response:
```
{
  "asn": {
    "as_number": "AS15169",
    "organization": "Google LLC",
    "country": "US",
    "asn_name": "GOOGLE",
    "type": "BUSINESS",
    "domain": "about.google",
    "date_allocated": "",
    "allocation_status": "assigned",
    "num_of_ipv4_routes": 983,
    "num_of_ipv6_routes": 104,
    "rir": "ARIN"
  }
}
```
### Combine All objects using Include
```javascript
api.getAsnInfo(
  {
    asn: 12,
    include: 'peers,downstreams,upstreams,routes,whois_response'
  },
  (error, data, response) => {
    if (error) {
      console.error("API call failed:", error);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);
```
Sample Response:
```
{
  "asn": {
    "as_number": "AS12",
    "organization": "New York University",
    "country": "US",
    "asn_name": "NYU-DOMAIN",
    "type": "EDUCATION",
    "domain": "nyu.edu",
    "date_allocated": "",
    "allocation_status": "assigned",
    "num_of_ipv4_routes": 12,
    "num_of_ipv6_routes": 1,
    "rir": "ARIN",
    "routes": [
      "192.76.177.0/24",
      "216.165.96.0/20",
      "128.122.0.0/16",
      "216.165.88.0/24",
      "192.86.139.0/24",
      "216.165.103.0/24",
      "216.165.89.0/24",
      "216.165.0.0/18",
      "216.165.112.0/21",
      "2607:f600::/32",
      "216.165.64.0/19",
      "216.165.102.0/24",
      "216.165.120.0/22"
    ],
    "upstreams": [
      {
        "as_number": "AS3269",
        "description": "Telecom Italia S.p.A.",
        "country": "IT"
      },
      {
        "as_number": "AS8220",
        "description": "COLT Technology Services Group Limited",
        "country": "GB"
      },
      {
        "as_number": "AS286",
        "description": "GTT Communications Inc.",
        "country": "US"
      },
      {
        "as_number": "AS3257",
        "description": "GTT Communications Inc.",
        "country": "US"
      },
      {
        "as_number": "AS3754",
        "description": "NYSERNet",
        "country": "US"
      },
      {
        "as_number": "AS3356",
        "description": "Level 3 Parent, LLC",
        "country": "US"
      },
      {
        "as_number": "AS6461",
        "description": "Zayo Bandwidth",
        "country": "US"
      },
      {
        "as_number": "AS137",
        "description": "Consortium GARR",
        "country": "IT"
      }
    ],
    "downstreams": [
      {
        "as_number": "AS394666",
        "description": "NYU Langone Health",
        "country": "US"
      },
      {
        "as_number": "AS54965",
        "description": "Polytechnic Institute of NYU",
        "country": "US"
      }
    ],
    "peers": [
      {
        "as_number": "AS3269",
        "description": "Telecom Italia S.p.A.",
        "country": "IT"
      },
      {
        "as_number": "AS8220",
        "description": "COLT Technology Services Group Limited",
        "country": "GB"
      },
      {
        "as_number": "AS394666",
        "description": "NYU Langone Health",
        "country": "US"
      },
      {
        "as_number": "AS286",
        "description": "GTT Communications Inc.",
        "country": "NL"
      },
      {
        "as_number": "AS286",
        "description": "GTT Communications Inc.",
        "country": "US"
      },
      {
        "as_number": "AS3257",
        "description": "GTT Communications Inc.",
        "country": "US"
      },
      {
        "as_number": "AS3754",
        "description": "NYSERNet",
        "country": "US"
      },
      {
        "as_number": "AS3356",
        "description": "Level 3 Parent, LLC",
        "country": "US"
      },
      {
        "as_number": "AS6461",
        "description": "Zayo Bandwidth",
        "country": "US"
      },
      {
        "as_number": "AS137",
        "description": "Consortium GARR",
        "country": "IT"
      },
      {
        "as_number": "AS54965",
        "description": "Polytechnic Institute of NYU",
        "country": "US"
      }
    ],
    "whois_response": "\n#\n# ARIN WHOIS data and services are subject to the Terms of Use\n# available at: https://www.arin.net/resources/registry/whois/tou/\n#\n# If you see inaccuracies in the results, please report at\n# https://www.arin.net/resources/registry/whois/inaccuracy_reporting/\n#\n# Copyright 1997-2025, American Registry for Internet Numbers, Ltd.\n#\n\n\nASNumber:       12\nASName:         NYU-DOMAIN\nASHandle:       AS12\nRegDate:        1984-07-05\nUpdated:        2023-05-25    \nRef:            https://rdap.arin.net/registry/autnum/12\n\n\nOrgName:        New York University\nOrgId:          NYU-Z\nAddress:        726 Broadway, 8th Floor - ITS\nCity:           New York\nStateProv:      NY\nPostalCode:     10003\nCountry:        US\nRegDate:        2023-05-15\nUpdated:        2023-05-15\nRef:            https://rdap.arin.net/registry/entity/NYU-Z\n\n\nOrgAbuseHandle: OIS9-ARIN\nOrgAbuseName:   Office of Information Security\nOrgAbusePhone:  +1-212-998-3333 \nOrgAbuseEmail:  abuse@nyu.edu\nOrgAbuseRef:    https://rdap.arin.net/registry/entity/OIS9-ARIN\n\nOrgNOCHandle: COSI-ARIN\nOrgNOCName:   Communications Operations Services - ITS\nOrgNOCPhone:  +1-212-998-3444 \nOrgNOCEmail:  noc-cosi-arin@nyu.edu\nOrgNOCRef:    https://rdap.arin.net/registry/entity/COSI-ARIN\n\nOrgTechHandle: COSI-ARIN\nOrgTechName:   Communications Operations Services - ITS\nOrgTechPhone:  +1-212-998-3444 \nOrgTechEmail:  noc-cosi-arin@nyu.edu\nOrgTechRef:    https://rdap.arin.net/registry/entity/COSI-ARIN\n\nRNOCHandle: COSI-ARIN\nRNOCName:   Communications Operations Services - ITS\nRNOCPhone:  +1-212-998-3444 \nRNOCEmail:  noc-cosi-arin@nyu.edu\nRNOCRef:    https://rdap.arin.net/registry/entity/COSI-ARIN\n\nRTechHandle: COSI-ARIN\nRTechName:   Communications Operations Services - ITS\nRTechPhone:  +1-212-998-3444 \nRTechEmail:  noc-cosi-arin@nyu.edu\nRTechRef:    https://rdap.arin.net/registry/entity/COSI-ARIN\n\n\n#\n# ARIN WHOIS data and services are subject to the Terms of Use\n# available at: https://www.arin.net/resources/registry/whois/tou/\n#\n# If you see inaccuracies in the results, please report at\n# https://www.arin.net/resources/registry/whois/inaccuracy_reporting/\n#\n# Copyright 1997-2025, American Registry for Internet Numbers, Ltd.\n#\n"
  }
}
```
## Timezone API Examples
This section provides usage examples of the `getTimezoneInfo()` method from the JavaScript SDK, showcasing how to fetch timezone and time-related data using different query types — IP address, latitude/longitude, timezone ID, IATA code, ICAO code, or UN/LOCODE.

For full API specifications, refer to the [Timezone API documentation](https://ipgeolocation.io/timezone-api.html#documentation-overview).

#### Get Timezone by IP Address

```javascript
const {APIClient, TimezoneAPI} = require('ip-geolocation-api-javascript-sdk');

const client = APIClient.instance;
client.authentications['ApiKeyAuth'].apiKey = 'YOUR_API_KEY';

const api = new TimezoneAPI();

api.getTimezoneInfo({
  ip: '8.8.8.8'
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling TimezoneAPI->getTimezoneInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
Sample Response:
```
{
  "ip": "8.8.8.8",
  "location": {
    "continent_code": "NA",
    "continent_name": "North America",
    "country_code2": "US",
    "country_code3": "USA",
    "country_name": "United States",
    "country_name_official": "United States of America",
    "is_eu": false,
    "state_prov": "California",
    "state_code": "US-CA",
    "district": "Santa Clara",
    "city": "Mountain View",
    "zipcode": "94043-1351",
    "latitude": "37.42240",
    "longitude": "-122.08421"
  },
  "time_zone": {
    "name": "America/Los_Angeles",
    "offset": -8,
    "offset_with_dst": -7,
    "date": "2025-07-17T00:00:00.000Z",
    "date_time": "2025-07-17 04:14:57",
    "date_time_txt": "Thursday, July 17, 2025 04:14:57",
    "date_time_wti": "Thu, 17 Jul 2025 04:14:57 -0700",
    "date_time_ymd": "2025-07-17T11:14:57.000Z",
    "date_time_unix": 1752750897.094,
    "time_24": "04:14:57",
    "time_12": "04:14:57 AM",
    "week": 29,
    "month": 7,
    "year": 2025,
    "year_abbr": "25",
    "is_dst": true,
    "dst_savings": 1,
    "dst_exists": true,
    "dst_start": {
      "utc_time": "2025-03-09 TIME 10",
      "duration": "+1H",
      "gap": true,
      "date_time_after": "2025-03-09 TIME 03",
      "date_time_before": "2025-03-09 TIME 02",
      "overlap": false
    },
    "dst_end": {
      "utc_time": "2025-11-02 TIME 09",
      "duration": "-1H",
      "gap": false,
      "date_time_after": "2025-11-02 TIME 01",
      "date_time_before": "2025-11-02 TIME 02",
      "overlap": true
    }
  }
}
```
### Get Timezone by Timezone Name
```javascript
api.getTimezoneInfo({
  tz: 'Europe/London'
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling TimezoneAPI->getTimezoneInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
Sample Response:
```
{
  "time_zone": {
    "name": "Europe/London",
    "offset": 0,
    "offset_with_dst": 1,
    "date": "2025-07-17T00:00:00.000Z",
    "date_time": "2025-07-17 12:17:33",
    "date_time_txt": "Thursday, July 17, 2025 12:17:33",
    "date_time_wti": "Thu, 17 Jul 2025 12:17:33 +0100",
    "date_time_ymd": "2025-07-17T11:17:33.000Z",
    "date_time_unix": 1752751053.019,
    "time_24": "12:17:33",
    "time_12": "12:17:33 PM",
    "week": 29,
    "month": 7,
    "year": 2025,
    "year_abbr": "25",
    "is_dst": true,
    "dst_savings": 1,
    "dst_exists": true,
    "dst_start": {
      "utc_time": "2025-03-30 TIME 01",
      "duration": "+1H",
      "gap": true,
      "date_time_after": "2025-03-30 TIME 02",
      "date_time_before": "2025-03-30 TIME 01",
      "overlap": false
    },
    "dst_end": {
      "utc_time": "2025-10-26 TIME 01",
      "duration": "-1H",
      "gap": false,
      "date_time_after": "2025-10-26 TIME 01",
      "date_time_before": "2025-10-26 TIME 02",
      "overlap": true
    }
  }
}
```
### Get Timezone from Any Address
```javascript
api.getTimezoneInfo({
  location: 'Munich, Germany'
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling TimezoneAPI->getTimezoneInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
Sample Response:
```
{
  "location": {
    "location_string": "Munich, Germany",
    "country_name": "Germany",
    "state_prov": "Bavaria",
    "city": "Munich",
    "locality": "",
    "latitude": "48.13711",
    "longitude": "11.57538"
  },
  "time_zone": {
    "name": "Europe/Berlin",
    "offset": 1,
    "offset_with_dst": 2,
    "date": "2025-07-17T00:00:00.000Z",
    "date_time": "2025-07-17 13:19:49",
    "date_time_txt": "Thursday, July 17, 2025 13:19:49",
    "date_time_wti": "Thu, 17 Jul 2025 13:19:49 +0200",
    "date_time_ymd": "2025-07-17T11:19:49.000Z",
    "date_time_unix": 1752751189.372,
    "time_24": "13:19:49",
    "time_12": "01:19:49 PM",
    "week": 29,
    "month": 7,
    "year": 2025,
    "year_abbr": "25",
    "is_dst": true,
    "dst_savings": 1,
    "dst_exists": true,
    "dst_start": {
      "utc_time": "2025-03-30 TIME 01",
      "duration": "+1H",
      "gap": true,
      "date_time_after": "2025-03-30 TIME 03",
      "date_time_before": "2025-03-30 TIME 02",
      "overlap": false
    },
    "dst_end": {
      "utc_time": "2025-10-26 TIME 01",
      "duration": "-1H",
      "gap": false,
      "date_time_after": "2025-10-26 TIME 02",
      "date_time_before": "2025-10-26 TIME 03",
      "overlap": true
    }
  }
}
```
### Get Timezone from Location Coordinates
```javascript
api.getTimezoneInfo({
  lat: 48.8566,
  _long: 2.3522
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling TimezoneAPI->getTimezoneInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
Sample Response:
```
{
  "time_zone": {
    "name": "Europe/Paris",
    "offset": 1,
    "offset_with_dst": 2,
    "date": "2025-07-17T00:00:00.000Z",
    "date_time": "2025-07-17 13:31:58",
    "date_time_txt": "Thursday, July 17, 2025 13:31:58",
    "date_time_wti": "Thu, 17 Jul 2025 13:31:58 +0200",
    "date_time_ymd": "2025-07-17T11:31:58.000Z",
    "date_time_unix": 1752751918.965,
    "time_24": "13:31:58",
    "time_12": "01:31:58 PM",
    "week": 29,
    "month": 7,
    "year": 2025,
    "year_abbr": "25",
    "is_dst": true,
    "dst_savings": 1,
    "dst_exists": true,
    "dst_start": {
      "utc_time": "2025-03-30 TIME 01",
      "duration": "+1H",
      "gap": true,
      "date_time_after": "2025-03-30 TIME 03",
      "date_time_before": "2025-03-30 TIME 02",
      "overlap": false
    },
    "dst_end": {
      "utc_time": "2025-10-26 TIME 01",
      "duration": "-1H",
      "gap": false,
      "date_time_after": "2025-10-26 TIME 02",
      "date_time_before": "2025-10-26 TIME 03",
      "overlap": true
    }
  }
}
```
### Get Timezone and Airport Details from IATA Code
```javascript
api.getTimezoneInfo({
  iataDode: 'ZRH'
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling TimezoneAPI->getTimezoneInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});

```
Sample Response:
```
{
  "airport_details": {
    "type": "large_airport",
    "name": "Zurich Airport",
    "latitude": "47.45806",
    "longitude": "8.54806",
    "elevation_ft": 1417,
    "continent_code": "EU",
    "country_code": "CH",
    "state_code": "CH-ZH",
    "city": "Zurich",
    "iata_code": "ZRH",
    "icao_code": "LSZH",
    "faa_code": ""
  },
  "time_zone": {
    "name": "Europe/Zurich",
    "offset": 1,
    "offset_with_dst": 2,
    "date": "2025-07-17T00:00:00.000Z",
    "date_time": "2025-07-17 13:43:56",
    "date_time_txt": "Thursday, July 17, 2025 13:43:56",
    "date_time_wti": "Thu, 17 Jul 2025 13:43:56 +0200",
    "date_time_ymd": "2025-07-17T11:43:56.000Z",
    "date_time_unix": 1752752636.652,
    "time_24": "13:43:56",
    "time_12": "01:43:56 PM",
    "week": 29,
    "month": 7,
    "year": 2025,
    "year_abbr": "25",
    "is_dst": true,
    "dst_savings": 1,
    "dst_exists": true,
    "dst_start": {
      "utc_time": "2025-03-30 TIME 01",
      "duration": "+1H",
      "gap": true,
      "date_time_after": "2025-03-30 TIME 03",
      "date_time_before": "2025-03-30 TIME 02",
      "overlap": false
    },
    "dst_end": {
      "utc_time": "2025-10-26 TIME 01",
      "duration": "-1H",
      "gap": false,
      "date_time_after": "2025-10-26 TIME 02",
      "date_time_before": "2025-10-26 TIME 03",
      "overlap": true
    }
  }
}
```
You can also fetch Airport Details and Timezone using any ICAO code by passing the `icaoCode` parameter.

### Get Timezone and City Details from UN/LOCODE
```javascript
api.getTimezoneInfo({
  loCode: 'ESBCN'
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling TimezoneAPI->getTimezoneInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```

Sample Response:
```
{
  "lo_code_details": {
    "lo_code": "ESBCN",
    "city": "Barcelona",
    "state_code": "",
    "country_code": "ES",
    "country_name": "",
    "location_type": "Port, Rail Terminal, Road Terminal, Airport, Postal Exchange",
    "latitude": "41.38289",
    "longitude": "2.17743"
  },
  "time_zone": {
    "name": "Europe/Madrid",
    "offset": 1,
    "offset_with_dst": 2,
    "date": "2025-07-17T00:00:00.000Z",
    "date_time": "2025-07-17 14:59:43",
    "date_time_txt": "Thursday, July 17, 2025 14:59:43",
    "date_time_wti": "Thu, 17 Jul 2025 14:59:43 +0200",
    "date_time_ymd": "2025-07-17T12:59:43.000Z",
    "date_time_unix": 1752757183.827,
    "time_24": "14:59:43",
    "time_12": "02:59:43 PM",
    "week": 29,
    "month": 7,
    "year": 2025,
    "year_abbr": "25",
    "is_dst": true,
    "dst_savings": 1,
    "dst_exists": true,
    "dst_start": {
      "utc_time": "2025-03-30 TIME 01",
      "duration": "+1H",
      "gap": true,
      "date_time_after": "2025-03-30 TIME 03",
      "date_time_before": "2025-03-30 TIME 02",
      "overlap": false
    },
    "dst_end": {
      "utc_time": "2025-10-26 TIME 01",
      "duration": "-1H",
      "gap": false,
      "date_time_after": "2025-10-26 TIME 02",
      "date_time_before": "2025-10-26 TIME 03",
      "overlap": true
    }
  }
}
```

## Timezone Converter API Examples
This section provides usage examples of the `convertTimeBetweenTimezones()` method from the SDK. The Timezone Converter API allows you to convert a specific time from one timezone to another using timezone identifiers and optional date/time inputs.

For more details, refer to the [Timezone Converter API documentation](https://ipgeolocation.io/timezone-api.html#convert-time-bw-time-zones).

### Convert Current Time from One Timezone to Another
```javascript
const { TimeConversionAPI, APIClient } = require('ip-geolocation-api-javascript-sdk');

const apiClient = new APIClient();
const api = new TimeConversionAPI(apiClient);

const opts = {
  time: "2024-12-08 11:00",
  tzFrom: "America/New_York",
  tzTo: "Asia/Tokyo"
};

api.convertTimeBetweenTimezones(opts, (error, data, response) => {
  if (error) {
    console.error('Exception when calling TimeConversionAPI->convertTimeBetweenTimezones:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});

```
Sample Response:
```
{
  original_time: 2024-12-08T06:00:00.000Z,
  converted_time: 2024-12-08T20:00:00.000Z,
  diff_hour: 14,
  diff_min: 840
}
```
You can convert time from any timezone to another using:

- **Coordinate** (latitude & longitude)
- **Locations** (city or address)
- **IATA codes**
- **ICAO codes**
- **UN/LOCODEs**

Simply provide the appropriate source and target parameters in the method.

## User Agent API Examples

This section provides usage examples of the `getUserAgentDetails()` and `parseBulkUserAgentStrings()` methods from the JavaScript SDK. The **User Agent API** extracts and classifies information from user agent strings, including browser, engine, device, OS, and type metadata.

For full explanation, visit the [User Agent API documentation](https://ipgeolocation.io/user-agent-api.html#documentation-overview).

### Parse a Basic User Agent String

```javascript
const  { UserAgentAPI } = require('ip-geolocation-api-javascript-sdk');
const api = new UserAgentAPI();

const opts = {
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
};

api.getUserAgentDetails(opts, (error, data, response) => {
  if (error) {
    console.error('Exception when calling UserAgentAPI->getUserAgentDetails:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});

```
Sample Response:
```
{
  "user_agent_string": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  "name": "Chrome",
  "type": "Browser",
  "version": "125",
  "version_major": "125",
  "device": {
    "name": "Desktop",
    "type": "Desktop",
    "brand": "Unknown",
    "cpu": "Intel x86_64"
  },
  "engine": {
    "name": "Blink",
    "type": "Browser",
    "version": "125",
    "version_major": "125"
  },
  "operating_system": {
    "name": "Windows NT",
    "type": "Desktop",
    "version": "??",
    "version_major": "??",
    "build": "??"
  }
}
```
> **Note**: If you don’t pass any `userAgent` string, the API will return data of the device's current User-Agent automatically.

## Bulk User Agent Parsing Example
The SDK also supports bulk User Agent parsing using the `parseBulkUserAgentStrings()` method. This allows parsing multiple user agent strings in a single request. All fields available in single-user-agent parsing are returned per entry.

**Note**: Bulk User Agent API is only available for paid plans
```javascript
const { UserAgentAPI } = require('ip-geolocation-api-javascript-sdk');
const api = new UserAgentAPI();

const requestBody = {
  ua_strings: [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
  ]
};

const opts = {
  BulkUserAgentRequest: requestBody
};

apiInstance.parseBulkUserAgentStrings(opts, (error, data, response) => {
  if (error) {
    console.error('Exception when calling UserAgentAPI->parseBulkUserAgentStrings:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
## Astronomy API Examples
This section provides usage examples of the `getAstronomyDetails()` method from the SDK, allowing developers to fetch **sun and moon timings** and **position data** based on **coordinates**, **IP**, or **location string**.

Refer to the official [Astronomy API documentation](https://ipgeolocation.io/astronomy-api.html#documentation-overview) for more details.

### Astronomy by Coordinates
```javascript
const { APIClient, AstronomyAPI } = require('ip-geolocation-api-javascript-sdk');

const client = new APIClient('YOUR_API_KEY');
const api = new AstronomyAPI(client);

const options = {
  lat: '40.7128',
  _long: '-74.0060'
};

api.getAstronomyDetails(options, (error, data, response) => {
  if (error) console.error('Exception when calling AstronomyAPI->getAstronomyDetails:', error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "location": {
    "country_name": "",
    "state_prov": "New York",
    "city": "New York",
    "locality": "",
    "latitude": "40.71280",
    "longitude": "-74.00600"
  },
  "astronomy": {
    "date": "2025-07-17T00:00:00.000Z",
    "current_time": "11:31:03.873",
    "sunrise": "05:39",
    "sunset": "20:25",
    "sun_status": "-",
    "solar_noon": "13:02",
    "day_length": "14:45",
    "sun_altitude": 62.43958294106399,
    "sun_distance": 152059278.33947453,
    "sun_azimuth": 128.58389229977814,
    "moonrise": "-:-",
    "moonset": "13:04",
    "moon_status": "-",
    "moon_altitude": 16.83815539603158,
    "moon_distance": 371421.6510993104,
    "moon_azimuth": 269.32094886584605,
    "moon_parallactic_angle": 50.397377251512694,
    "moon_phase": "LAST_QUARTER",
    "moon_illumination_percentage": "-54.35",
    "moon_angle": 265.00460865965664
  }
}
```
### Astronomy by IP Address
```javascript
const options = {
  ip: '8.8.8.8'
};

api.getAstronomyDetails(options, (error, data, response) => {
  if (error) console.error('Exception when calling AstronomyAPI->getAstronomyDetails:', error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "8.8.8.8",
  "location": {
    "continent_code": "NA",
    "continent_name": "North America",
    "country_code2": "US",
    "country_code3": "USA",
    "country_name": "United States",
    "country_name_official": "United States of America",
    "is_eu": false,
    "state_prov": "California",
    "state_code": "US-CA",
    "district": "Santa Clara",
    "city": "Mountain View",
    "locality": "Charleston Terrace",
    "zipcode": "94043-1351",
    "latitude": "37.42240",
    "longitude": "-122.08421"
  },
  "astronomy": {
    "date": "2025-07-17T00:00:00.000Z",
    "current_time": "08:34:23.692",
    "sunrise": "06:00",
    "sunset": "20:28",
    "sun_status": "-",
    "solar_noon": "13:14",
    "day_length": "14:27",
    "sun_altitude": 28.120272662905446,
    "sun_distance": 152059278.33947453,
    "sun_azimuth": 84.00915469369778,
    "moonrise": "-:-",
    "moonset": "13:22",
    "moon_status": "-",
    "moon_altitude": 52.17860291184627,
    "moon_distance": 371417.4136271126,
    "moon_azimuth": 231.9946220147715,
    "moon_parallactic_angle": 39.506402785828534,
    "moon_phase": "LAST_QUARTER",
    "moon_illumination_percentage": "-54.33",
    "moon_angle": 265.03491087395025
  }
}
```
### Astronomy by Location String
```javascript
const options = {
  location: 'Milan, Italy'
};

api.getAstronomyDetails(options, (error, data, response) => {
  if (error) console.error('Exception when calling AstronomyAPI->getAstronomyDetails:', error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "location": {
    "location_string": "Milan, Italy",
    "country_name": "Italy",
    "state_prov": "Lombardy",
    "city": "Milan",
    "locality": "",
    "latitude": "45.46419",
    "longitude": "9.18963"
  },
  "astronomy": {
    "date": "2025-07-17T00:00:00.000Z",
    "current_time": "17:36:42.745",
    "sunrise": "05:49",
    "sunset": "21:09",
    "sun_status": "-",
    "solar_noon": "13:29",
    "day_length": "15:20",
    "sun_altitude": 34.4375529178136,
    "sun_distance": 152059278.33947453,
    "sun_azimuth": 265.67875410561135,
    "moonrise": "-:-",
    "moonset": "13:22",
    "moon_status": "-",
    "moon_altitude": -31.660729063999725,
    "moon_distance": 371414.46618635,
    "moon_azimuth": 338.20944924001776,
    "moon_parallactic_angle": 15.348218557957148,
    "moon_phase": "LAST_QUARTER",
    "moon_illumination_percentage": "-54.31",
    "moon_angle": 265.0559985041169
  }
}
```

### Astronomy for Specific Date
```javascript
const options = {
  lat: '-27.47',
  _long: '153.02',
  date: '2025-01-01'
};

api.getAstronomyDetails(options, (error, data, response) => {
  if (error) console.error('Exception when calling AstronomyAPI->getAstronomyDetails:', error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "location": {
    "country_name": "Australia",
    "state_prov": "Queensland",
    "city": "Brisbane",
    "locality": "Brisbane",
    "latitude": "-27.47000",
    "longitude": "153.02000"
  },
  "astronomy": {
    "date": "2025-01-01T00:00:00.000Z",
    "current_time": "01:59:24.270",
    "sunrise": "06:36",
    "sunset": "17:12",
    "sun_status": "-",
    "solar_noon": "11:54",
    "day_length": "10:36",
    "sun_altitude": -30.783777296483137,
    "sun_distance": 147102938.8803657,
    "sun_azimuth": 145.36586311659204,
    "moonrise": "-:-",
    "moonset": "11:07",
    "moon_status": "-",
    "moon_altitude": -31.941455787263955,
    "moon_distance": 383112.40264394664,
    "moon_azimuth": 157.15022252570407,
    "moon_parallactic_angle": -157.30919347190755,
    "moon_phase": "NEW_MOON",
    "moon_illumination_percentage": "0.61",
    "moon_angle": 8.949588505035496
  }
}
```
### Astronomy in Different Language
You can also get Astronomy Data in other languages. This feature is only available for paid subscriptions.
```javascript
const options = {
  ip: '1.1.1.1',
  lang: 'fr'
};

api.getAstronomyDetails(options, (error, data, response) => {
  if (error) console.error('Exception when calling AstronomyAPI->getAstronomyDetails:', error);
  else console.log(JSON.stringify(data, null, 2));
});
```
Sample Response:
```
{
  "ip": "1.1.1.1",
  "location": {
    "continent_code": "OC",
    "continent_name": "Océanie",
    "country_code2": "AU",
    "country_code3": "AUS",
    "country_name": "",
    "country_name_official": "",
    "is_eu": false,
    "state_prov": "Queensland",
    "state_code": "AU-QLD",
    "district": "Brisbane",
    "city": "South Brisbane",
    "locality": "",
    "zipcode": "4101",
    "latitude": "-27.47306",
    "longitude": "153.01421"
  },
  "astronomy": {
    "date": "2025-07-18T00:00:00.000Z",
    "current_time": "02:17:43.130",
    "sunrise": "06:36",
    "sunset": "17:12",
    "sun_status": "-",
    "solar_noon": "11:54",
    "day_length": "10:36",
    "sun_altitude": -56.78957396734283,
    "sun_distance": 152051279.3245535,
    "sun_azimuth": 93.131233666355,
    "moonrise": "-:-",
    "moonset": "11:07",
    "moon_status": "-",
    "moon_altitude": 32.18279210841823,
    "moon_distance": 371362.504253253,
    "moon_azimuth": 55.18965546016517,
    "moon_parallactic_angle": -132.18299046742257,
    "moon_phase": "LAST_QUARTER",
    "moon_illumination_percentage": "-53.98",
    "moon_angle": 265.4291849088062
  }
}
```

## Abuse Contact API Examples
This section demonstrates how to use the `getAbuseContactInfo()` method of the SDK. This API helps security teams, hosting providers, and compliance professionals quickly identify the correct abuse reporting contacts for any IPv4 or IPv6 address.

You can retrieve data like the responsible organization, role, contact emails, phone numbers, and address to take appropriate mitigation action against abusive or malicious activity.

**Note**: Abuse Contact API is only available in the **Advanced Plan**.

Refer to the official [Abuse Contact API documentation](https://ipgeolocation.io/ip-abuse-contact-api.html#documentation-overview) for details on all available fields.

### Lookup Abuse Contact by IP
```javascript
const { APIClient, AbuseContactAPI } = require('ip-geolocation-api-javascript-sdk');

const client = APIClient.instance;
client.authentications['ApiKeyAuth'].apiKey = 'YOUR_API_KEY';

const api = new AbuseContactAPI(client);

api.getAbuseContactInfo({
  ip: '1.0.0.0'
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling AbuseContactAPI->getAbuseContactInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
Sample Response:
```
{
  "ip": "1.0.0.0",
  "abuse": {
    "route": "1.0.0.0/24",
    "country": "AU",
    "handle": "IRT-APNICRANDNET-AU",
    "name": "IRT-APNICRANDNET-AU",
    "organization": "",
    "role": "abuse",
    "kind": "group",
    "address": "PO Box 3646\nSouth Brisbane, QLD 4101\nAustralia",
    "emails": [
      "helpdesk@apnic.net"
    ],
    "phone_numbers": [
      "+61 7 3858 3100"
    ]
  }
}
```
### Lookup Abuse Contact with Specific Fields
```javascript
api.getAbuseContactInfo({
  ip: '1.2.3.4',
  fields: 'abuse.role,abuse.emails'
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling AbuseContactAPI->getAbuseContactInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
Sample Response:
```
{
  "ip": "1.2.3.4",
  "abuse": {
    "role": "abuse",
    "emails": [
      "helpdesk@apnic.net"
    ]
  }
}
```
### Lookup Abuse Contact while Excluding Fields
```javascript
api.getAbuseContactInfo({
  ip: '9.9.9.9',
  excludes: 'abuse.handle,abuse.emails'
}, (error, data, response) => {
  if (error) {
    console.error('Exception when calling AbuseContactAPI->getAbuseContactInfo:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
```
Sample Response:
```
{
  "ip": "9.9.9.9",
  "abuse": {
    "route": "9.9.9.0/24",
    "country": "",
    "name": "Quad9 Abuse",
    "organization": "Quad9 Abuse",
    "role": "abuse",
    "kind": "group",
    "address": "1442 A Walnut Street Ste 501\nBerkeley\nCA\n94709\nUnited States",
    "phone_numbers": [
      "+1-415-831-3129"
    ]
  }
}
```





## Models

 - [ASNConnection](docs/ASNConnection.md)
 - [ASNResponse](docs/ASNResponse.md)
 - [ASNDetails](docs/ASNDetails.md)
 - [Abuse](docs/Abuse.md)
 - [AbuseResponse](docs/AbuseResponse.md)
 - [Astronomy](docs/Astronomy.md)
 - [AstronomyResponse](docs/AstronomyResponse.md)
 - [CountryMetadata](docs/CountryMetadata.md)
 - [Currency](docs/Currency.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [GeolocationResponse](docs/GeolocationResponse.md)
 - [BulkIPGeolocationResponse](docs/BulkIPGeolocationResponse.md)
 - [BulkIPGeolocationResponse1](docs/BulkIPGeolocationResponse1.md)
 - [BulkIPRequest](docs/BulkIPRequest.md)
 - [BulkIPSecurityResponse](docs/BulkIPSecurityResponse.md)
 - [BulkIPSecurityResponse1](docs/BulkIPSecurityResponse1.md)
 - [Location](docs/Location.md)
 - [LocationMinimal](docs/LocationMinimal.md)
 - [Network](docs/Network.md)
 - [NetworkAsn](docs/NetworkAsn.md)
 - [NetworkCompany](docs/NetworkCompany.md)
 - [NetworkMinimal](docs/NetworkMinimal.md)
 - [NetworkMinimalAsn](docs/NetworkMinimalAsn.md)
 - [NetworkMinimalCompany](docs/NetworkMinimalCompany.md)
 - [BulkUserAgentRequest](docs/BulkUserAgentRequest.md)
 - [UserAgentRequest](docs/UserAgentRequest.md)
 - [Security](docs/Security.md)
 - [SecurityAPIResponse](docs/SecurityAPIResponse.md)
 - [TimeConversionResponse](docs/TimeConversionResponse.md)
 - [TimeZone](docs/TimeZone.md)
 - [TimeZoneDetailedResponse](docs/TimeZoneDetailedResponse.md)
 - [TimeZoneDstEnd](docs/TimeZoneDstEnd.md)
 - [TimeZoneDstStart](docs/TimeZoneDstStart.md)
 - [TimezoneAirport](docs/TimezoneAirport.md)
 - [TimezoneDetail](docs/TimezoneDetail.md)
 - [TimezoneDetailDstEnd](docs/TimezoneDetailDstEnd.md)
 - [TimezoneDetailDstStart](docs/TimezoneDetailDstStart.md)
 - [TimezoneLocation](docs/TimezoneLocation.md)
 - [TimezoneLocode](docs/TimezoneLocode.md)
 - [UserAgentData](docs/UserAgentData.md)
 - [UserAgentDataDevice](docs/UserAgentDataDevice.md)
 - [UserAgentDataEngine](docs/UserAgentDataEngine.md)
 - [UserAgentDataOperatingSystem](docs/UserAgentDataOperatingSystem.md)
