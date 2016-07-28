# Current Page

Returns attributes for current page.

#### Example

~~~ liquid
  {% if current_page.controller == 'rentals' and current_page.action == 'show' %}
~~~

Available attributes:

* action
* controller
* path
* url
