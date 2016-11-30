# Location

Returns attributes for rental location.

#### Example

~~~ liquid
  <p>{{ rental.destination.name }}, {{ rental.location.country }}</p>
~~~

Available attributes:

Name    | Type    | Description
--------|-------- |------------
city    | String  | location's city
country | String  | location's country
lat     | String  | location's latitude
lng     | String  | location's longitude
{: class="table table-bordered"}
