# Rental Type

Returns information about rental type.

#### Example

~~~ html
<option
  {% if rental_type.selected %}
    selected="selected"
  {% endif %}
  value="{{ rental_type.id }}">
    {{ rental_type.name }} ({{ rental_type.count }})
</option>
~~~

Available attributes:

* count
* id
* name
* selected
