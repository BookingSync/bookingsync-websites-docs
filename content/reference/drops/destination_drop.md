# Destination Drop

Returns attributes for selected `Destination`, for example in search bar.

#### Example

~~~ liquid
  <option
    {% if destination.selected %}
      selected="selected"
    {% endif %}
    value="{{ destination.id }}">
    {{ destination.name }} ({{ destination.count }})
  </option>
~~~

Available attributes:

* ancestors
* children
* id
* name
* count
* content
* parent
* photos
* selected
* title
* url
