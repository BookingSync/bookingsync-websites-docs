# search.liquid

The `search.liquid` template is used to display the results of a rentals search request.

## Parameters

Name          | Type            | Description
--------------|-----------------|------------
checkin       | Date (ISO 8601) | Checkin date
checkout      | Date (ISO 8601) | Checkout date
debug         | Boolean         | [Debug mode](/reference/templates). Default = 0
display       | String          | Display type
guests        | Integer         | Adults number
max_price     | Integer         | Maximum price
min_price     | Integer         | Minimum price
rental_type[] | Array           | Array of rental types
sort_by       | String          | Sort by ...

## Amenities

If you want to filter your results by amenities you can add amenity's key as a boolean parameter.

e.g: `air_conditioning=1`

List of amenities key:

~~~ liquid
  {% for amenity in SearchForm.amenities %}
    {{ amenity.id }}
  {% endfor %}
~~~
