# Menus

Returns a `Menu` object for each visible menus.

## Example

This will return all the menu items from the menu having the handle `main`.

~~~ html
<ul>
  {% for item in menus.main.items %}
    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
  {% endfor %}
</ul>
~~~

## Available attributes

Name   | Type       | Description
-------|------------|------------
all    | Collection | collection of all menus
menu-handle*  | Menu       | returns the menu matching the given handle
