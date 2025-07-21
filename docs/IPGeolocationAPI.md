# IPGeolocationAPI

All URIs are relative to *https://api.ipgeolocation.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBulkIpGeolocation**](IPGeolocationAPI.md#getBulkIpGeolocation) | **POST** /ipgeo-bulk | 
[**getIpGeolocation**](IPGeolocationAPI.md#getIpGeolocation) | **GET** /ipgeo | 



## getBulkIpGeolocation

> [BulkIPGeolocationResponse] getBulkIpGeolocation(BulkIPRequest, opts)



This feature is available only on our paid API subscriptions (STANDARD or ADVANCED). This endpoint allows you to perform the geolocation lookup for multiple IPv4, IPv6 addresses or domain names (maximum 50,000) at the same time. The requests count per lookup is equal to total IP addresses or domain names passed. To perform bulk IP Geolocation Lookup, send a POST request and pass the \&quot;ips\&quot; array as JSON data along with it.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **BulkIPRequest** | [**BulkIPRequest**](BulkIPRequest.md)|  | 
 **lang** | **String**| By default, the API responds in English. You can change the response language by passing the language code as a query parameter &#x60;lang&#x60;. Multi language feature is available only for &#x60;paid users&#x60;. | [optional] 
 **fields** | **String**| you can filter the API response by specifying the fields that you need, instead of getting the full response. To do this, pass the desired field names using the &#x60;fields&#x60; query parameter with each field represented as a dot-separated path. | [optional] 
 **excludes** | **String**| you can also filter the API response by excluding specific fields (except the IP address) that you don&#39;t need. To do this, pass the unwanted field names using the excludes query parameter, with each field represented as a dot-separated path | [optional] 
 **include** | **String**| IP Geolocation API also provides IP-Security, abuse, timezone, user-agent and DMA (Designated Market Area) code, which is specifically used in the US for marketing and regional targeting information on Advanced API subscription, but doesn&#39;t respond it by default. To get these information along with the geolocation information, you must pass the &#x60;include&#x3D;security&#x60; or &#x60;include&#x3D;abuse&#x60; or &#x60;include&#x3D;dma&#x60; or &#x60;include&#x3D;time_zone&#x60; or &#x60;include&#x3D;user-agent&#x60; or you can fetch multiples by adding values in comma-separated way. In addition to that, IPGeolocation API also provide hostname lookup for an IP address on all the paid API subscriptions (STANDARD and ADVANCED), but doesn&#39;t respond it by default. To get the hostname for an IP address, you can pass one of the three values &#x60;hostname, liveHostname, hostnameFallbackLive&#x60; as a URL parameter &#x60;include&#x3D;&#x60;. | [optional] 
 **output** | **String**| Desired output format(json or xml). | [optional] 

### Return type

[**[BulkIPGeolocationResponse]**](BulkIPGeolocationResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## getIpGeolocation

> GeolocationResponse getIpGeolocation(opts)



IP Geolocation API provides real-time and accurate geolocation, network, abuse, and security information for any IPv4 or IPv6 address and domain name along with the user-agent detail for the provided user-agent string. You can geolocate your online visitors and provide them the customized user-experience accordingly.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| In order to find geolocation information about an IP (ipv4 ipv6) address or a domain name, pass it as a query parameter ip. When this endpoint is queried without an IP address, it returns the geolocation information of the device/client which is calling it | [optional] 
 **lang** | **String**| By default, the API responds in English. You can change the response language by passing the language code as a query parameter &#x60;lang&#x60;. Multi language feature is available only for &#x60;paid users&#x60;. | [optional] 
 **fields** | **String**| you can filter the API response by specifying the fields that you need, instead of getting the full response. To do this, pass the desired field names using the &#x60;fields&#x60; query parameter with each field represented as a dot-separated path. | [optional] 
 **excludes** | **String**| you can also filter the API response by excluding specific fields (except the IP address) that you don&#39;t need. To do this, pass the unwanted field names using the excludes query parameter, with each field represented as a dot-separated path | [optional] 
 **include** | **String**| IP Geolocation API also provides IP-Security, abuse, timezone, user-agent and DMA (Designated Market Area) code, which is specifically used in the US for marketing and regional targeting information on Advanced API subscription, but doesn&#39;t respond it by default. To get these information along with the geolocation information, you must pass the &#x60;include&#x3D;security&#x60; or &#x60;include&#x3D;abuse&#x60; or &#x60;include&#x3D;dma&#x60; or &#x60;include&#x3D;time_zone&#x60; or &#x60;include&#x3D;user-agent&#x60; or you can fetch multiples by adding values in comma-separated way. In addition to that, IPGeolocation API also provide hostname lookup for an IP address on all the paid API subscriptions (STANDARD and ADVANCED), but doesn&#39;t respond it by default. To get the hostname for an IP address, you can pass one of the three values &#x60;hostname, liveHostname, hostnameFallbackLive&#x60; as a URL parameter &#x60;include&#x3D;&#x60;. | [optional] 
 **output** | **String**| Desired output format (json or xml). | [optional] 

### Return type

[**GeolocationResponse**](GeolocationResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

