# AbuseContactAPI

All URIs are relative to *https://api.ipgeolocation.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAbuseContactInfo**](AbuseContactAPI.md#getAbuseContactInfo) | **GET** /abuse | 



## getAbuseContactInfo

> AbuseResponse getAbuseContactInfo(opts)



The Abuse Contact API provides essential contact information to report abusive activity associated with IP addresses. By querying an IP address (IPv4 or IPv6), users receive detailed abuse contact data, including the responsible organization, abuse handling role, contact emails, phone numbers, and registered address. This enables users to swiftly take action to report and mitigate threats such as spam, DDoS attacks, and phishing.     In addition to abuse-specific contacts, the API also includes registration metadata like the registered country and abuse handle. This empowers cybersecurity teams, hosting providers, and compliance entities to take appropriate legal or administrative action. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **String**| query parameter &#39;ip&#39;. | [optional] 
 **excludes** | **String**| You can exclude specific fields from the API response (except the ip field) by listing them in the excludes parameter as a comma-separated list. For example, you want to remove emails and handle from api response, you can put the keys in excludes parameter like this. | [optional] 
 **fields** | **String**| You can customize the API response by using the fields parameter to include only the specific data you need. For example, to retrieve only the role and emails, specify these keys in the fields parameter as shown below. | [optional] 

### Return type

[**AbuseResponse**](AbuseResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

