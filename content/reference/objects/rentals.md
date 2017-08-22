# Rentals

Returns promoted rentals for current website.

#### Example

~~~ liquid
  {% for rental in rentals.promoted %}
  ...
  {% endfor %}
~~~

Available attributes:

* all
* max_latitude
* min_latitude
* max_longitude
* min_longitude
* promoted
* visible_rentals_ids
