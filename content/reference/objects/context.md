# Context

Allows to check if any exception happened during the request.

#### Example

~~~ liquid
{% if current_page.controller == 'catch_all' or context.error? %}
~~~

Available attributes:

Name     | Type       | Description
---------|------------|------------
error?   | Boolean    | check if a request has errors
success? | Boolean    | check if a request success
{: class="table table-bordered"}
