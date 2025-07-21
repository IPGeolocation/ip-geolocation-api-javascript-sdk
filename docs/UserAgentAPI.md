# UserAgentAPI

All URIs are relative to *https://api.ipgeolocation.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserAgentDetails**](UserAgentAPI.md#getUserAgentDetails) | **GET** /user-agent | Get details of user-agent
[**parseBulkUserAgentStrings**](UserAgentAPI.md#parseBulkUserAgentStrings) | **POST** /user-agent-bulk | Handle multiple user-agent string lookups
[**parseUserAgentString**](UserAgentAPI.md#parseUserAgentString) | **POST** /user-agent | Handle single User-Agent string



## getUserAgentDetails

> UserAgentData getUserAgentDetails(opts)

Get details of user-agent

User Agent Parser API provides the accurate browser, device, and operating system details from a User Agent String. It also provides information about crawlers and attack sources. You can use these details to customize user experience, prevent crawlers and attackers from accessing your website.
### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAgent** | **String**|  | [optional] 
 **output** | **String**| Desired output format (json or xml). | [optional] 

### Return type

[**UserAgentData**](UserAgentData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## parseBulkUserAgentStrings

> [UserAgentData] parseBulkUserAgentStrings(opts)

Handle multiple user-agent string lookups

This endpoint allows you to perform the parsing of multiple User-Angent strings (max. 50,000) at the same time. The requests count per round is equal to total User-Agent strings passed. This feature is &#x60;only available for paid plans&#x60;.
### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **output** | **String**| Desired output format (json or xml). | [optional] 
 **BulkUserAgentRequest** | [**BulkUserAgentRequest**](BulkUserAgentRequest.md)|  | [optional] 

### Return type

[**[UserAgentData]**](UserAgentData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## parseUserAgentString

> UserAgentData parseUserAgentString(opts)

Handle single User-Agent string

You can also provide custom User-Agent string to parse in JSON payload. This endpoint is meant to be called from server-side and is available for paid subscriptions only.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **output** | **String**| Desired output format (json or xml). | [optional] 
 **UserAgentRequest** | [**UserAgentRequest**](UserAgentRequest.md)|  | [optional] 

### Return type

[**UserAgentData**](UserAgentData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml

