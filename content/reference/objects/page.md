# Page

Returns attributes of page.

## Example

For a page with the title `About us`:

### Input
~~~ liquid
{{ page.handle }}
~~~

### Output
~~~ html
about-us
~~~

## Available attributes

Name             | Type       | Description
-----------------|------------|------------
content          | String     | page's content
handle           | String     | page's handle. This is the page's title in lowercase with any spaces and special characters replaced by hyphens (-).
page_title       | String     | used inside title
page_description | String     | used inside meta description
title            | String     | page's title
{: class="table table-bordered"}
