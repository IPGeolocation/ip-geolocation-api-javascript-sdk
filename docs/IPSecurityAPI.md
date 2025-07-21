# IPSecurityAPI

All URIs are relative to *https://api.ipgeolocation.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBulkIpSecurityInfo**](IPSecurityAPI.md#getBulkIpSecurityInfo) | **POST** /security-bulk | 
[**getIpSecurityInfo**](IPSecurityAPI.md#getIpSecurityInfo) | **GET** /security | 



## getBulkIpSecurityInfo

> [BulkIPSecurityResponse] getBulkIpSecurityInfo(BulkIPRequest, opts)



The Bulk IP Security Lookup API can provide security details for up to &#x60;50,000&#x60; bulk IPs. This API also has parameters to customize the response, just like the single IP Security Lookup API.
### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **BulkIPRequest** | [**BulkIPRequest**](BulkIPRequest.md)|  | 
 **include** | **String**| Include optional objects  | [optional] 
 **fields** | **String**| Get specific fields, objects from the response. | [optional] 
 **excludes** | **String**| Exclude specific fields, objects from the response. | [optional] 
 **output** | **String**| Desired output format. | [optional] 
 **lang** | **String**| By default, the API responds in English. You can change the response language by passing the language code as a query parameter &#x60;lang&#x60;. Multi language feature is available only for &#x60;paid users&#x60;. | [optional] 

### Return type

[**[BulkIPSecurityResponse]**](BulkIPSecurityResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## getIpSecurityInfo

> SecurityAPIResponse getIpSecurityInfo(opts)



IP Security API provides security details of a given IP. It detects whether the IP is proxy, tor or bot. It also shows the proxy types of the IP (like VPN, PROXY, RELAY etc.) with it&#39;s VPN/proxy service provider making our API powerful VPN checker. It finds the IPs that are involved in spam activities. It also checks whether the IP links to a cloud provider and includes the provider&#39;s name.
### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| query parameter &#39;ip&#39;. If not provided, will be your network IP | [optional] 
 **include** | **String**| Include optional details | [optional] 
 **fields** | **String**| Get specific fields, objects from the response. | [optional] 
 **excludes** | **String**| Exclude specific fields, objects from the response. | [optional] 
 **output** | **String**| Desired output format (json or xml). | [optional] 
 **lang** | **String**| By default, the API responds in English. You can change the response language by passing the language code as a query parameter &#x60;lang&#x60;. Multi language feature is available only for &#x60;paid users&#x60;. | [optional] 

### Return type

[**SecurityAPIResponse**](SecurityAPIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

