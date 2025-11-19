# Security

## Properties

| Name                | Type        | Description                                                                                                         | Notes      |
|---------------------|-------------|---------------------------------------------------------------------------------------------------------------------|------------|
| **threatScore**     | **Number**  | IP address’ threat score. It ranges from 0 to 100. **100 indicates highest threat** and vice versa for lower score. | [optional] |
| **isTor**           | **Boolean** | Indicates if the IP address is being consumed on a Tor endpoint.                                                    | [optional] |
| **isProxy**         | **Boolean** | Indicates whether the IP address is associated with any anonymization network --- VPN, PROXY, or RELAY.             | [optional] |
| **proxyType**       | **String**  | Specifies which of the three types (VPN, PROXY, or RELAY) applies when `is_proxy` is true; otherwise remains empty. | [optional] |
| **proxyProvider**   | **String**  | Name of the proxy provider, if the IP address belongs to a proxy network.                                           | [optional] |
| **isAnonymous**     | **Boolean** | Indicates if the IP address is being used anonymously.                                                              | [optional] |
| **isKnownAttacker** | **Boolean** | Indicates if the IP address is enlisted as an attacking IP address.                                                 | [optional] |
| **isSpam**          | **Boolean** | Indicates if the IP address is enlisted as a spam IP address.                                                       | [optional] |
| **isBot**           | **Boolean** | Indicates if the IP address is enlisted as a bot IP address.                                                        | [optional] |
| **isCloudProvider** | **Boolean** | Indicates if the IP address belongs to a cloud provider (computing infrastructure providers).                       | [optional] |
| **cloudProvider**   | **String**  | Name of the Cloud Provider, if the IP address belongs to a cloud provider.                                          | [optional] |


