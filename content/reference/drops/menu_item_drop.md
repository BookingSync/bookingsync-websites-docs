# Menu Item Drop

Returns attributes of menu items.

#### Example

~~~ liquid
  {% for item in menus.main.items %}
    {% if item.url %}
      <a href="{{ item.url }}">{{ item.title }}</a>
~~~

Available attributes:

* kind
* reference
* submenu
* title
* url
