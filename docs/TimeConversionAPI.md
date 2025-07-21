# TimeConversionAPI

All URIs are relative to *https://api.ipgeolocation.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertTimeBetweenTimezones**](TimeConversionAPI.md#convertTimeBetweenTimezones) | **GET** /timezone/convert | 



## convertTimeBetweenTimezones

> TimeConversionResponse convertTimeBetweenTimezones(opts)



You can convert a timestamp provided as a query paramter time from one time zone to another time zone.
### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time** | **String**| time parameter takes the input in the following two formats: i) &#39;yyyy-MM-dd HH:mm&#39;, and ii) &#39;yyyy-MM-dd HH:mm:ss&#39;. This parameter is optional and you can omit it to convert the current time between two coordinates, time zones or locations. | [optional] 
 **tzFrom** | **String**| timezone to convert from | [optional] 
 **tzTo** | **String**| timezone to convert to | [optional] 
 **latFrom** | **Number**| latitude to convert from | [optional] 
 **longFrom** | **Number**| longitude to convert from | [optional] 
 **latTo** | **Number**| latitude to convert to | [optional] 
 **longTo** | **Number**| longitude to convert to | [optional] 
 **locationFrom** | **String**| location to convert from | [optional] 
 **locationTo** | **String**| location to convert to | [optional] 
 **icaoFrom** | **String**| location to convert from | [optional] 
 **icaoTo** | **String**| location to convert to | [optional] 
 **iataFrom** | **String**| location to convert from | [optional] 
 **iataTo** | **String**| location to convert to | [optional] 
 **locodeFrom** | **String**| location to convert from | [optional] 
 **locodeTo** | **String**| location to convert to | [optional] 

### Return type

[**TimeConversionResponse**](TimeConversionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

