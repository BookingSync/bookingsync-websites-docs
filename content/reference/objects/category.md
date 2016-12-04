# Category

Gives you access to attributes of `Category`.

## Example

~~~ liquid
<h2>{{ category.title }}</h2>
~~~

## Available attributes

Name             | Type       | Description
-----------------|------------|------------
content          | String     | category's content
handle           | String     | category's handle. This is the category's title in lowercase with any spaces and special characters replaced by hyphens (-).
page_title       | String     | used inside title
page_description | String     | used inside meta description
photos           | Collection | collection of all published photos
promoted         | Boolean    | check if a category is promoted or not
title            | String     | category's title
url              | String     | category's URL
{: class="table table-bordered"}
