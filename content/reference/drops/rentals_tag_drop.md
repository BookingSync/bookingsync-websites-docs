# Rentals Tag Drop

Returns attributes for Rentals Tags.

#### Example

~~~ liquid
  {% for rentals_tag in search_form.rentals_tags %}
    <option
      {% if rentals_tag.selected %}
        selected="selected"
      {% endif %}
      value="{{ rentals_tag.id }}">
      {{rentals_tag.name}} ({{rentals_tag.count}})
    </option>
~~~

Available attributes:

* name
* count
* id
* selected
