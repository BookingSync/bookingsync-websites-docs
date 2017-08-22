# Categories

Allows to iterate through all `Categories` in the website. They are sorted by position.

#### Example

~~~ liquid
{% if categories.all.size > 0 %}
  {% for category in categories.all %}
...
~~~

Available attributes:

Name     | Type       | Description
---------|------------|------------
all      | Collection | collection of all categories
promoted | Collection | collection of all promoted categories
{: class="table table-bordered"}
