# IP Geolocation API JavaScript SDK

## Overview
The official **JavaScript Library** for **[IPGeolocation.io](https://ipgeolocation.io)**'s set of APIs, provides a quick, developer friendly way to access IP Location, Security, Timezone, Astronomy, ASN, Abuse Contact, and useragent data. Lookup your own IP or provide any IPv4, IPv6 or domain name to get structured results in JavaScript (JS), without the need for manual HTTP requests handling.

- [IP Location API](https://ipgeolocation.io/ip-location-api.html): Get all-in-one unified solution for **location** (city, locality, state, country, etc.), **currency**, **network** (AS number, ASN name, organization, asn type, date of allocation, company/ISP name, company type, company domain), **timezone** , **useragent** string parsing, **security** (threat score, is_tor, is_bot, proxy_provider, cloud_provider), and **abuse contact** (route/CIDR network, country, address, email, phone numbers) information.
- [IP Security API](https://ipgeolocation.io/ip-security-api.html): Get security, network, location, hostname, timezone and useragent parsing.
- [ASN API](https://ipgeolocation.io/asn-api.html): Get ASN details along with peers, upstreams, downstreams, routes, and raw WHOIS.
- [Abuse Contact API](https://ipgeolocation.io/ip-abuse-contact-api.html): Get abuse emails, phone numbers, kind, organization, route/CIDR network and country.
- [Astronomy API](https://ipgeolocation.io/astronomy-api.html): Get sunrise, sunset, moonrise, moonset, moon phases with precise twilight period times in combination with location information.
- [Timezone API](https://ipgeolocation.io/timezone-api.html): Get timezone name, multiple time formats, daylight saving status and its details along with location information.
- [Timezone Convert API](https://ipgeolocation.io/timezone-api.html): Convert time between timezone names, geo coordinates, location addresses, IATA codes, ICAO codes, or UN/LOCODE.
- [User Agent API](https://ipgeolocation.io/user-agent-api.html): Get browser, Operating System, and device info from single or multiple Useragent string parsing.

This library aims to empower developers to integrate threat intelligence, personalization, fraud prevention, compliance, and analytics features directly into web based applications. Whether you're enriching signup forms with ip geolocation data, localizing content, embedding threat intelligence in back-end systems, or converting time zones and currencies, the library ensures seamless, scalable integration with IPGeolocation.io’s global API infrastructure.

Based on:
- API version: 2.0

**Official Release:**
- Available on [![npm version](https://img.shields.io/npm/v/ip-geolocation-api-javascript-sdk?color=brightgreen)](https://www.npmjs.com/package/ip-geolocation-api-javascript-sdk)
- Source Code: [**GitHub Repository**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk)

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
   - [Using NPM](#using-npm)
   - [Using Yarn](#using-yarn)
   - [Manual Installation](#manual-installation)
3. [API Plan Tiers and Documentation](#api-plan-tiers-and-documentation)
4. [API Endpoints](#api-endpoints)
5. [Fields and Methods Availability](#fields-and-methods-availability)
6. [Authentication Setup](#authentication-setup)
   - [How to Get Your API Key](#how-to-get-your-api-key)
   - [ApiKeyAuth](#apikeyauth)
   - [Request Origin - keyless access](#request-origin---keyless-access)
7. [IP Geolocation Examples](#ip-geolocation-examples)
   - [Developer (Free) Plan Examples](#developer-free-plan-examples)
   - [Standard Plan Examples](#standard-plan-examples)
   - [Advanced Plan Examples](#advanced-plan-example)
   - [Bulk IP Geolocation Example](#bulk-ip-geolocation-examples)
8. [IP Security Examples](#ip-security-examples)
   - [Get Security API Default Fields](#get-security-api-default-fields)
   - [Include Multiple Optional Fields](#include-multiple-optional-fields)
   - [Request with Field Filtering](#request-with-field-filtering)
   - [Bulk IP Security Lookup](#bulk-ip-security-lookup)
9. [ASN API Examples](#asn-api-examples)
   - [Get ASN Information by IP Address](#get-asn-information-by-ip-address)
   - [Get ASN Information by ASN Number](#get-asn-information-by-asn-number)
   - [Combine All objects using Include](#combine-all-objects-using-include)
10. [Abuse Contact API Examples](#abuse-contact-api-examples)
    - [Lookup Abuse Contact by IP](#lookup-abuse-contact-by-ip)
    - [Lookup Abuse Contact with Specific Fields](#lookup-abuse-contact-with-specific-fields)
    - [Lookup Abuse Contact while Excluding Fields](#lookup-abuse-contact-while-excluding-fields)
11. [Timezone API Examples](#timezone-api-examples)
    - [Get Timezone by IP Address](#get-timezone-by-ip-address)
    - [Get Timezone by Timezone Name](#get-timezone-by-timezone-name)
    - [Get Timezone from Any Address](#get-timezone-from-any-address)
    - [Get Timezone from Location Coordinates](#get-timezone-from-location-coordinates)
    - [Get Timezone and Airport Details from IATA Code](#get-timezone-and-airport-details-from-iata-code)
    - [Get Timezone and City Details from UN/LOCODE](#get-timezone-and-city-details-from-unlocode)
12. [Timezone Converter Examples](#timezone-converter-api-examples)
    - [Convert Current Time from One Timezone to Another](#convert-current-time-from-one-timezone-to-another)
13. [User Agent API Examples](#user-agent-api-examples)
    - [Parse a Basic User Agent String](#parse-a-basic-user-agent-string)
    - [Bulk User Agent Parsing Example](#bulk-user-agent-parsing-example)
14. [Astronomy API Examples](#astronomy-api-examples)
    - [Lookup Astronomy by Coordinates](#lookup-astronomy-api-by-coordinates)
    - [Lookup Astronomy by IP Address](#lookup-astronomy-api-by-ip-address)
    - [Lookup Astronomy by Location String](#lookup-astronomy-api-by-location-string)
    - [Lookup Astronomy for Specific Date](#lookup-astronomy-api-for-specific-date)
    - [Lookup Location Info in Different Language](#lookup-location-info-in-different-language)
15. [Models Documentation](#models)


## Requirements
- NPM or Yarn Package manager 
- API Key from [IPGeolocation.io](https://ipgeolocation.io)

## Installation
### Using NPM

Install the SDK directly from NPM [![npm version](https://img.shields.io/npm/v/ip-geolocation-api-javascript-sdk?color=brightgreen)](https://www.npmjs.com/package/ip-geolocation-api-javascript-sdk):
```bash
npm install ip-geolocation-api-javascript-sdk
```

### Using Yarn
Alternatively, if you use Yarn:
```bash
yarn add ip-geolocation-api-javascript-sdk
```

### Manual Installation
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
## API Plan Tiers and Documentation

The documentation below corresponds to the four available API tier plans:

- **Developer Plan** (Free): [Full Documentation](https://ipgeolocation.io/ip-location-api.html#Free)
- **Standard Plan**: [Full Documentation](https://ipgeolocation.io/ip-location-api.html#Standard)
- **Advance Plan**: [Full Documentation](https://ipgeolocation.io/ip-location-api.html#Advance)
- **Security Plan**: [Full Documentation](https://ipgeolocation.io/ip-security-api.html#documentation-overview)

For a detailed comparison of what each plan offers, visit the [Pricing Page](https://ipgeolocation.io/pricing.html).

## API Endpoints

All URIs are relative to *https://api.ipgeolocation.io/v2*

| Class               | Method                                                                                                                                                                | HTTP request              | Description                                                |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|------------------------------------------------------------|
| *IPGeolocationAPI*  | [**getIpGeolocation**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/IPGeolocationAPI.md#getipgeolocation)                        | **GET** /ipgeo            | Get geolocation data for a single IP address               |
| *IPGeolocationAPI*  | [**getBulkIpGeolocation**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/IPGeolocationAPI.md#getbulkipgeolocation)                | **POST** /ipgeo-bulk      | Get geolocation data for multiple IP addresses             |
| *IPSecurityAPI*     | [**getIpSecurityInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/IPSecurityAPI.md#getipsecurityinfo)                         | **GET** /security         | Get threat intelligence for a single IP address            |
| *IPSecurityAPI*     | [**getBulkIpSecurityInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/IPSecurityAPI.md#getbulkipsecurityinfo)                 | **POST** /security-bulk   | Get threat intelligence for multiple IP addresses          |
| *ASNLookupAPI*      | [**getAsnInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/ASNLookupAPI.md#getasninfo)                                        | **GET** /asn              | Get details of any ASN number                              |
| *AbuseContactAPI*   | [**getAbuseContactInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AbuseContactAPI.md#getabusecontactinfo)                   | **GET** /abuse            | Retrieve abuse contact data for an IP address              |
| *AstronomyAPI*      | [**getAstronomyDetails**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AstronomyAPI.md#getastronomydetails)                      | **GET** /astronomy        | Get sun and moon timings and positions                     |
| *TimezoneAPI*       | [**getTimezoneInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimezoneAPI.md#gettimezoneinfo)                               | **GET** /timezone         | Get timezone information based on IP, coordinates, or name |
| *TimeConversionAPI* | [**convertTimeBetweenTimezones**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimeConversionAPI.md#converttimebetweentimezones) | **GET** /timezone/convert | Convert time from one timezone to another                  |
| *UserAgentAPI*      | [**getUserAgentDetails**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentAPI.md#getuseragentdetails)                      | **GET** /user-agent       | Parse a single user-agent string                           |
| *UserAgentAPI*      | [**parseBulkUserAgentStrings**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentAPI.md#parsebulkuseragentstrings)          | **POST** /user-agent-bulk | Parse multiple user-agent strings                          |
| *UserAgentAPI*      | [**parseUserAgentString**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentAPI.md#parseuseragentstring)                    | **POST** /user-agent      | Alternate method to parse a single user-agent string       |

## Fields and Methods Availability
IP Geolocation offers four plans from billing point of view: **Free, Standard, Security, Advance**. The availability of each method calling from the respective class, over all plans are presented below.

| Class               | Method                                                                                                                                                                  | Free | Standard | Security | Advance |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----:|:--------:|:--------:|:-------:|
| *IPGeolocationAPI*  | [**getIpGeolocation**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/IPGeolocationAPI.md#getipgeolocation)                          |  ✔   |    ✔     |    ✖     |    ✔    |
| *IPGeolocationAPI*  | [**getBulkIpGeolocation**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/IPGeolocationAPI.md#getbulkipgeolocation)                  |  ✖   |    ✔     |    ✖     |    ✔    |
| *IPSecurityAPI*     | [**getIpSecurityInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/IPSecurityAPI.md#getipsecurityinfo)                           |  ✖   |    ✖     |    ✔     |    ✖    |
| *IPSecurityAPI*     | [**getBulkIpSecurityInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/IPSecurityAPI.md#getbulkipsecurityinfo)                   |  ✖   |    ✖     |    ✔     |    ✖    |
| *ASNLookupAPI*      | [**getAsnInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/ASNLookupAPI.md#getasninfo)                                          |  ✖   |    ✖     |    ✖     |    ✔    |
| *AbuseContactAPI*   | [**getAbuseContactInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AbuseContactAPI.md#getabusecontactinfo)                     |  ✖   |    ✖     |    ✖     |    ✔    |
| *AstronomyAPI*      | [**getAstronomyDetails**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AstronomyAPI.md#getastronomydetails)                        |  ✔   |    ✔     |    ✔     |    ✔    |
| *TimezoneAPI*       | [**getTimezoneInfo**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimezoneAPI.md#gettimezoneinfo)                                 |  ✔   |    ✔     |    ✔     |    ✔    |
| *TimeConversionAPI* | [**convertTimeBetweenTimezones**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimeConversionAPI.md#converttimebetweentimezones)   |  ✔   |    ✔     |    ✔     |    ✔    |
| *UserAgentAPI*      | [**getUserAgentDetails**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentAPI.md#getuseragentdetails)                        |  ✔   |    ✔     |    ✔     |    ✔    |
| *UserAgentAPI*      | [**parseBulkUserAgentStrings**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentAPI.md#parsebulkuseragentstrings)            |  ✔   |    ✔     |    ✔     |    ✔    |
| *UserAgentAPI*      | [**parseUserAgentString**](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentAPI.md#parseuseragentstring)                      |  ✖   |    ✔     |    ✔     |    ✔    |

> [!TIP]
> The availability of fields in every API endpoint across all API plans is provided in the **_Reference Table_** within each respective API Documentation. e.g., for IPGeolocationApi, please visit [https://ipgeolocation.io/ip-location-api.html#reference-to-ipgeolocation-api-response](https://ipgeolocation.io/ip-location-api.html#reference-to-ipgeolocation-api-response).

## Authentication Setup
To authenticate API requests, you'll need an API key from [ipgeolocation.io](https://ipgeolocation.io). 

### How to Get Your API Key

1. **Sign up** here: [https://app.ipgeolocation.io/signup](https://app.ipgeolocation.io/signup)
2. **(optional)** Verify your email, if you signed up using email.
3. **Log in** to your account: [https://app.ipgeolocation.io/login](https://app.ipgeolocation.io/login)
4. After logging in, navigate to your **Dashboard** to find your API key: [https://app.ipgeolocation.io/dashboard](https://app.ipgeolocation.io/dashboard)

<a id="ApiKeyAuth"></a>
### ApiKeyAuth

Once you have the key, initialize the SDK client with it:
```javascript
const { APIClient } = require('ip-geolocation-api-javascript-sdk');

const client = APIClient.instance;
client.authentications['ApiKeyAuth'].apiKey = 'YOUR_API_KEY_HERE';
```

### Request Origin - keyless access
If you don't set an API key, the IPGeolocation API can still authenticate your request using **request origin**.
This is useful if:
- You're using the SDK from a **browser** or **server with allowed referrer/IP**
- Your keyless usage is enabled in the dashboard, by adding your domain name as Request Origin in `Add API key` section.

See [this section](https://ipgeolocation.io/documentation.html#2request-origin-cors) for more details.

In this case, just skip setting the API key, and the API will automatically detect your request origin:
```javascript
const { APIClient } = require('ip-geolocation-api-javascript-sdk');
const client = APIClient.instance;
// No API key set — will use request origin
```

##  IP Geolocation Examples
This section shows how to use the `getIpGeolocation()` method from the JavaScript SDK across **Free**, **Standard**, and **Advanced** subscription tiers. Each example highlights different parameter combinations: `fields`, `include`, and `excludes`.

**Parameters**

- `fields`: Use this parameter to include specific fields in the response.
- `excludes`: Use this parameter to omit specific fields from the response.
- `include`: Use this parameter to add optional modules to the response, such as:
  - `security`
  - `user_agent`
  - `hostname`
  - `liveHostname`
  - `hostnameFallbackLive`
  - `abuse`
  - `dma`
  - `timezone`

For the full list of supported fields/modules, refer to the [IP Geolocation API Docs](https://ipgeolocation.io/ip-location-api.html#documentation-overview).

The `ip` parameter in the SDK can accept any valid IPv4 address, IPv6 address, or domain name. If the `ip=` parameter is not specified, the API will return information about the public IP of the machine.

### Developer (Free) Plan Examples
#### Get Default Fields

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

Sample Response:
```json
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
}
```

Filtering Specific Fields from the Response (Use of `exclude` and `fields`).

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
```json
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
```json
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
### Retrieving Geolocation Data in Multiple Languages
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
```json
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
```json
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
> [!NOTE]
> 
> The IP Geolocation API supports hostname lookup for all paid  subscriptions. However, this is not included by default. To enable hostname resolution, use the `include` parameter with one of the following options:
> - `hostname`: Performs a quick lookup using the internal hostname database. If no match is found, the IP is returned as-is. This is fast but may produce incomplete results.
> - `liveHostname`: Queries live sources for accurate hostname resolution. This may increase response time.
> - `hostnameFallbackLive`: Attempts the internal database first, and falls back to live sources if no result is found. This option provides a balance of speed and reliability.

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
```json
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
These examples demonstrate typical usage of the IP Geolocation API with different subscription tiers. Use `fields` to specify exactly which data to receive, `include` for optional data like security and user agent, and `excludes` to omit specific keys from the response.

> [!NOTE] 
> All features available in the Free plan are also included in the Standard and Advanced plans. Similarly, all features of the Standard plan are available in the Advanced plan.

### Bulk IP Geolocation Examples
The SDK supports bulk IP geolocation using `getBulkIpGeolocation()`. This is available for Standard and Advanced plans. All parameters like `fields`, `include`, and `excludes` can be used in bulk requests.
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
The `getIpSecurityInfo()` method lets you query threat intelligence, proxy/VPN detection, and risk metadata for IP addresses.

For full endpoint specifications, refer to the [IP Security API documentation](https://ipgeolocation.io/ip-security-api.html#documentation-overview).

### Get Security API Default Fields
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
```json
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
```json
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

> [!NOTE]
> You can get all the available fields in standard plan in combination with security data, when subscribed to security plan.

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
```json
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
### Bulk IP Security Lookup
The SDK also supports bulk IP Security requests using the `getBulkIpSecurityInfo()` method. All parameters like `fields`, `include`, and `excludes` can also be used in bulk requests.
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
> [!NOTE]
> ASN API is only available in the Advanced subscription plans.

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
```json
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
```json
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
```json
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
      "...",
      "216.165.120.0/22"
    ],
    "upstreams": [
      {
        "as_number": "AS3269",
        "description": "Telecom Italia S.p.A.",
        "country": "IT"
      },
      "...",
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
      "...",
      {
        "as_number": "AS54965",
        "description": "Polytechnic Institute of NYU",
        "country": "US"
      }
    ],
    "whois_response": "<RAW-Whois-Response>"
  }
}
```

## Abuse Contact API Examples
This section demonstrates how to use the `getAbuseContactInfo()` method of the SDK. This API helps security teams, hosting providers, and compliance professionals quickly identify the correct abuse reporting contacts for any IPv4 or IPv6 address.

You can retrieve data like the responsible organization, role, contact emails, phone numbers, and address to take appropriate mitigation action against abusive or malicious activity.

> [!NOTE] 
> Abuse Contact API is only available in the **Advanced Plan**.

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
```json
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
```json
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
```json
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

## Timezone API Examples
This section provides usage examples of the `getTimezoneInfo()` method from the JavaScript SDK, showcasing how to fetch timezone and time-related data using different query types — IP address, latitude/longitude, timezone ID, IATA code, ICAO code, or UN/LOCODE.

For full API specifications, refer to the [Timezone API documentation](https://ipgeolocation.io/timezone-api.html#documentation-overview).

### Get Timezone by IP Address

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
```json
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
```json
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
```json
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
```json
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
```json
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
```json
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
```json
{
  "original_time": "2024-12-08T06:00:00.000Z",
  "converted_time": "2024-12-08T20:00:00.000Z",
  "diff_hour": 14,
  "diff_min": 840
}
```
You can convert time from any timezone to another using:

- **Coordinate** (latitude & longitude)
- **Locations** (city or address)
- **IATA codes**
- **ICAO codes**
- **UN/LOCODE**

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
```json
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
> [!TIP] 
> If you don’t pass any `userAgent` string, the API will return data of the device's current User-Agent automatically.

### Bulk User Agent Parsing Example
The SDK also supports bulk User Agent parsing using the `parseBulkUserAgentStrings()` method. This allows parsing multiple user agent strings in a single request. All fields available in single-user-agent parsing are returned per entry.

> [!NOTE] 
> Bulk User Agent API is only available for paid plans.
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

### Lookup Astronomy API by Coordinates
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
```json
{
  "location": {
    "country_name": "",
    "state_prov": "New York",
    "city": "New York",
    "locality": "",
    "latitude": "40.71280",
    "longitude": "-74.00600",
    "elevation": "6"
  },
  "astronomy": {
    "date": "2025-07-22",
    "current_time": "12:08:03.637",
    "mid_night": "01:02",
    "night_end": "03:48",
    "morning": {
      "astronomical_twilight_begin": "03:48",
      "astronomical_twilight_end": "04:32",
      "nautical_twilight_begin": "04:32",
      "nautical_twilight_end": "05:12",
      "civil_twilight_begin": "05:12",
      "civil_twilight_end": "05:43",
      "blue_hour_begin": "04:59",
      "blue_hour_end": "05:24",
      "golden_hour_begin": "05:24",
      "golden_hour_end": "06:23"
    },
    "sunrise": "05:43",
    "sunset": "20:21",
    "evening": {
      "golden_hour_begin": "19:41",
      "golden_hour_end": "20:40",
      "blue_hour_begin": "20:40",
      "blue_hour_end": "21:05",
      "civil_twilight_begin": "20:21",
      "civil_twilight_end": "20:52",
      "nautical_twilight_begin": "20:52",
      "nautical_twilight_end": "21:31",
      "astronomical_twilight_begin": "21:31",
      "astronomical_twilight_end": "22:16"
    },
    "night_begin": "22:16",
    "sun_status": "-",
    "solar_noon": "13:02",
    "day_length": "14:37",
    "sun_altitude": 66.36171104779359,
    "sun_distance": 152012050.7566263,
    "sun_azimuth": 146.51841856976972,
    "moon_phase": "WANING_CRESCENT",
    "moonrise": "02:48",
    "moonset": "19:10",
    "moon_status": "-",
    "moon_altitude": 71.91067852938512,
    "moon_distance": 370332.8633592859,
    "moon_azimuth": 232.18896241301334,
    "moon_parallactic_angle": 42.90572861876801,
    "moon_illumination_percentage": "-5.82",
    "moon_angle": 332.0715969163789
  }
}
```
### Lookup Astronomy API by IP Address
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
```json
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
    "longitude": "-122.08421",
    "elevation": "3"
  },
  "astronomy": {
    "date": "2025-07-22",
    "current_time": "09:08:38.573",
    "mid_night": "01:15",
    "night_end": "04:18",
    "morning": {
      "astronomical_twilight_begin": "04:18",
      "astronomical_twilight_end": "04:58",
      "nautical_twilight_begin": "04:58",
      "nautical_twilight_end": "05:35",
      "civil_twilight_begin": "05:35",
      "civil_twilight_end": "06:04",
      "blue_hour_begin": "05:23",
      "blue_hour_end": "05:47",
      "golden_hour_begin": "05:47",
      "golden_hour_end": "06:42"
    },
    "sunrise": "06:04",
    "sunset": "20:24",
    "evening": {
      "golden_hour_begin": "19:46",
      "golden_hour_end": "20:42",
      "blue_hour_begin": "20:42",
      "blue_hour_end": "21:05",
      "civil_twilight_begin": "20:24",
      "civil_twilight_end": "20:54",
      "nautical_twilight_begin": "20:54",
      "nautical_twilight_end": "21:30",
      "astronomical_twilight_begin": "21:30",
      "astronomical_twilight_end": "22:10"
    },
    "night_begin": "22:10",
    "sun_status": "-",
    "solar_noon": "13:14",
    "day_length": "14:20",
    "sun_altitude": 34.34803129267899,
    "sun_distance": 152012050.75662628,
    "sun_azimuth": 89.8970525672089,
    "moon_phase": "WANING_CRESCENT",
    "moonrise": "03:23",
    "moonset": "19:16",
    "moon_status": "-",
    "moon_altitude": 62.034455712206615,
    "moon_distance": 370333.6185030786,
    "moon_azimuth": 99.42513011330385,
    "moon_parallactic_angle": -62.958244692944554,
    "moon_illumination_percentage": "-5.82",
    "moon_angle": 332.0769921001466
  }
}
```
### Lookup Astronomy API by Location String
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
```json
{
  "location": {
    "location_string": "Milan, Italy",
    "country_name": "Italy",
    "state_prov": "Lombardy",
    "city": "Milan",
    "locality": "",
    "latitude": "45.46419",
    "longitude": "9.18963",
    "elevation": "122"
  },
  "astronomy": {
    "date": "2025-07-22",
    "current_time": "18:09:10.992",
    "mid_night": "01:29",
    "night_end": "03:39",
    "morning": {
      "astronomical_twilight_begin": "03:39",
      "astronomical_twilight_end": "04:35",
      "nautical_twilight_begin": "04:35",
      "nautical_twilight_end": "05:21",
      "civil_twilight_begin": "05:21",
      "civil_twilight_end": "05:54",
      "blue_hour_begin": "05:06",
      "blue_hour_end": "05:35",
      "golden_hour_begin": "05:35",
      "golden_hour_end": "06:40"
    },
    "sunrise": "05:54",
    "sunset": "21:04",
    "evening": {
      "golden_hour_begin": "20:19",
      "golden_hour_end": "21:24",
      "blue_hour_begin": "21:24",
      "blue_hour_end": "21:52",
      "civil_twilight_begin": "21:04",
      "civil_twilight_end": "21:38",
      "nautical_twilight_begin": "21:38",
      "nautical_twilight_end": "22:23",
      "astronomical_twilight_begin": "22:23",
      "astronomical_twilight_end": "23:18"
    },
    "night_begin": "23:18",
    "sun_status": "-",
    "solar_noon": "13:29",
    "day_length": "15:10",
    "sun_altitude": 28.169856679888845,
    "sun_distance": 152012050.75662634,
    "sun_azimuth": 270.6983052183797,
    "moon_phase": "WANING_CRESCENT",
    "moonrise": "02:36",
    "moonset": "19:49",
    "moon_status": "-",
    "moon_altitude": 13.689479853567155,
    "moon_distance": 370334.31938040146,
    "moon_azimuth": 296.84370445526883,
    "moon_parallactic_angle": 45.350334161659966,
    "moon_illumination_percentage": "-5.82",
    "moon_angle": 332.08199856245204
  }
}
```

### Lookup Astronomy API for Specific Date
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
```json
{
  "location": {
    "country_name": "Australia",
    "state_prov": "Queensland",
    "city": "Brisbane",
    "locality": "Brisbane",
    "latitude": "-27.47000",
    "longitude": "153.02000",
    "elevation": ""
  },
  "astronomy": {
    "date": "2025-01-01",
    "current_time": "02:09:51.517",
    "mid_night": "23:51",
    "night_end": "03:24",
    "morning": {
      "astronomical_twilight_begin": "03:24",
      "astronomical_twilight_end": "03:57",
      "nautical_twilight_begin": "03:57",
      "nautical_twilight_end": "04:29",
      "civil_twilight_begin": "04:29",
      "civil_twilight_end": "04:56",
      "blue_hour_begin": "04:19",
      "blue_hour_end": "04:40",
      "golden_hour_begin": "04:40",
      "golden_hour_end": "05:30"
    },
    "sunrise": "04:56",
    "sunset": "18:46",
    "evening": {
      "golden_hour_begin": "18:12",
      "golden_hour_end": "19:02",
      "blue_hour_begin": "19:02",
      "blue_hour_end": "19:23",
      "civil_twilight_begin": "18:46",
      "civil_twilight_end": "19:13",
      "nautical_twilight_begin": "19:13",
      "nautical_twilight_end": "19:45",
      "astronomical_twilight_begin": "19:45",
      "astronomical_twilight_end": "20:18"
    },
    "night_begin": "20:18",
    "sun_status": "-",
    "solar_noon": "11:51",
    "day_length": "13:50",
    "sun_altitude": -29.4286928132231,
    "sun_distance": 147102938.88036567,
    "sun_azimuth": 143.06960395892196,
    "moon_phase": "NEW_MOON",
    "moonrise": "05:42",
    "moonset": "20:08",
    "moon_status": "-",
    "moon_altitude": -31.0476016259822,
    "moon_distance": 383086.6727028855,
    "moon_azimuth": 154.73430237040986,
    "moon_parallactic_angle": -154.91634180109617,
    "moon_illumination_percentage": "0.62",
    "moon_angle": 9.03930980357242
  }
}
```
### Lookup Location info in Different Language
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
```json
{
  "ip": "1.1.1.1",
  "location": {
    "continent_code": "OC",
    "continent_name": "Océanie",
    "country_code2": "AU",
    "country_code3": "AUS",
    "country_name": "Australie",
    "country_name_official": "",
    "is_eu": false,
    "state_prov": "Queensland",
    "state_code": "AU-QLD",
    "district": "Brisbane",
    "city": "Brisbane Sud",
    "locality": "",
    "zipcode": "4101",
    "latitude": "-27.47306",
    "longitude": "153.01421",
    "elevation": ""
  },
  "astronomy": {
    "date": "2025-07-23",
    "current_time": "02:10:35.820",
    "...": "",
    "moon_angle": 332.095098449164
  }
}
```

## Models

 - [ASNConnection](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/ASNConnection.md)
 - [ASNResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/ASNResponse.md)
 - [ASNDetails](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/ASNDetails.md)
 - [Abuse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/Abuse.md)
 - [AbuseResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AbuseResponse.md)
 - [AstronomyEvening](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AstronomyEvening.md)
 - [AstronomyLocation](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AstronomyLocation.md)
 - [AstronomyMorning](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AstronomyMorning.md)
 - [Astronomy](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/Astronomy.md)
 - [AstronomyResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/AstronomyResponse.md)
 - [CountryMetadata](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/CountryMetadata.md)
 - [Currency](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/Currency.md)
 - [ErrorResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/ErrorResponse.md)
 - [GeolocationResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/GeolocationResponse.md)
 - [BulkIPGeolocationResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/BulkIPGeolocationResponse.md)
 - [BulkIPGeolocationResponse1](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/BulkIPGeolocationResponse1.md)
 - [BulkIPRequest](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/BulkIPRequest.md)
 - [BulkIPSecurityResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/BulkIPSecurityResponse.md)
 - [BulkIPSecurityResponse1](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/BulkIPSecurityResponse1.md)
 - [Location](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/Location.md)
 - [LocationMinimal](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/LocationMinimal.md)
 - [Network](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/Network.md)
 - [NetworkAsn](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/NetworkAsn.md)
 - [NetworkCompany](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/NetworkCompany.md)
 - [NetworkMinimal](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/NetworkMinimal.md)
 - [NetworkMinimalAsn](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/NetworkMinimalAsn.md)
 - [NetworkMinimalCompany](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/NetworkMinimalCompany.md)
 - [BulkUserAgentRequest](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/BulkUserAgentRequest.md)
 - [UserAgentRequest](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentRequest.md)
 - [Security](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/Security.md)
 - [SecurityAPIResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/SecurityAPIResponse.md)
 - [TimeConversionResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimeConversionResponse.md)
 - [TimeZone](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimeZone.md)
 - [TimeZoneDetailedResponse](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimeZoneDetailedResponse.md)
 - [TimeZoneDstEnd](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimeZoneDstEnd.md)
 - [TimeZoneDstStart](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimeZoneDstStart.md)
 - [TimezoneAirport](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimezoneAirport.md)
 - [TimezoneDetail](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimezoneDetail.md)
 - [TimezoneDetailDstEnd](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimezoneDetailDstEnd.md)
 - [TimezoneDetailDstStart](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimezoneDetailDstStart.md)
 - [TimezoneLocation](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimezoneLocation.md)
 - [TimezoneLocode](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/TimezoneLocode.md)
 - [UserAgentData](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentData.md)
 - [UserAgentDataDevice](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentDataDevice.md)
 - [UserAgentDataEngine](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentDataEngine.md)
 - [UserAgentDataOperatingSystem](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk/blob/HEAD/docs/UserAgentDataOperatingSystem.md)
