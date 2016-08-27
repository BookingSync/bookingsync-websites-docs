# Category

Gives you access to attributes of `Category`.

#### Example

~~~ liquid
  <h2>{{ category.title }}</h2>
~~~

Available attributes:

Name             | Type       | Description
-----------------|------------|------------
content          | String     | category's content
page_title       | String     | used inside title
page_description | String     | used inside meta description
photos           | Collection | collection of all published photos
promoted         | Boolean    | check if a category is promoted or not
title            | String     | category's title
url              | String     | category's url
{: class="table table-bordered"}
