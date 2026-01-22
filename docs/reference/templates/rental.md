# rental.liquid

The `rental.liquid` template renders a detailed page for an individual rental.

:::note
Theme v3+ does not read Liquid parameters on this page to improve cacheability. Use JavaScript to read query parameters and call the Public API v2 endpoints instead: [/reference/public-api/rentals](/reference/public-api/rentals).
:::

## Parameters

These parameters are only used by theme v2 and earlier.

Name             | Type             | Description
-----------------|------------------|------------
checkin          | Date (ISO 8601)  | Checkin date
checkout         | Date (ISO 8601)  | Checkout date
debug            | Boolean          | [Debug mode](/reference/templates). Default = 0
guests           | Integer          | Adults number
