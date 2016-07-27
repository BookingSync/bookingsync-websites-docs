# Categories

Allows to iterate through all `Categories` in the website. They are sorted by position.

#### Example

~~~ liquid
  {% if categories.all.size > 0 %}
    {% for category in categories.all %}
  ...
~~~

Available attributes:

* all - iterate through all categories
* promoted - iterate through only promoted categories.

