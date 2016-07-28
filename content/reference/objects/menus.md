# Menus

Returns a `Menu` object for each visible menus.

#### Example

~~~ liquid
  {% for item in menus.main.items %}
    <a href="{{ item.url }}">{{ item.title }}</a>
~~~

Available attributes:

* *menu_name*