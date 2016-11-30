# Amenity

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

Name      | Type    | Description
----------|---------|------------
available | Boolean | if amenity is available or not
id        | String  | amenity uniq identifier
name      | String  | translated amenity name
selected  | Boolean | if amenity is selected or not
{: class="table table-bordered"}
