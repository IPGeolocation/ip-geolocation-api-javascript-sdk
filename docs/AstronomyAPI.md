# AstronomyAPI

All URIs are relative to *https://api.ipgeolocation.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAstronomyDetails**](AstronomyAPI.md#getAstronomyDetails) | **GET** /astronomy | 



## getAstronomyDetails

> AstronomyResponse getAstronomyDetails(opts)



The Astronomy API provides the location-based rise and set times for the Sun and Moon along with the current position, distance from earth, and azimuth of the Sun and the Moon for a specific date at the queried time. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| query paramter &#39;ip&#39;. If not provided, will be your network IP | [optional] 
 **location** | **String**| query paramter &#39;location&#39;. If not provided, will be your ip location | [optional] 
 **lat** | **String**| query paramter &#39;lat&#39;. | [optional] 
 **_long** | **String**| query paramter &#39;long&#39;. | [optional] 
 **date** | **String**| The date (YYYY-MM-DD) to lookup for. default will be the current date | [optional] 
 **output** | **String**| Desired output format. | [optional] 
 **lang** | **String**| By default, the API responds in English. You can change the response language by passing the language code as a query parameter &#x60;lang&#x60;. Multi language feature is available only for &#x60;paid users&#x60;. | [optional] 

### Return type

[**AstronomyResponse**](AstronomyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

