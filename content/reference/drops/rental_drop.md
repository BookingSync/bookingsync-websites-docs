# Rental Drop

Returns attributes for rental.

#### Example

~~~ liquid
  <p>{{ rental.rental_type }} {% t 'rentals.show.in' %} {{ rental.destination.name }}, {{ rental.location.country }}</p>

~~~

Available attributes:

* availability
* availability_map
* bookingsync_account_id
* booknow_url
* inquire_url
* page_title
* page_description
* rental_type
* reviews
