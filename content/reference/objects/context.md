# Context

Allows to check if any exception happened during the request.

#### Example

~~~ liquid
  {% if current_page.controller == 'catch_all' or context.error? %}
~~~

Available attributes:

* success?
* error?
