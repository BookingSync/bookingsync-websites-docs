# Current Page

Returns attributes for current page.

#### Example

~~~ liquid
{% if current_page.controller == 'rentals' and current_page.action == 'show' %}
~~~

Available attributes:

Name       | Type   | Description
-----------|--------|------------
action     | String | current page's action
controller | String | current page's controller
path       | String | current page's path
url        | String | current page's url
