# Amenity Drop

Gives you access to all amenities and their attributes.

#### Example

~~~ liquid
  {% for amenity in amenities %}
    {% if amenity.available %}
      <li class="available"><i class="fa-li fa fa-check-circle-o"></i> {{ amenity.name }}</li>
    {% else %}
      <li class="unavailable"><i class="fa-li fa fa-circle-o"></i> {{ amenity.name }}</li>
    {% endif %}
  {% endfor %}
~~~

Available attributes:

* available
* id
* name
* selected
