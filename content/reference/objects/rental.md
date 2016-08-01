# Rental

Returns attributes for rental.

#### Example

~~~ liquid
  <p>{{ rental.rental_type }} {% t 'rentals.show.in' %} {{ rental.destination.name }}, {{ rental.location.country }}</p>

~~~

Available attributes:

* availability
* availability_map
* bathrooms
* bedrooms
* bookingsync_account_id
* booknow_url
* checkin_time
* checkout_time
* description
* inquire_url
* page_title
* page_description
* price_public_notes
* rental_type
* reviews
