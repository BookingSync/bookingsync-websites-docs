# Rental Amenities

Returns amenities for rental.

#### Example

~~~ liquid
  <ul class="amenities list-inline fa-ul">
    {% assign amenities = rental.amenities.searchable %}
    {% include 'snippets/amenities' %}
  </ul>
~~~

Available attributes:

* all
* basic
* extra
* searchable
