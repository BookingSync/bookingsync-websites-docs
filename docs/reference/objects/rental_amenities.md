# Rental Amenities

Returns amenities for rental.

#### Example

~~~ html
<ul class="amenities list-inline fa-ul">
  {% assign amenities = rental.amenities.searchable %}
  {% render 'snippets/amenities' %}
</ul>
~~~

Available attributes:

* all
* basic
* extra
* searchable
