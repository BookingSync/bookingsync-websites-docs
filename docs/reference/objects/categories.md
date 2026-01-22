# Categories

`categories` provides collections of Category objects, and `category` exposes a single category.

:::note
Theme v3+ pages are cached without query parameters. If you need to apply URL-driven filters, read the parameters in JavaScript and call the Public API v2 search endpoints: [/reference/public-api/search](/reference/public-api/search).
:::

## Categories collection

Allows to iterate through all `Categories` in the website. They are sorted by position.

#### Example

~~~ html
{% if categories.all.size > 0 %}
  {% for category in categories.all %}
...
~~~

Available attributes:

Name     | Type       | Description
---------|------------|------------
all      | Collection | collection of all categories
promoted | Collection | collection of all promoted categories

## Category

Gives you access to attributes of `Category`.

#### Example

~~~ html
<h2>{{ category.title }}</h2>
~~~

### Available attributes

Name             | Type       | Description
-----------------|------------|------------
content          | String     | category's content
handle           | String     | category's handle. This is the category's title in lowercase with any spaces and special characters replaced by hyphens (-).
id               | Integer    | category's id
page_title       | String     | used inside title
page_description | String     | used inside meta description
photos           | Collection | collection of all published photos
promoted         | Boolean    | check if a category is promoted or not
title            | String     | category's title
url              | String     | category's URL

## Category Locale

Available attributes:

* url

## Category Locales

Available attributes:

* available
* default
