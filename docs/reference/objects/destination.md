# Destination

Returns attributes for selected `Destination`, for example in search bar.

:::note
Theme v3+ pages are cached without query parameters. Selection and other param-driven behavior is not set in Liquid. Use JavaScript to read URL params and call the Public API v2 endpoints instead: [/reference/public-api/destinations](/reference/public-api/destinations) and [/reference/public-api/search](/reference/public-api/search).
:::

## Example

~~~ html
<option
  {% if destination.selected %}
    selected="selected"
  {% endif %}
  value="{{ destination.id }}">
  {{ destination.title }} ({{ destination.count }})
</option>
~~~

## Available attributes

Name             | Type        | Description
-----------------|-------------|------------
ancestors        | Collection  | destination's ancestors
children         | Collection  | destination's children destination
content          | String      | destination's content
count            | Interger    | number of rentals within this destination
handle           | String      | destination's handle. This is the destination's title in lowercase with any spaces and special characters replaced by hyphens (-).
id               | Integer     | destination's uniq identifier
page_title       | String      | destination's page title
page_description | String      | destination's page description
parent           | Destination | destination's parent destination
photos           | Collection  | collection of all destination's photos
selected         | Boolean     | defined if a destination is currently selected or not (theme v2 and earlier)
title            | String      | destination's title
url              | String      | destination's URL

## Destination Locale

Available attributes:

* url

## Destination Locales

Available attributes:

* available
* default
